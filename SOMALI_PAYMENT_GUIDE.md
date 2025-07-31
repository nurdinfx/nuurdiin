# 🇸🇴 Somali Payment System Guide

## Overview

This hotel management system uses Somali payment methods instead of Stripe, which doesn't work in Somalia. The system supports multiple local payment methods that are commonly used in Somalia.

## 🏦 Supported Payment Methods

### Mobile Money Services
- **EVC Plus** - Hormuud Telecom's mobile money service
- **Zaad** - Telesom's mobile money service  
- **Sahal** - Somtel's mobile money service
- **Amtel** - Amtel's mobile money service
- **Dahabshiil** - Dahabshiil's mobile money service
- **Taaj** - Taaj's mobile money service

### Bank Transfers
- **Premier Bank** - Direct bank transfers

### International Remittance
- **World Remit** - International money transfer service

## 💰 Fee Structure

| Payment Method | Fee | Min Amount | Max Amount |
|----------------|-----|------------|------------|
| EVC Plus | 0.5% | $1 | $10,000 |
| Zaad | 0.3% | $1 | $5,000 |
| Sahal | 0.4% | $1 | $3,000 |
| Premier Bank | 0% | $10 | $50,000 |
| Amtel | 0.5% | $1 | $2,000 |
| Dahabshiil | 0.2% | $5 | $10,000 |
| World Remit | 1.0% | $10 | $20,000 |
| Taaj | 0.3% | $1 | $1,500 |

## 🔧 Configuration

### Environment Variables

Add these to your `.env.local` file:

```env
# Somali Payment Configuration
SOMALI_PAYMENT_ENABLED=true
SOMALI_PAYMENT_WEBHOOK_SECRET=your_somali_webhook_secret
```

### Payment Configuration

The payment methods are configured in `src/libs/somali-payment.ts`. You can modify:

- Phone numbers for mobile money services
- Account numbers for bank transfers
- Fee percentages
- Min/max amounts
- Payment instructions

## 🚀 How It Works

### 1. Payment Request
When a user books a room, they select a payment method and provide:
- Phone number (for mobile money)
- Account number (for bank transfers)

### 2. Payment Processing
The system:
1. Calculates the total amount including fees
2. Validates payment limits
3. Generates a unique reference number
4. Creates payment instructions
5. Sets a 24-hour expiration time

### 3. Payment Instructions
Users receive specific instructions for their chosen payment method:
- Mobile number to send payment to
- Reference number to include
- Amount to pay

### 4. Payment Verification
The system tracks payment status and can be extended to:
- Webhook notifications from payment providers
- Manual verification by admin
- SMS confirmations

## 📱 Mobile Money Integration

### EVC Plus Example
```
Send payment to: 252-61-1234567
Reference: REF-1234567890-ABC123
Amount: $150.75
```

### Zaad Example
```
Send payment to: 252-61-7654321
Reference: REF-1234567890-DEF456
Amount: $120.36
```

## 🏦 Bank Transfer Integration

### Premier Bank Example
```
Bank Transfer to:
Account: 1234567890
Reference: REF-1234567890-GHI789
Amount: $500.00
```

## 🔄 Webhook Support

The system supports webhooks for payment confirmations:

```typescript
// Webhook endpoint for payment confirmations
POST /api/somali-payment/webhook
```

## 🛡️ Security Features

- **Unique Reference Numbers** - Each payment gets a unique reference
- **Expiration Times** - Payments expire after 24 hours
- **Amount Validation** - Prevents over/under payments
- **Authentication Required** - Only authenticated users can make payments

## 📊 Payment Tracking

Each payment is tracked with:
- Payment ID
- Reference number
- Amount and fees
- Payment method
- Status (pending/completed/failed)
- Expiration time
- User and room information

## 🔧 Customization

### Adding New Payment Methods

1. Add the method to `SomaliPaymentMethod` type
2. Add configuration in `somaliPaymentConfig.paymentMethods`
3. Update validation logic if needed

### Modifying Fees

Edit the `fee` property in the payment method configuration:

```typescript
evc: {
  name: 'EVC Plus',
  fee: 0.5, // 0.5% fee
  // ... other config
}
```

### Changing Phone Numbers

Update the `phoneNumber` property for mobile money services:

```typescript
evc: {
  phoneNumber: '252-61-1234567', // Your actual EVC number
  // ... other config
}
```

## 🚨 Important Notes

1. **Phone Numbers**: Replace the example phone numbers with actual business numbers
2. **Account Numbers**: Update bank account numbers with real business accounts
3. **Webhook Secret**: Generate a secure webhook secret for payment confirmations
4. **Testing**: Test all payment methods before going live
5. **Compliance**: Ensure compliance with local financial regulations

## 📞 Support

For questions about Somali payment integration, refer to:
- Local mobile money providers' documentation
- Bank transfer requirements
- Financial regulations in Somalia

## 🔄 Migration from Stripe

This system completely replaces Stripe with Somali payment methods:

✅ **Removed**: Stripe API keys and webhooks  
✅ **Added**: Somali payment methods and local integration  
✅ **Updated**: Environment variables and configuration  
✅ **Maintained**: Same user experience and payment flow 