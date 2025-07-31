const { createClient } = require('next-sanity');

// Test Sanity connection
async function testSanityConnection() {
  console.log('🔍 Testing Sanity Connection...\n');

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_STUDIO_TOKEN;

  console.log('📋 Environment Variables:');
  console.log(`Project ID: ${projectId ? '✅ Set' : '❌ Missing'}`);
  console.log(`Dataset: ${dataset ? '✅ Set' : '❌ Missing'}`);
  console.log(`Token: ${token ? '✅ Set' : '❌ Missing'}\n`);

  if (!projectId || !dataset || !token) {
    console.log('❌ Missing required environment variables!');
    console.log('Please check your .env.local file.');
    return;
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      useCdn: false,
      token,
      apiVersion: '2021-10-21',
    });

    // Test query
    const result = await client.fetch('*[_type == "hotelRoom"][0...1]');
    
    console.log('✅ Sanity connection successful!');
    console.log(`📊 Found ${result.length} hotel rooms`);
    
    if (result.length > 0) {
      console.log('📝 Sample room data:');
      console.log(JSON.stringify(result[0], null, 2));
    }

  } catch (error) {
    console.log('❌ Sanity connection failed!');
    console.log('Error:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your Project ID');
    console.log('2. Verify your Token has correct permissions');
    console.log('3. Ensure dataset name is correct');
  }
}

// Test environment variables
function testEnvironmentVariables() {
  console.log('🔧 Testing Environment Variables...\n');

  const requiredVars = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET',
    'SANITY_STUDIO_TOKEN',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL'
  ];

  console.log('📋 Required Variables:');
  requiredVars.forEach(varName => {
    const value = process.env[varName];
    console.log(`${varName}: ${value ? '✅ Set' : '❌ Missing'}`);
  });
}

// Run tests
console.log('🚀 Hotel Management App - Connection Test\n');
console.log('=' .repeat(50));

testEnvironmentVariables();
console.log('\n' + '=' .repeat(50));
testSanityConnection();

console.log('\n' + '=' .repeat(50));
console.log('📚 For setup help, see FRONTEND_BACKEND_CONNECTION.md'); 