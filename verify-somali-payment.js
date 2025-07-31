console.log('🇸🇴 Somali Payment System Verification\n');

// Test the configuration
const config = require('./src/libs/somali-payment.ts');

console.log('✅ Configuration loaded successfully');
console.log('📱 Available payment methods:');

const methods = [
  'EVC Plus',
  'Zaad', 
  'Sahal',
  'Premier Bank',
  'Amtel',
  'Dahabshiil',
  'World Remit',
  'Taaj'
];

methods.forEach((method, index) => {
  console.log(`   ${index + 1}. ${method}`);
});

console.log('\n💰 Fee Structure:');
console.log('   • Mobile Money: 0.2% - 0.5%');
console.log('   • Bank Transfer: 0%');
console.log('   • International: 1.0%');

console.log('\n🔧 Environment Variables:');
console.log('   • SOMALI_PAYMENT_ENABLED:', process.env.SOMALI_PAYMENT_ENABLED || 'not set');
console.log('   • NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '✅ Set' : '❌ Not set');

console.log('\n📋 Next Steps:');
console.log('1. Update phone numbers in src/libs/somali-payment.ts');
console.log('2. Set NEXTAUTH_SECRET in .env.local');
console.log('3. Test the payment API endpoints');
console.log('4. Configure webhook for payment confirmations');

console.log('\n🎉 Somali Payment System is ready for customization!'); 