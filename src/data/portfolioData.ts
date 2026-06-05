export const portfolioData = {
  name: "Muhammad Aqil Fahmi",
  title: "IT Programmer Developer",
  email: "maqilfahmi20@gmail.com",
  phone: "089509069473",
  location: "Brebes, Jawa Tengah",
  shortBio: "Fresh graduate Informatics Engineering student with experience in web application development. Skilled in building scalable applications with modern technologies.",
  
  skills: {
    languages: ["JavaScript", "TypeScript", "PHP", "Python"],
    frameworks: ["React.js", "Next.js", "Laravel", "ASP.NET"],
    databases: ["MySQL", "PostgreSQL", "SQL Server"],
    tools: ["Prisma", "REST API", "Midtrans", "Git"],
  },

  projects: [
    {
      id: 1,
      title: "Fullstack Education Platform",
      category: "Web Application",
      shortDesc: "Scalable edtech platform with online exams and payment gateway",
      description: "Developed a comprehensive education technology platform featuring online exams, OAuth authentication, and role-based access control for premium content.",
      features: [
        "Online exam system with real-time validation",
        "OAuth authentication integration",
        "Role-based access control",
        "Midtrans payment gateway integration",
        "Webhook handling for automated payment processing",
        "Admin dashboard with dynamic access control",
        "Subscription management system"
      ],
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Midtrans"],
      image: "/projects/edtech.jpg",
      startDate: "Okt 2025",
      endDate: "Des 2025",
      highlights: [
        "Automated subscription activation via webhooks",
        "Premium content access based on subscription status",
        "Optimized database queries for performance",
        "Responsive design for all devices"
      ],
    },
    {
      id: 2,
      title: "Tourism Website Interface",
      category: "Frontend",
      shortDesc: "Responsive tourism website with improved UX design",
      description: "Created an engaging tourism website interface focused on information accessibility and user experience across multiple devices.",
      features: [
        "Responsive design using Bootstrap",
        "Interactive UI/UX design",
        "Fast loading optimization",
        "Information architecture for tourism content",
        "Image gallery implementation"
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      image: "/projects/tourism.jpg",
      startDate: "Mei 2023",
      endDate: "Okt 2023",
      highlights: [
        "Improved information accessibility",
        "Mobile-first responsive design",
        "Optimized website performance and loading speed",
        "Interactive and intuitive user interface"
      ],
    },
    {
      id: 3,
      title: "Digitalization System - Elementary School",
      category: "Fullstack Web Application",
      shortDesc: "PHP Laravel system for school data management",
      description: "Developed a fullstack web application using PHP and Laravel to support school digitalization and improve data management efficiency during internship at Diskominfo Kota Semarang.",
      features: [
        "Student information management",
        "Teacher and class management",
        "Report generation system",
        "User authentication and authorization",
        "Database optimization",
        "Admin panel"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript"],
      image: "/projects/school-system.jpg",
      startDate: "Mei 2023",
      endDate: "Okt 2023",
      highlights: [
        "Improved data management efficiency",
        "Centralized information system",
        "Easy-to-use admin interface",
        "Secure data handling"
      ],
    },
  ],

  experience: [
    {
      id: 1,
      position: "Informatics Engineering Student Association - Information and Communication Division",
      company: "Dian Nuswantoro University",
      description: "Managed and developed organizational media and information systems to improve communication effectiveness.",
      period: "2022 - 2025",
      type: "organizational",
    },
    {
      id: 2,
      position: "Intern - Web Developer",
      company: "Diskominfo Kota Semarang",
      description: "Developed a fullstack web application using PHP (Laravel) for an elementary school to support digitalization and improve data management efficiency.",
      period: "Mei 2023 - Okt 2023",
      type: "internship",
    },
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Informatics Engineering",
      institution: "Dian Nuswantoro University",
      period: "Sept 2022 - Feb 2026",
      thesis: "Machine Learning-Based MSME Sales Prediction Using K-Means and Ensemble Voting",
      status: "Expected Graduation: Feb 2026",
    },
  ],

  certifications: [
    "Ilmuan Data Madya (Associate Data Science)",
    "TOEFL with score 580",
    "BASS Training Center Literasi AI",
    "SINTA 3 Journal Publication — MSME Sales Prediction Using K-Means and Ensemble Voting (2025)",
  ],

  languages: ["Indonesian (Native)", "English (Fluent - TOEFL 580)"],

  softSkills: [
    "Analytical Thinking",
    "Teamwork & Collaboration",
    "Communication Skills",
    "Adaptability (Fast Learner)",
    "Problem Solving",
    "Project Management",
  ],
};
