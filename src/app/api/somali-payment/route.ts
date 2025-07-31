import { authOptions } from '@/libs/auth';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { getRoom } from '@/libs/apis';
import { somaliPaymentConfig, calculatePaymentFee, validatePaymentAmount } from '@/libs/somali-payment';

// Somali Payment Methods
export type SomaliPaymentMethod = 
  | 'evc' 
  | 'zaad' 
  | 'sahal' 
  | 'premier_bank' 
  | 'amtel' 
  | 'dahabshiil' 
  | 'world_remit' 
  | 'taaj';

export interface SomaliPaymentRequest {
  checkinDate: string;
  checkoutDate: string;
  adults: number;
  children: number;
  numberOfDays: number;
  hotelRoomSlug: string;
  paymentMethod: SomaliPaymentMethod;
  phoneNumber?: string; // For mobile money payments
  accountNumber?: string; // For bank transfers
}

export interface SomaliPaymentResponse {
  success: boolean;
  paymentId: string;
  amount: number;
  currency: string;
  paymentMethod: SomaliPaymentMethod;
  instructions: string;
  referenceNumber: string;
  expiresAt: string;
}



export async function POST(req: Request): Promise<Response> {
  try {
    const {
      checkinDate,
      checkoutDate,
      adults,
      children,
      hotelRoomSlug,
      numberOfDays,
      paymentMethod,
      phoneNumber,
      accountNumber,
    }: SomaliPaymentRequest = await req.json();

    // Validate required fields
    if (
      !checkinDate ||
      !checkoutDate ||
      !adults ||
      !hotelRoomSlug ||
      !numberOfDays ||
      !paymentMethod
    ) {
      return new NextResponse('All fields are required', { status: 400 });
    }

    // Validate payment method
    if (!somaliPaymentConfig.paymentMethods[paymentMethod]) {
      return new NextResponse('Invalid payment method', { status: 400 });
    }

    // Validate phone number for mobile money payments
    const paymentConfig = somaliPaymentConfig.paymentMethods[paymentMethod];
    if (paymentConfig.type === 'mobile_money' && !phoneNumber) {
      return new NextResponse('Phone number required for mobile money payments', { status: 400 });
    }

    // Validate account number for bank transfers
    if (paymentConfig.type === 'bank_transfer' && !accountNumber) {
      return new NextResponse('Account number required for bank transfers', { status: 400 });
    }

    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session) {
      return new NextResponse('Authentication required', { status: 401 });
    }

    const userId = session.user.id;
    const formattedCheckoutDate = checkoutDate.split('T')[0];
    const formattedCheckinDate = checkinDate.split('T')[0];

    // Get room details
    const room = await getRoom(hotelRoomSlug);
    
    if (!room) {
      return new NextResponse('Room not found', { status: 404 });
    }
    
    const discountPrice = room.price - (room.price / 100) * room.discount;
    const baseAmount = discountPrice * numberOfDays;
    
    // Calculate fees
    const feeAmount = calculatePaymentFee(baseAmount, paymentMethod);
    const totalAmount = baseAmount + feeAmount;

    // Validate amount limits
    const validation = validatePaymentAmount(totalAmount, paymentMethod);
    if (!validation.valid) {
      return new NextResponse(validation.message, { status: 400 });
    }

    // Generate unique payment ID and reference
    const paymentId = `SOM-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const referenceNumber = `REF-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    
    // Set expiration time (24 hours from now)
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    // Create payment record in Sanity (you'll need to create a payment schema)
    const paymentData = {
      _type: 'payment',
      paymentId,
      referenceNumber,
      userId,
      roomId: room._id,
      amount: totalAmount,
      baseAmount,
      feeAmount,
      currency: 'USD',
      paymentMethod,
      status: 'pending',
      checkinDate: formattedCheckinDate,
      checkoutDate: formattedCheckoutDate,
      adults,
      children,
      numberOfDays,
      phoneNumber,
      accountNumber,
      expiresAt,
      createdAt: new Date().toISOString(),
    };

    // TODO: Save payment to Sanity database
    // const savedPayment = await sanityClient.create(paymentData);

    // Generate payment instructions
    const instructions = paymentConfig.instructions.replace('{reference}', referenceNumber);

    const response: SomaliPaymentResponse = {
      success: true,
      paymentId,
      amount: totalAmount,
      currency: 'USD',
      paymentMethod,
      instructions,
      referenceNumber,
      expiresAt,
    };

    return NextResponse.json(response, {
      status: 200,
      statusText: 'Payment session created',
    });

  } catch (error: any) {
    console.log('Somali payment failed:', error);
    return new NextResponse(error.message || 'Payment failed', { status: 500 });
  }
}

// Get available payment methods
export async function GET(): Promise<Response> {
  const methods = Object.entries(somaliPaymentConfig.paymentMethods).map(([key, config]) => ({
    id: key,
    name: config.name,
    minAmount: config.minAmount,
    maxAmount: config.maxAmount,
    fee: config.fee,
    type: config.type,
  }));

  return NextResponse.json({ methods });
} 