const axios = require('axios');

async function testSomaliPayment() {
  try {
    console.log('🧪 Testing Somali Payment System...\n');

    // Test 1: Get available payment methods
    console.log('1️⃣ Testing GET /api/somali-payment (payment methods)');
    const methodsResponse = await axios.get('http://localhost:3000/api/somali-payment');
    console.log('✅ Payment methods retrieved successfully');
    console.log('📋 Available methods:', methodsResponse.data.methods.map(m => m.name).join(', '));
    console.log('');

    // Test 2: Test payment creation (this will fail without auth, but we can test the endpoint)
    console.log('2️⃣ Testing POST /api/somali-payment (payment creation)');
    try {
      const paymentData = {
        checkinDate: '2024-01-15',
        checkoutDate: '2024-01-17',
        adults: 2,
        children: 1,
        numberOfDays: 2,
        hotelRoomSlug: 'test-room',
        paymentMethod: 'evc',
        phoneNumber: '252-61-1234567'
      };

      const paymentResponse = await axios.post('http://localhost:3000/api/somali-payment', paymentData);
      console.log('✅ Payment creation successful');
      console.log('💰 Amount:', paymentResponse.data.amount);
      console.log('📱 Instructions:', paymentResponse.data.instructions);
    } catch (error) {
      if (error.response?.status === 401) {
        console.log('⚠️ Payment creation failed (expected - authentication required)');
        console.log('✅ API endpoint is working correctly');
      } else {
        console.log('❌ Payment creation failed:', error.message);
      }
    }

    console.log('\n🎉 Somali Payment System Test Complete!');
    console.log('\n📝 Next Steps:');
    console.log('1. Update phone numbers in src/libs/somali-payment.ts');
    console.log('2. Test with authentication');
    console.log('3. Configure webhook for payment confirmations');

  } catch (error) {
    console.log('❌ Test failed:', error.message);
    console.log('\n💡 Make sure the development server is running: npm run dev');
  }
}

testSomaliPayment(); 