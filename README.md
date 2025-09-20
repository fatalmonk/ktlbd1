# Kattali Textile Ltd - Official Website

A modern, responsive website for Kattali Textile Ltd, Bangladesh's leading textile manufacturer and exporter since 2004.

## 🌟 Features

- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Professional UI**: Clean, corporate design reflecting industry standards

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ 
- npm or yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/fatalmonk/ktlbd1.git
cd ktlbd1

# Install dependencies
npm run install:all

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
ktlbd1/
├── project/                 # React application
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main app component
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   ├── dist/               # Build output (auto-generated)
│   └── package.json        # Project dependencies
├── .github/workflows/      # CI/CD workflows
├── hostinger-deploy/       # Deployment package
└── README.md               # This file
```

## 🌐 Deployment

### Hostinger (Production)

This website is optimized for Hostinger deployment with static hosting configuration.

#### Quick Deployment
1. Run the deployment script: `./deploy-hostinger.sh`
2. Upload files from `hostinger-deploy/` to your `public_html/` directory
3. Ensure your domain (ktlbd.com) points to your Hostinger account
4. Enable SSL certificate in Hostinger control panel

#### Manual Deployment
```bash
# Build the project
npm run build

# Upload all files from project/dist/ to public_html/
# Include the .htaccess file for SPA routing
```

### GitHub Pages

The repository includes a CI workflow that automatically builds and deploys to GitHub Pages on every push to the main branch. Your site will be available at: https://fatalmonk.github.io/ktlbd1/

### Docker

For containerized deployment, the project can be built into a Docker image:

```bash
# Build the project
npm run build

# Create Docker image
docker build -t ktlbd-website .

# Run container
docker run -p 8080:80 ktlbd-website
```

## 🛠️ Build Commands

```bash
# Install all dependencies (root + project)
npm run install:all

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🎨 Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Deployment**: Hostinger, GitHub Pages, Docker

## 📱 Pages & Components

### Main Pages
- **Home**: Company overview and key statistics
- **About**: Company history and mission
- **Products**: Textile product catalog
- **Manufacturing**: Production capabilities
- **Sustainability**: Environmental initiatives
- **Gallery**: Visual showcase
- **Contact**: Business inquiries

### Key Components
- **Header**: Navigation and branding
- **HeroVideo**: Dynamic hero section
- **FloatingCTA**: Call-to-action buttons
- **Footer**: Company information and links

## 🔧 Configuration

### Environment Variables
No environment variables required for basic deployment.

### Build Output
- **Directory**: `project/dist/`
- **Assets**: Optimized and compressed
- **Bundle Size**: ~2.0MB (gzipped: ~76KB)

### Performance Features
- **Code Splitting**: Automatic bundle optimization
- **Asset Optimization**: Images and fonts optimized
- **Caching**: Static assets cached for 1 year
- **SPA Routing**: Client-side navigation

## 📊 Performance Metrics

- **Build Time**: ~1.5 seconds
- **Bundle Size**: 2.0MB total
- **First Contentful Paint**: Optimized
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

## 🚀 CI/CD

### GitHub Actions
- **CI Workflow**: Automated testing and building
- **Deployment**: Automatic deployment on push to main
- **Quality Checks**: Linting and build verification

### Deployment Triggers
- **Push to main**: Automatic deployment to GitHub Pages
- **Manual**: Run `./deploy-hostinger.sh` for Hostinger deployment
- **Hostinger**: Upload files manually to `public_html/`

## 🐛 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm run install:all

# Verify Node.js version
node --version  # Should be 20+
```

#### Deployment Issues
- Check Hostinger file manager for uploaded files
- Verify `project/dist/` directory exists after build
- Ensure `.htaccess` file is uploaded for SPA routing

#### Asset Loading
- Verify `.htaccess` file is uploaded
- Check asset paths in built HTML
- Clear browser cache

### Support
For deployment issues, check:
1. Hostinger file manager and control panel
2. GitHub Actions workflow status
3. Local build verification
4. Check `HOSTINGER_DEPLOYMENT.md` for detailed instructions

## 📄 License

This project is proprietary software for Kattali Textile Ltd.

Built with modern web technologies and best practices for optimal performance and user experience.

---

**Kattali Textile Ltd** - Bangladesh's Leading Textile Manufacturer Since 2004
