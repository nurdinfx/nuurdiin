const fs = require('fs');
const path = require('path');

console.log('🔗 Hotel Management App - Connection Setup\n');
console.log('=' .repeat(50));

// Check if .env.local exists
const envPath = path.join(__dirname, '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('📝 Creating .env.local file...\n');
  
  const envContent = `# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_TOKEN=your-sanity-token-here

# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers (optional)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ .env.local file created!\n');
} else {
  console.log('✅ .env.local file already exists\n');
}

console.log('📋 Next Steps:');
console.log('1. Replace "your-project-id-here" with your Sanity Project ID');
console.log('2. Replace "your-sanity-token-here" with your Sanity Token');
console.log('3. Replace "your-secret-key-here" with a secure random string');
console.log('4. Add OAuth credentials if using social login\n');

console.log('🔧 To test the connection, run:');
console.log('   node test-connection.js\n');

console.log('🚀 To start development server:');
console.log('   npm run dev\n');

console.log('📚 For detailed instructions, see CONNECTION_SETUP.md');
console.log('=' .repeat(50)); 