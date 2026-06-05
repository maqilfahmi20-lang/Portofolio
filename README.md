# Muhammad Aqil Fahmi - Professional Portfolio

Portofolio profesional Muhammad Aqil Fahmi, seorang IT Programmer & Full Stack Developer yang baru lulus dari Dian Nuswantoro University.

## 🌟 Fitur

- **Hero Section**: Presentasi diri yang menarik dengan CTA buttons
- **Skills Section**: Showcase skills teknis dan soft skills
- **Projects Section**: Portfolio projects dengan detail lengkap
- **Blog Section**: Articles tentang web development dan machine learning
- **Contact Form**: Form kontak dengan email integration
- **Resume Download**: Tombol untuk download CV
- **Responsive Design**: Fully responsive di semua device
- **Modern Stack**: Built with Next.js 14, TypeScript, Tailwind CSS

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React Functional Components

### Backend / Services
- **API**: Next.js API Routes
- **Email**: Nodemailer
- **Database**: PostgreSQL (optional, untuk future enhancements)

### Development Tools
- ESLint
- PostCSS
- Git

## 📦 Installation

### Prerequisites
- Node.js (v18 atau lebih tinggi)
- npm atau yarn

### Setup Project

1. **Clone atau Extract Repository**
```bash
cd portfolio-aqil
```

2. **Install Dependencies**
```bash
npm install
# atau
yarn install
```

3. **Setup Environment Variables**

Buat file `.env.local` di root directory (sudah ada, pero perlu dikonfigurasi):
```bash
# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-specific-password

# Next.js
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Cara setup Gmail:**
1. Enable "Less secure app access" atau gunakan App Password
2. Generate App Password di Google Account Security
3. Gunakan password tersebut di `EMAIL_PASSWORD`

4. **Run Development Server**
```bash
npm run dev
# atau
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Connect repository ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy automatic setiap push ke main branch

```bash
# Build untuk production
npm run build

# Start production server
npm start
```

### Deploy ke Platform Lain

Project ini compatible dengan:
- Netlify
- Railway
- Render
- AWS Amplify

## 📁 Project Structure

```
portfolio-aqil/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # Contact form API
│   │   ├── blog/
│   │   │   ├── page.tsx              # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Blog detail
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   ├── components/
│   │   ├── Navbar.tsx                # Navigation bar
│   │   ├── Footer.tsx                # Footer
│   │   ├── HeroSection.tsx           # Hero section
│   │   ├── SkillsSection.tsx         # Skills section
│   │   ├── ProjectsSection.tsx       # Projects showcase
│   │   └── ContactSection.tsx        # Contact form
│   └── data/
│       ├── portfolioData.ts          # Portfolio data
│       └── blogData.ts               # Blog posts data
├── public/                            # Static assets
├── .env.local                        # Environment variables
├── .gitignore                        # Git ignore rules
├── package.json                      # Dependencies
├── tailwind.config.ts                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # This file
```

## 📝 Customization

### Mengubah Data Personal
Edit file `src/data/portfolioData.ts` untuk mengubah:
- Informasi pribadi
- Skills
- Projects
- Experience & Education

### Mengubah Blog Posts
Edit file `src/data/blogData.ts` untuk menambah/mengubah articles.

### Styling
- Primary color: `#1f2937` (primary gray)
- Secondary color: `#3b82f6` (blue)
- Accent color: `#10b981` (green)

Edit di `tailwind.config.ts` untuk mengubah theme.

### Contact Form Setup

Untuk mengaktifkan contact form, perlu configure email:

1. **Setup Gmail:**
   - Login ke Gmail account
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication
   - Create App Password
   - Copy password untuk `.env.local`

2. **Alternative: Gunakan Service Lain**
   - SendGrid
   - Mailgun
   - AWS SES

Edit `src/app/api/contact/route.ts` sesuai service yang digunakan.

## 📄 Resume Download

Untuk menambahkan resume download:
1. Letakkan CV file di `/public/cv.pdf`
2. Update link di components sesuai kebutuhan

Contoh:
```tsx
<a href="/cv.pdf" download className="btn">
  Download CV
</a>
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server di localhost:3000

# Production
npm run build        # Build untuk production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## 📱 Browser Support

- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

## 🤝 Future Enhancements

- [ ] Dark mode toggle
- [ ] Multi-language support (EN/ID)
- [ ] Projects showcase dengan image gallery
- [ ] Testimonials section
- [ ] Newsletter subscription
- [ ] Analytics integration
- [ ] CMS integration
- [ ] Comments di blog posts

## 📧 Contact

- **Email**: maqilfahmi20@gmail.com
- **Phone**: 089509069473
- **Location**: Brebes, Jawa Tengah
- **GitHub**: [Link ke GitHub]
- **LinkedIn**: [Link ke LinkedIn]

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ by Muhammad Aqil Fahmi

---

**Last Updated**: June 2026
**Version**: 1.0.0
