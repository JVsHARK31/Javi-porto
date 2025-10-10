# 🚀 Panduan Deployment Website Portfolio

Panduan lengkap untuk deploy website portfolio Javier Muhammad Athallah ke berbagai platform hosting.

---

## 📋 Persiapan Sebelum Deploy

### 1. Build Test Lokal
```bash
npm run build
npm start
```

Pastikan tidak ada error dan website berjalan sempurna di `http://localhost:3000`

### 2. Checklist Pre-Deploy

- [x] Semua informasi personal sudah diupdate
- [x] Foto profil sudah diganti
- [x] Links social media sudah benar
- [x] Proyek-proyek sudah ditambahkan
- [x] Contact form berfungsi dengan baik
- [x] Test di berbagai device (mobile, tablet, desktop)
- [x] Test dark/light mode
- [x] No console errors
- [x] Images dioptimasi

---

## 🌐 Deploy ke Vercel (Recommended)

Vercel adalah platform terbaik untuk Next.js dengan free tier yang generous.

### Method 1: Via GitHub (Paling Mudah)

#### Step 1: Push ke GitHub

```bash
# Initialize git (jika belum)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Javier portfolio with sakura theme"

# Add remote (ganti dengan repo Anda)
git remote add origin https://github.com/javierathallah/portfolio.git

# Push
git push -u origin main
```

#### Step 2: Deploy di Vercel

1. Kunjungi [vercel.com](https://vercel.com)
2. Sign up/Login dengan GitHub
3. Click "New Project"
4. Import repository portfolio
5. Vercel akan auto-detect Next.js
6. Click "Deploy"
7. Tunggu 2-3 menit
8. Selesai! 🎉

**Custom Domain (Optional)**:
- Settings → Domains
- Add domain Anda
- Follow DNS setup instructions

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd javier-portfolio-sakura
vercel

# Follow prompts
# - Link to existing project? No
# - Project name: javier-portfolio
# - Directory: ./
```

**Production Deploy**:
```bash
vercel --prod
```

---

## 🔷 Deploy ke Netlify

### Step 1: Build Settings

Create file `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

### Step 2: Deploy

#### Via Netlify UI

1. Kunjungi [netlify.com](https://netlify.com)
2. Drag & drop folder project
3. Atau connect ke GitHub repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy!

#### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod
```

---

## 🚂 Deploy ke Railway

### Step 1: Create Account

1. Kunjungi [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 2: Deploy

1. New Project → Deploy from GitHub repo
2. Select portfolio repository
3. Railway auto-detects Next.js
4. Click Deploy
5. Tunggu build selesai
6. Get public URL

**Environment Variables** (jika perlu):
- Dashboard → Variables
- Add KEY=VALUE pairs

---

## 📦 Deploy ke Hostinger/cPanel

### Step 1: Build Static Export

Update `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Step 2: Build & Export

```bash
npm run build
```

Output ada di folder `out/`

### Step 3: Upload

1. Login ke cPanel
2. File Manager → public_html
3. Upload semua file dari folder `out/`
4. Done!

---

## 🐳 Deploy dengan Docker

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Build & Run

```bash
# Build image
docker build -t javier-portfolio .

# Run container
docker run -p 3000:3000 javier-portfolio
```

---

## 🌍 Custom Domain Setup

### 1. Beli Domain

Rekomendasi provider:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### 2. Connect Domain ke Vercel

1. Vercel Dashboard → Settings → Domains
2. Add domain (contoh: `javierathallah.com`)
3. Copy nameservers yang diberikan
4. Update di domain provider
5. Tunggu DNS propagation (15-30 menit)

### 3. SSL Certificate

- Otomatis dihandle oleh Vercel
- HTTPS aktif dalam beberapa menit

---

## ⚡ Performance Optimization

### 1. Image Optimization

```bash
# Install Sharp (untuk Next.js Image optimization)
npm install sharp
```

### 2. Compress Images

Tools recommended:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

### 3. Enable Caching

Vercel headers (otomatis):
```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

---

## 📊 Analytics Setup

### Google Analytics

1. Create GA4 property
2. Install package:
```bash
npm install @next/third-parties
```

3. Add to `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

---

## 🔐 Environment Variables

### Local Development

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
EMAIL_SERVICE_API_KEY=your_api_key
```

### Production (Vercel)

1. Dashboard → Settings → Environment Variables
2. Add variables:
   - Key: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://javierathallah.com`
3. Redeploy

---

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Image Not Loading

- Check image path (must be in `/public`)
- Use Next.js Image component
- Check file permissions

### Slow Loading

- Enable compression
- Optimize images
- Check bundle size: `npm run build`
- Use dynamic imports for heavy components

### 404 Errors

- Check `next.config.js` routing
- Verify file structure in `app/` directory
- Clear browser cache

---

## 📱 PWA Setup (Optional)

### Install next-pwa

```bash
npm install next-pwa
```

### Configure

```javascript
// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

module.exports = withPWA({
  // your config
})
```

Create `public/manifest.json`:

```json
{
  "name": "Javier Muhammad Athallah Portfolio",
  "short_name": "JMA Portfolio",
  "description": "Professional portfolio with sakura theme",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fff5f7",
  "theme_color": "#ff4d94",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 🎯 SEO Optimization

### Sitemap

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://javierathallah.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

### Robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://javierathallah.com/sitemap.xml',
  }
}
```

### Submit to Google

1. Google Search Console
2. Add property (domain)
3. Submit sitemap
4. Request indexing

---

## 📈 Monitoring

### Vercel Analytics
- Auto-included dengan Vercel
- Real-time visitor data
- Web Vitals metrics

### Uptime Monitoring

Free services:
- [UptimeRobot](https://uptimerobot.com)
- [Pingdom](https://pingdom.com)
- [StatusCake](https://statuscake.com)

---

## 🔄 Continuous Deployment

Dengan Vercel + GitHub:

1. Push ke GitHub
2. Auto-build & deploy
3. Preview deployments untuk pull requests
4. Rollback jika ada masalah

```bash
# Push changes
git add .
git commit -m "Update portfolio content"
git push

# Vercel auto-deploys!
```

---

## ✅ Post-Deploy Checklist

- [ ] Website accessible di production URL
- [ ] All pages loading correctly
- [ ] Images displaying properly
- [ ] Dark mode working
- [ ] Mobile responsive
- [ ] Contact form submitting
- [ ] No console errors
- [ ] Analytics tracking
- [ ] SSL certificate active
- [ ] Custom domain connected (if applicable)
- [ ] Sitemap submitted to Google
- [ ] Social media previews working (Open Graph)

---

## 🎉 Selamat!

Website portfolio Anda sekarang sudah live dan dapat diakses oleh siapa saja di internet!

**Next Steps**:
- Share link ke social media
- Add to LinkedIn
- Update resume dengan website URL
- Monitor analytics
- Keep content updated

---

## 📞 Support

Jika ada masalah:
- Check Vercel logs
- Review build output
- Check browser console
- Search error di Google/Stack Overflow

**Happy Deploying! 🚀**

Dibuat dengan ❤️ untuk Javier Muhammad Athallah
