// Somali Payment Configuration
export interface SomaliPaymentConfig {
  enabled: boolean;
  webhookSecret: string;
  defaultCurrency: string;
  paymentMethods: {
    [key: string]: {
      name: string;
      instructions: string;
      minAmount: number;
      maxAmount: number;
      fee: number;
      type: 'mobile_money' | 'bank_transfer' | 'remittance';
      phoneNumber?: string;
      accountNumber?: string;
    };
  };
}

export const somaliPaymentConfig: SomaliPaymentConfig = {
  enabled: process.env.SOMALI_PAYMENT_ENABLED === 'true',
  webhookSecret: process.env.SOMALI_PAYMENT_WEBHOOK_SECRET || '',
  defaultCurrency: 'USD',
  paymentMethods: {
    evc: {
      name: 'EVC Plus',
      instructions: 'Send payment to: 252-61-1234567\nReference: {reference}',
      minAmount: 1,
      maxAmount: 10000,
      fee: 0.5,
      type: 'mobile_money',
      phoneNumber: '252-61-1234567',
    },
    zaad: {
      name: 'Zaad',
      instructions: 'Send payment to: 252-61-7654321\nReference: {reference}',
      minAmount: 1,
      maxAmount: 5000,
      fee: 0.3,
      type: 'mobile_money',
      phoneNumber: '252-61-7654321',
    },
    sahal: {
      name: 'Sahal',
      instructions: 'Send payment to: 252-61-9876543\nReference: {reference}',
      minAmount: 1,
      maxAmount: 3000,
      fee: 0.4,
      type: 'mobile_money',
      phoneNumber: '252-61-9876543',
    },
    premier_bank: {
      name: 'Premier Bank',
      instructions: 'Bank Transfer to:\nAccount: 1234567890\nReference: {reference}',
      minAmount: 10,
      maxAmount: 50000,
      fee: 0,
      type: 'bank_transfer',
      accountNumber: '1234567890',
    },
    amtel: {
      name: 'Amtel',
      instructions: 'Send payment to: 252-61-1111111\nReference: {reference}',
      minAmount: 1,
      maxAmount: 2000,
      fee: 0.5,
      type: 'mobile_money',
      phoneNumber: '252-61-1111111',
    },
    dahabshiil: {
      name: 'Dahabshiil',
      instructions: 'Send payment to: 252-61-2222222\nReference: {reference}',
      minAmount: 5,
      maxAmount: 10000,
      fee: 0.2,
      type: 'mobile_money',
      phoneNumber: '252-61-2222222',
    },
    world_remit: {
      name: 'World Remit',
      instructions: 'Send payment via World Remit\nReference: {reference}',
      minAmount: 10,
      maxAmount: 20000,
      fee: 1.0,
      type: 'remittance',
    },
    taaj: {
      name: 'Taaj',
      instructions: 'Send payment to: 252-61-3333333\nReference: {reference}',
      minAmount: 1,
      maxAmount: 1500,
      fee: 0.3,
      type: 'mobile_money',
      phoneNumber: '252-61-3333333',
    },
  },
};

export function getPaymentMethodConfig(method: string) {
  return somaliPaymentConfig.paymentMethods[method];
}

export function calculatePaymentFee(amount: number, method: string): number {
  const config = getPaymentMethodConfig(method);
  if (!config) return 0;
  return (amount * config.fee) / 100;
}

export function validatePaymentAmount(amount: number, method: string): { valid: boolean; message?: string } {
  const config = getPaymentMethodConfig(method);
  if (!config) {
    return { valid: false, message: 'Invalid payment method' };
  }
  
  if (amount < config.minAmount) {
    return { valid: false, message: `Minimum amount for ${config.name} is $${config.minAmount}` };
  }
  
  if (amount > config.maxAmount) {
    return { valid: false, message: `Maximum amount for ${config.name} is $${config.maxAmount}` };
  }
  
  return { valid: true };
} 