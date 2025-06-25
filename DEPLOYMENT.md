
# AcmeTech Status Dashboard - Static Deployment Guide

This React application is built as a static web app that can be deployed to any static hosting service.

## Building for Production

```bash
# Install dependencies
npm install

# Build the static app
npm run build
```

The built files will be in the `dist/` directory.

## Quick Local Testing

### Option 1: Using Python
```bash
cd dist
python -m http.server 8080
```

### Option 2: Using Node.js serve
```bash
npx serve dist -p 8080
```

### Option 3: Using PHP (if available)
```bash
cd dist
php -S localhost:8080
```

Then open http://localhost:8080 in your browser.

## Deployment Options

### Static Hosting Services
- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Push `dist` contents to `gh-pages` branch
- **AWS S3**: Upload `dist` contents to an S3 bucket with static hosting enabled
- **Azure Static Web Apps**: Deploy directly from GitHub/GitLab
- **Firebase Hosting**: Use Firebase CLI to deploy

### Traditional Web Servers
- **Apache**: Copy `dist` contents to document root
- **Nginx**: Copy `dist` contents to web root directory
- **IIS**: Copy `dist` contents to wwwroot folder

## Important Notes

1. The app uses client-side routing, so configure your server to serve `index.html` for all routes
2. All assets use relative paths for maximum compatibility
3. The build is optimized for production with minification and bundling
4. No server-side processing required - pure static files

## Server Configuration Examples

### Apache (.htaccess)
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

### Nginx
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

The application will work perfectly as a static web app once built!
