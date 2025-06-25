
#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building static web app...');

try {
  // Clean previous build
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true });
  }

  // Build the app
  execSync('npm run build', { stdio: 'inherit' });

  // Create a simple server info file
  const serverInfo = {
    name: "AcmeTech Status Dashboard",
    version: "1.0.0",
    built: new Date().toISOString(),
    type: "static-web-app"
  };

  fs.writeFileSync(
    path.join('dist', 'app-info.json'), 
    JSON.stringify(serverInfo, null, 2)
  );

  console.log('✅ Static web app built successfully!');
  console.log('📁 Files are in the ./dist directory');
  console.log('🌐 You can serve this directory with any static web server');
  console.log('');
  console.log('Quick test with Python:');
  console.log('  cd dist && python -m http.server 8080');
  console.log('');
  console.log('Quick test with Node.js (npx serve):');
  console.log('  npx serve dist -p 8080');

} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
