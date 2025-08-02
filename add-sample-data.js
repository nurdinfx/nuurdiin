const { createClient } = require('@sanity/client')

// Sanity client configuration
const client = createClient({
  projectId: '8974gpyo',
  dataset: 'production',
  apiVersion: '2025-08-01',
  token: 'skdsOtJMmHhIHSnnaPnZrMBl3WZrxTLipdVBusDcAi0mljhlq7EZxrfFPQJUxXZNeuuXSmpnJPprvzMdU1I', // Your token
  useCdn: false,
})

// Sample hotel room data
const sampleRooms = [
  {
    _type: 'hotelRoom',
    name: 'Luxury Suite',
    slug: {
      _type: 'slug',
      current: 'luxury-suite'
    },
    description: 'Experience ultimate luxury in our premium suite featuring panoramic city views, a private balcony, and exclusive amenities. Perfect for discerning travelers seeking the finest accommodations.',
    price: 450,
    discount: 20,
    type: 'suite',
    dimension: '650 sq ft',
    numberOfBeds: 1,
    specialNote: 'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    isBooked: false,
    isFeatured: true,
    coverImage: {
      _type: 'object',
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      file: null
    },
    images: [
      {
        _key: 'image1',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image2',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image3',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?w=800&h=600&fit=crop',
        file: null
      }
    ],
    offeredAmenities: [
      { _key: 'wifi', amenity: 'Free WiFi', icon: 'wifi' },
      { _key: 'tv', amenity: 'Smart TV', icon: 'tv' },
      { _key: 'ac', amenity: 'Air Conditioning', icon: 'snowflake' },
      { _key: 'minibar', amenity: 'Mini Bar', icon: 'glass' },
      { _key: 'balcony', amenity: 'Private Balcony', icon: 'home' },
      { _key: 'roomservice', amenity: 'Room Service', icon: 'bell' }
    ]
  },
  {
    _type: 'hotelRoom',
    name: 'Deluxe King Room',
    slug: {
      _type: 'slug',
      current: 'deluxe-king-room'
    },
    description: 'Spacious and elegant king room with modern amenities and comfortable furnishings. Features a king-size bed, work desk, and city views for a perfect stay.',
    price: 280,
    discount: 15,
    type: 'luxury',
    dimension: '400 sq ft',
    numberOfBeds: 1,
    specialNote: 'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    isBooked: false,
    isFeatured: true,
    coverImage: {
      _type: 'object',
      url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
      file: null
    },
    images: [
      {
        _key: 'image1',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image2',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image3',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        file: null
      }
    ],
    offeredAmenities: [
      { _key: 'wifi', amenity: 'Free WiFi', icon: 'wifi' },
      { _key: 'tv', amenity: 'Smart TV', icon: 'tv' },
      { _key: 'ac', amenity: 'Air Conditioning', icon: 'snowflake' },
      { _key: 'minibar', amenity: 'Mini Bar', icon: 'glass' },
      { _key: 'workdesk', amenity: 'Work Desk', icon: 'briefcase' }
    ]
  },
  {
    _type: 'hotelRoom',
    name: 'Standard Twin Room',
    slug: {
      _type: 'slug',
      current: 'standard-twin-room'
    },
    description: 'Comfortable twin room perfect for business travelers or friends. Features two single beds, essential amenities, and a clean, modern design.',
    price: 180,
    discount: 10,
    type: 'basic',
    dimension: '300 sq ft',
    numberOfBeds: 2,
    specialNote: 'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    isBooked: false,
    isFeatured: false,
    coverImage: {
      _type: 'object',
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?w=800&h=600&fit=crop',
      file: null
    },
    images: [
      {
        _key: 'image1',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image2',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image3',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        file: null
      }
    ],
    offeredAmenities: [
      { _key: 'wifi', amenity: 'Free WiFi', icon: 'wifi' },
      { _key: 'tv', amenity: 'Smart TV', icon: 'tv' },
      { _key: 'ac', amenity: 'Air Conditioning', icon: 'snowflake' },
      { _key: 'coffee', amenity: 'Coffee Maker', icon: 'coffee' }
    ]
  },
  {
    _type: 'hotelRoom',
    name: 'Family Suite',
    slug: {
      _type: 'slug',
      current: 'family-suite'
    },
    description: 'Spacious family suite with separate living area and two bedrooms. Perfect for families with children, featuring comfortable beds and family-friendly amenities.',
    price: 350,
    discount: 25,
    type: 'suite',
    dimension: '800 sq ft',
    numberOfBeds: 3,
    specialNote: 'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    isBooked: false,
    isFeatured: true,
    coverImage: {
      _type: 'object',
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      file: null
    },
    images: [
      {
        _key: 'image1',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image2',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image3',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?w=800&h=600&fit=crop',
        file: null
      }
    ],
    offeredAmenities: [
      { _key: 'wifi', amenity: 'Free WiFi', icon: 'wifi' },
      { _key: 'tv', amenity: 'Smart TV', icon: 'tv' },
      { _key: 'ac', amenity: 'Air Conditioning', icon: 'snowflake' },
      { _key: 'kitchen', amenity: 'Kitchenette', icon: 'utensils' },
      { _key: 'playground', amenity: 'Kids Play Area', icon: 'child' },
      { _key: 'laundry', amenity: 'Laundry Service', icon: 'tshirt' }
    ]
  },
  {
    _type: 'hotelRoom',
    name: 'Executive Business Room',
    slug: {
      _type: 'slug',
      current: 'executive-business-room'
    },
    description: 'Professional business room designed for corporate travelers. Features a large work desk, high-speed internet, and business amenities for productive stays.',
    price: 320,
    discount: 0,
    type: 'luxury',
    dimension: '450 sq ft',
    numberOfBeds: 1,
    specialNote: 'Check-in time is 12:00 PM, checkout time is 11:59 AM. If you leave behind any items, please contact the receptionist.',
    isBooked: false,
    isFeatured: false,
    coverImage: {
      _type: 'object',
      url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
      file: null
    },
    images: [
      {
        _key: 'image1',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image2',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1582719478250-c89cae4cb85b?w=800&h=600&fit=crop',
        file: null
      },
      {
        _key: 'image3',
        _type: 'object',
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
        file: null
      }
    ],
    offeredAmenities: [
      { _key: 'wifi', amenity: 'High-Speed WiFi', icon: 'wifi' },
      { _key: 'tv', amenity: 'Smart TV', icon: 'tv' },
      { _key: 'ac', amenity: 'Air Conditioning', icon: 'snowflake' },
      { _key: 'workdesk', amenity: 'Executive Desk', icon: 'briefcase' },
      { _key: 'printer', amenity: 'Printer Service', icon: 'print' },
      { _key: 'conference', amenity: 'Conference Room Access', icon: 'users' }
    ]
  }
]

// Function to add sample data
async function addSampleData() {
  console.log('🚀 Adding sample hotel room data to Sanity...')
  
  try {
    for (const room of sampleRooms) {
      const result = await client.create(room)
      console.log(`✅ Added: ${room.name} (ID: ${result._id})`)
    }
    
    console.log('\n🎉 Successfully added all sample hotel rooms!')
    console.log('📊 You can now view them in your Sanity Studio')
    console.log('🌐 Your frontend will now display real data instead of fallback data')
    
  } catch (error) {
    console.error('❌ Error adding sample data:', error.message)
    console.log('💡 Make sure your Sanity token is correct and has write permissions')
  }
}

// Run the function
addSampleData() 