# 🚀 Quick Start Guide

## Langkah Cepat Memulai

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

### 3. Buka Browser
Kunjungi: **http://localhost:3000**

---

## 🎨 Kustomisasi Cepat

### Update Informasi Personal

#### 1. Hero Section (`components/Hero.tsx`)
```typescript
// Ganti nama dan deskripsi
<h1>Saya Javier Muhammad Athallah</h1>
<p>Computer Science Software Engineering Student</p>
```

#### 2. About Section (`components/About.tsx`)
```typescript
// Update narasi personal
<p>Saya adalah mahasiswa Computer Science...</p>
```

#### 3. Contact Info (`components/Contact.tsx`)
```typescript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'javier.athallah@binus.ac.id', // Ganti email
  },
  // ... dst
]
```

### Tambah Proyek Baru

Edit `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: 'Nama Proyek',
    description: 'Deskripsi proyek...',
    category: 'Web Development',
    tags: ['React', 'Next.js'],
    github: 'https://github.com/...',
    demo: 'https://...',
  },
  // Tambah proyek lainnya...
]
```

### Update Skills

Edit `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      // Tambah skill baru...
    ],
  },
]
```

---

## 🌸 Fitur Khusus

### 1. Animasi Sakura Petals
- **Toggle**: Tombol di kiri bawah layar
- **Disable**: Klik tombol X
- **Enable**: Klik tombol +
- Preferensi tersimpan otomatis

### 2. Dark Mode
- **Toggle**: Ikon di navbar (matahari/bulan)
- **Auto-detect**: Mengikuti system preference
- **Persistent**: Pilihan tersimpan

### 3. Smooth Scrolling
- Klik menu navigasi untuk scroll halus
- Animasi reveal saat scroll

---

## 📱 Preview di Mobile

### Menggunakan Network Access

1. Jalankan dev server:
```bash
npm run dev
```

2. Cari IP address komputer Anda:
```bash
# Windows
ipconfig

# Mac/Linux
ifconfig
```

3. Buka di mobile:
```
http://[IP-ADDRESS]:3000
```

Contoh: `http://192.168.1.100:3000`

---

## 🚀 Deploy ke Vercel (Gratis)

### Cara Tercepat

1. Push code ke GitHub

2. Kunjungi [vercel.com](https://vercel.com)

3. Import repository

4. Deploy! ✨

### Menggunakan CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel
```

---

## 🔧 Troubleshooting

### Port sudah digunakan
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### Module not found
```bash
# Clear cache dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build error
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 📝 Checklist Sebelum Deploy

- [ ] Update semua informasi personal
- [ ] Ganti foto profil
- [ ] Tambah proyek-proyek Anda
- [ ] Update links social media
- [ ] Test di mobile
- [ ] Test dark mode
- [ ] Optimasi gambar (gunakan WebP)
- [ ] Update meta description
- [ ] Test form kontak
- [ ] Check console untuk errors

---

## 🎯 Tips Optimasi

### 1. Optimasi Gambar
- Gunakan format WebP/AVIF
- Compress sebelum upload
- Recommended tools: TinyPNG, Squoosh

### 2. Performance
- Lazy load images
- Minimize animations pada mobile
- Use Next.js Image component

### 3. SEO
- Update meta tags di `app/layout.tsx`
- Add sitemap.xml
- Submit ke Google Search Console

---

## 💡 Ide Pengembangan Lanjutan

1. **Blog Section**: Tambah section blog dengan MDX
2. **CMS Integration**: Connect ke Contentful/Sanity
3. **Analytics**: Integrasikan Google Analytics
4. **Form Backend**: Connect ke EmailJS/Formspree
5. **Resume Download**: Tambah tombol download CV
6. **Multilingual**: Support bahasa Inggris
7. **Loading Animations**: Add page transitions
8. **Testimonials**: Section testimoni/rekomendasi

---

## 📞 Butuh Bantuan?

- **Documentation**: Baca README.md lengkap
- **Issues**: Check console browser untuk error
- **Community**: Next.js Discord / React community

---

**Happy Coding! 🌸**

Dibuat dengan ❤️ menggunakan Next.js + React
