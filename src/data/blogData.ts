export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable EdTech Platform dengan Next.js dan Prisma",
    slug: "building-scalable-edtech-platform",
    excerpt: "Pengalaman membangun platform edukasi yang scalable dengan teknologi modern. Dalam artikel ini saya akan berbagi proses development, challenges, dan solutions yang saya temui.",
    content: `
# Building Scalable EdTech Platform dengan Next.js dan Prisma

Membangun platform edtech yang scalable memerlukan perencanaan yang matang dan teknologi yang tepat. Dalam artikel ini, saya akan berbagi pengalaman saya membangun platform ini dari awal hingga production.

## Technology Stack

Kami memilih:
- **Frontend**: Next.js 14 dengan TypeScript
- **Database**: PostgreSQL dengan Prisma ORM
- **Authentication**: OAuth 2.0
- **Payment**: Midtrans Gateway
- **Hosting**: Modern cloud infrastructure

## Architecture Decision

### 1. Database Schema
Kami merancang schema yang normalized dan efficient untuk menangani:
- User management dengan role-based access
- Course dan exam data
- User progress tracking
- Payment records

### 2. API Design
RESTful API dengan clear versioning dan proper error handling:
\`\`\`typescript
// Contoh API endpoint
GET /api/v1/exams
POST /api/v1/exams/:id/submit
GET /api/v1/admin/users
\`\`\`

## Challenges dan Solutions

### Challenge 1: Performance dengan Large Dataset
**Problem**: Query lambat saat menampilkan daftar exam hasil peserta
**Solution**: 
- Implement database indexing
- Use eager loading dengan Prisma relations
- Add pagination system

### Challenge 2: Payment Processing
**Problem**: Sinkronisasi status pembayaran tidak akurat
**Solution**:
- Implement webhook handling untuk real-time updates
- Add transaction logging system
- Create reconciliation process

## Key Learnings

1. **Proper Database Design**: Namespace yang baik menghemat development time
2. **Error Handling**: Comprehensive error handling adalah kunci reliability
3. **Testing**: Implement unit dan integration testing sejak awal
4. **Documentation**: Good documentation membuat onboarding developer baru lebih mudah

## Conclusion

Membangun platform scalable membutuhkan tidak hanya technical skills tapi juga soft skills seperti planning dan communication. Semoga pengalaman ini bermanfaat bagi yang sedang membangun aplikasi serupa.
    `,
    date: "15 Mei 2025",
    category: "Web Development",
    author: "Muhammad Aqil Fahmi",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Machine Learning untuk Prediksi MSME Sales",
    slug: "machine-learning-msme-sales-prediction",
    excerpt: "Thesis saya tentang menggunakan K-Means clustering dan Ensemble Voting untuk prediksi penjualan MSME. Implementasi technical dan hasil yang kami dapatkan.",
    content: `
# Machine Learning untuk Prediksi MSME Sales

Skripsi saya berfokus pada penggunaan machine learning untuk memprediksi penjualan usaha kecil menengah (MSME). Artikel ini merangkum penelitian dan implementasi yang telah dilakukan.

## Research Overview

### Objectives
- Mengidentifikasi faktor-faktor yang mempengaruhi penjualan MSME
- Membuat model prediksi yang akurat
- Memberikan insights untuk business decision making

### Methodology

Kami menggunakan kombinasi dua teknik machine learning:

1. **K-Means Clustering**
   - Segmentasi MSME berdasarkan karakteristik bisnis
   - Identifikasi pola-pola penjualan untuk setiap segment

2. **Ensemble Voting**
   - Kombinasi multiple classifiers (Random Forest, SVM, Gradient Boosting)
   - Meningkatkan akurasi prediksi melalui voting mechanism

## Data Collection & Preprocessing

- Dataset: 500+ MSME dari berbagai industri
- Features: 20 variables termasuk lokasi, tipe bisnis, media promosi, etc.
- Preprocessing: Normalisasi, handling missing values, outlier detection

## Results

- **Accuracy**: 87.5%
- **Precision**: 85.2%
- **Recall**: 89.1%
- **F1-Score**: 0.872

## Implementation

Model diimplementasikan dalam Python menggunakan:
- scikit-learn untuk machine learning
- pandas untuk data manipulation
- matplotlib untuk visualization

## Business Impact

Model ini dapat membantu:
- Prediksi cash flow
- Strategic decision making
- Resource allocation optimization
- Risk assessment

## Conclusion

Machine learning dapat memberikan valuable insights untuk optimisasi bisnis MSME. Dengan data yang tepat dan model yang baik, prediksi penjualan bisa membantu business planning.
    `,
    date: "10 Mei 2025",
    category: "Machine Learning",
    author: "Muhammad Aqil Fahmi",
    readTime: "10 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Best Practices untuk API Development dengan Next.js",
    slug: "api-development-best-practices",
    excerpt: "Tips dan best practices dalam membuat API yang scalable, maintainable, dan secure menggunakan Next.js API Routes.",
    content: `
# Best Practices untuk API Development dengan Next.js

Next.js API Routes menyediakan cara yang mudah untuk membuat backend API tanpa perlu server terpisah. Artikel ini akan membahas best practices yang telah saya pelajari.

## Project Structure

Organizing your API routes dengan proper structure:

\`\`\`
/api
  /v1
    /users
      - route.ts (GET, POST)
      - [id]
        - route.ts (GET, PUT, DELETE)
    /exams
      - route.ts (GET, POST)
      - [id]
        - route.ts
        - submit
          - route.ts (POST)
\`\`\`

## Error Handling

Implement consistent error handling:

\`\`\`typescript
export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
  }
}

export async function handleError(error: any) {
  if (error instanceof ApiError) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: error.statusCode }
    );
  }
  return new Response(
    JSON.stringify({ error: 'Internal server error' }),
    { status: 500 }
  );
}
\`\`\`

## Validation

Always validate input dari client:

\`\`\`typescript
import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = createUserSchema.safeParse(body);
  
  if (!result.success) {
    return new Response(
      JSON.stringify({ errors: result.error.errors }),
      { status: 400 }
    );
  }
  // Process validated data
}
\`\`\`

## Authentication & Authorization

Implement proper security:
- Use middleware untuk auth checking
- Implement role-based access control
- Use secure HTTP-only cookies
- Validate API keys jika diperlukan

## Performance Optimization

- Use database query optimization
- Implement caching strategy
- Add pagination untuk list endpoints
- Monitor API performance

## Conclusion

Good API practices memastikan aplikasi Anda scalable, maintainable, dan secure untuk jangka panjang.
    `,
    date: "05 Mei 2025",
    category: "Web Development",
    author: "Muhammad Aqil Fahmi",
    readTime: "7 min read",
    featured: false,
  },
];
