const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: '8974gpyo',
  dataset: 'production',
  apiVersion: '2025-08-01',
  token: 'skdsOtJMmHhIHSnnaPnZrMBl3WZrxTLipdVBusDcAi0mljhlq7EZxrfFPQJUxXZNeuuXSmpnJPprvzMdU1I',
  useCdn: false,
})

// Sample booking data
const sampleBookings = [
  {
    _type: 'booking',
    user: {
      _type: 'reference',
      _ref: 'user-1' // You'll need to replace with actual user ID
    },
    hotelRoom: {
      _type: 'reference',
      _ref: 'hotelRoom-1' // You'll need to replace with actual room ID
    },
    checkinDate: '2025-01-15T14:00:00.000Z',
    checkoutDate: '2025-01-17T11:00:00.000Z',
    numberOfDays: 2,
    adults: 2,
    children: 1,
    totalPrice: 560,
    discount: 50,
    status: 'confirmed',
    paymentStatus: 'paid',
    paymentMethod: 'credit_card',
    specialRequests: 'Early check-in if possible, and extra towels please.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _type: 'booking',
    user: {
      _type: 'reference',
      _ref: 'user-2' // You'll need to replace with actual user ID
    },
    hotelRoom: {
      _type: 'reference',
      _ref: 'hotelRoom-2' // You'll need to replace with actual room ID
    },
    checkinDate: '2025-01-20T15:00:00.000Z',
    checkoutDate: '2025-01-22T11:00:00.000Z',
    numberOfDays: 2,
    adults: 1,
    children: 0,
    totalPrice: 320,
    discount: 0,
    status: 'pending',
    paymentStatus: 'pending',
    paymentMethod: 'somali_payment',
    specialRequests: 'Quiet room preferred.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    _type: 'booking',
    user: {
      _type: 'reference',
      _ref: 'user-3' // You'll need to replace with actual user ID
    },
    hotelRoom: {
      _type: 'reference',
      _ref: 'hotelRoom-3' // You'll need to replace with actual room ID
    },
    checkinDate: '2025-01-25T12:00:00.000Z',
    checkoutDate: '2025-01-28T11:00:00.000Z',
    numberOfDays: 3,
    adults: 4,
    children: 2,
    totalPrice: 1050,
    discount: 100,
    status: 'confirmed',
    paymentStatus: 'paid',
    paymentMethod: 'paypal',
    specialRequests: 'Family suite with connecting rooms if available.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
]

// Function to add sample booking data
async function addSampleBookings() {
  console.log('🚀 Adding sample booking data to Sanity...')
  
  try {
    // First, let's get existing users and rooms to use their IDs
    const users = await client.fetch('*[_type == "user"] | {_id, name}')
    const rooms = await client.fetch('*[_type == "hotelRoom"] | {_id, name}')
    
    console.log('📊 Found users:', users.length)
    console.log('🏨 Found rooms:', rooms.length)
    
    if (users.length === 0) {
      console.log('❌ No users found. Please add users first.')
      return
    }
    
    if (rooms.length === 0) {
      console.log('❌ No rooms found. Please add rooms first.')
      return
    }
    
    // Update booking data with actual user and room IDs
    const updatedBookings = sampleBookings.map((booking, index) => ({
      ...booking,
      user: {
        _type: 'reference',
        _ref: users[index % users.length]._id
      },
      hotelRoom: {
        _type: 'reference',
        _ref: rooms[index % rooms.length]._id
      }
    }))
    
    for (const booking of updatedBookings) {
      const result = await client.create(booking)
      console.log(`✅ Added booking: ${result._id} for room ${rooms.find(r => r._id === booking.hotelRoom._ref)?.name}`)
    }
    
    console.log('\n🎉 Successfully added all sample bookings!')
    console.log('📊 You can now view them in your Sanity Studio')
    console.log('🌐 Your frontend will now display real booking data')
    
  } catch (error) {
    console.error('❌ Error adding sample bookings:', error.message)
    console.log('💡 Make sure you have users and rooms in your Sanity Studio first')
  }
}

// Run the function
addSampleBookings() 