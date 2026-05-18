export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  tag: string;
  title: string;
  headline: string;
  description: string;
  buttonText: string;
  subText: string;
  metricNumber: string;
  metricLabel: string;
  youtubeId: string;
  coverImage: string;
  features: ServiceFeature[];
}

export const servicesData: ServiceData[] = [
  {
    id: "01",
    slug: "staffing",
    tag: "STAFFING SERVICES",
    title: "Staffing Services",
    headline: "From Candidate Search #847 to Compliant Placement #1",
    description: "We match top-tier technical talent with leading US employers. Secure permanent job placements and technical staffing contracts backed by certified E-Verify corporate sponsorship.",
    buttonText: "EXPLORE STAFFING SOLUTIONS",
    subText: "No credit card or upfront search fee required.",
    metricNumber: "500+",
    metricLabel: "Active US Placements",
    youtubeId: "7H_K2nLupV8",
    coverImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "E-Verify Sponsorship",
        description: "100% compliant documentation management, STEM OPT extensions, and direct visa processing support.",
        icon: "Shield"
      },
      {
        title: "Top 1% Engineering Talent",
        description: "Access our pre-vetted pool of elite software developers, QA leads, cloud architects, and systems analysts.",
        icon: "Users"
      },
      {
        title: "Direct Placement Sourcing",
        description: "Streamlined corporate interviews and swift matching framework to secure placements within weeks.",
        icon: "Briefcase"
      },
      {
        title: "E2E Contract Management",
        description: "Worry-free onboarding, payroll compliance, and secure billing support handled entirely by our operations team.",
        icon: "FileText"
      }
    ]
  },
  {
    id: "02",
    slug: "training",
    tag: "TRAINING PROGRAM",
    title: "Training Program",
    headline: "From Rookie Coder to Professional Enterprise Dev #1",
    description: "Master Java, QA automation, BA systems, Cloud & DevOps architectures under hands-on industry mentorship. Build a production-grade code showcase and bypass corporate filters.",
    buttonText: "BOOK A FREE CONSULTATION",
    subText: "No initial training entry fee required.",
    metricNumber: "120 Days",
    metricLabel: "Average Career Launch Track",
    youtubeId: "p1GfM9Zk804",
    coverImage: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Java & OOP Mastery",
        description: "Build robust multi-tier architectures using Spring Boot, Hibernate, SQL databases, and secure API gateways.",
        icon: "Code"
      },
      {
        title: "QA SDET Automation",
        description: "Master Selenium, Cucumber, JUnit, CI/CD pipeline automation, and advanced test script architecture frameworks.",
        icon: "CheckCircle"
      },
      {
        title: "Business Systems Analysis",
        description: "Learn Agile methodologies, sprint scheduling, product backlogs, JIRA tools, and high-fidelity specifications.",
        icon: "TrendingUp"
      },
      {
        title: "1-on-1 Placement Coaching",
        description: "Collaborate with senior corporate mentors on mock interview prep, system design reviews, and portfolio code optimization.",
        icon: "UserCheck"
      }
    ]
  },
  {
    id: "03",
    slug: "software-development",
    tag: "SOFTWARE DEVELOPMENT",
    title: "Software Development",
    headline: "From Cloud Blueprint to Scale Production Release #1",
    description: "We design, build, test, and release robust cloud applications and web portals tailored to automate manual procedures and scale your operational capability.",
    buttonText: "REQUEST A PROJECT QUOTE",
    subText: "Free custom software design overview included.",
    metricNumber: "10x",
    metricLabel: "Faster Deployment Sprints",
    youtubeId: "8mSIt4_wQ78",
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Scalable Cloud Architectures",
        description: "Design high-availability database applications on AWS, Microsoft Azure, and Google Cloud Engine.",
        icon: "Cloud"
      },
      {
        title: "Bespoke API Pipelines",
        description: "Integrate ERP platforms, custom payment processing, CRM databases, and real-time streaming sockets.",
        icon: "Cpu"
      },
      {
        title: "Enterprise Web Portals",
        description: "Automate manual spreadsheet steps using intuitive corporate software dashboards and robust user modules.",
        icon: "Layout"
      },
      {
        title: "Robust Security Protocols",
        description: "Bypass standard exploits with certified encryption standards, JWT tokens, and strict OWASP security configurations.",
        icon: "Lock"
      }
    ]
  },
  {
    id: "04",
    slug: "website-development",
    tag: "WEBSITE DEVELOPMENT",
    title: "Website Development",
    headline: "From Sketch Mockup to Stunning Responsive Web Portal #1",
    description: "Build beautiful, modern web architectures optimized for organic Google search traffic. Clean layouts that load instantly on all desktop, tablet, and mobile devices.",
    buttonText: "EXPLORE WEB SOLUTIONS",
    subText: "Free search engine audit and speed check.",
    metricNumber: "100%",
    metricLabel: "Responsive Page Symmetries",
    youtubeId: "8mSIt4_wQ78",
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Next.js & Vite Performance",
        description: "Build static and server-rendered web systems that score perfect 100/100 points on Google Lighthouse metrics.",
        icon: "Zap"
      },
      {
        title: "Conversion-Focused UI/UX",
        description: "Sleek typography, stunning scroll animations, and crystal-clear call-to-actions to maximize visitor retention.",
        icon: "MousePointer"
      },
      {
        title: "Advanced SEO Infrastructure",
        description: "Pre-rendered metadata, structured JSON-LD schemes, and clean HTML5 semantics to scale search ranks.",
        icon: "Globe"
      },
      {
        title: "Headless CMS Integrations",
        description: "Publish content with ease using robust headless editing dashboards like Sanity.io or Contentful.",
        icon: "Database"
      }
    ]
  },
  {
    id: "05",
    slug: "mobile-app-development",
    tag: "MOBILE APP DEVELOPMENT",
    title: "Mobile App Development",
    headline: "From Concept Sketch to Top App Store Listing #1",
    description: "Launch smooth, highly responsive iOS & Android mobile applications built to operate flawlessly under heavy workload, backed by publishing compliance audits.",
    buttonText: "EXPLORE MOBILE BLUEPRINTS",
    subText: "Dedicated multi-platform design releases.",
    metricNumber: "4.9★",
    metricLabel: "Average Play Store Rating",
    youtubeId: "8mSIt4_wQ78",
    coverImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    features: [
      {
        title: "Cross-Platform Optimization",
        description: "Deploy highly optimized single-codebase apps using React Native or Flutter, cutting design time in half.",
        icon: "Smartphone"
      },
      {
        title: "Realtime WebSocket Sync",
        description: "Support live chat streams, push notification protocols, and real-time mapping databases flawlessly.",
        icon: "Activity"
      },
      {
        title: "Secure Device Auth & Storage",
        description: "Protect consumer credentials with biometric face ID sync, apple logins, and secure hardware storage.",
        icon: "Key"
      },
      {
        title: "Seamless Store Launch Support",
        description: "Complete certification audit checklists to guarantee swift approval on Apple App Store & Google Play Store.",
        icon: "Award"
      }
    ]
  },
];
