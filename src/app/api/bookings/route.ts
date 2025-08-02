import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

import { authOptions } from '@/libs/auth';
import { createBooking, updateHotelRoom } from '@/libs/apis';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Authentication Required', { status: 401 });
  }

  try {
    const {
      hotelRoom,
      checkinDate,
      checkoutDate,
      numberOfDays,
      adults,
      children,
      totalPrice,
      discount = 0,
      specialRequests,
      paymentMethod,
    } = await req.json();

    // Validate required fields
    if (!hotelRoom || !checkinDate || !checkoutDate || !numberOfDays || !adults || !children || !totalPrice) {
      return new Response('All required fields are missing', { status: 400 });
    }

    // Validate dates
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    const now = new Date();

    if (checkin < now) {
      return new Response('Check-in date cannot be in the past', { status: 400 });
    }

    if (checkout <= checkin) {
      return new Response('Check-out date must be after check-in date', { status: 400 });
    }

    // Validate numbers
    if (numberOfDays < 1) {
      return new Response('Number of days must be at least 1', { status: 400 });
    }

    if (adults < 1) {
      return new Response('At least 1 adult is required', { status: 400 });
    }

    if (children < 0) {
      return new Response('Number of children cannot be negative', { status: 400 });
    }

    if (totalPrice < 0) {
      return new Response('Total price cannot be negative', { status: 400 });
    }

    const userId = session.user.id;

    // Create the booking
    const booking = await createBooking({
      hotelRoom,
      checkinDate: checkin.toISOString(),
      checkoutDate: checkout.toISOString(),
      numberOfDays,
      adults,
      children,
      totalPrice,
      discount,
      user: userId,
      specialRequests,
      paymentMethod,
    });

    // Update hotel room availability
    await updateHotelRoom(hotelRoom);

    return NextResponse.json(
      { 
        success: true, 
        booking,
        message: 'Booking created successfully' 
      }, 
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating booking:', error);
    return new Response(
      error.message || 'Unable to create booking', 
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response('Authentication Required', { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId') || session.user.id;

    // Import the getUserBookings function
    const { getUserBookings } = await import('@/libs/apis');
    const bookings = await getUserBookings(userId);

    return NextResponse.json({ bookings });
  } catch (error: any) {
    console.error('Error fetching bookings:', error);
    return new Response(
      error.message || 'Unable to fetch bookings', 
      { status: 500 }
    );
  }
} 