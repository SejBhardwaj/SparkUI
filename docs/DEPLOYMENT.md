# Deployment Guide

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)

## Build for Production

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build production bundle
npm run build
```

The built files will be in the `dist/` directory.

## Docker Deployment

```bash
# Build Docker image
docker build -t ui-components:latest .

# Run container
docker run -p 80:80 ui-components:latest
```

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

## Deployment Platforms

### Vercel

```bash
npm install -g vercel
vercel deploy
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### AWS S3 + CloudFront

1. Build the project
2. Upload `dist/` to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

## Performance Optimization

- Enable gzip compression
- Set proper cache headers
- Use CDN for static assets
- Implement code splitting
- Lazy load components

## Monitoring

- Set up error tracking (Sentry)
- Configure analytics
- Monitor bundle size
- Track Core Web Vitals
