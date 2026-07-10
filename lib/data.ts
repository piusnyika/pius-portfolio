export const SITE = {
  name: "Pius Nyika",
  initials: "PN",
  role: "Full-Stack Web Developer",
  email: "info@piusnyika.co.zw",
  location: "Available Remotely",
};

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#websites", label: "Client Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/piusnyika/",
  linkedin: "https://zw.linkedin.com/in/pius-tafadzwa-nyika-105364b6",
  instagram: "https://www.instagram.com/pius_tafadzwa/?hl=en",
  facebook: "https://www.facebook.com/piust.nyika/",
  dribbble: "https://dribbble.com/YOUNGJR97",
  email: SITE.email,
  whatsapp: "263782687180",
};

export const ROLES = [
  "React & Next.js Specialist",
  "UI Designer",
  "WordPress Developer",
  "E-Commerce Solutions Developer",
  "Linux System Administrator",
];

export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "WordPress Ecosystem",
    items: ["WordPress", "WooCommerce", "Elementor", "PHP", "Custom Themes & Plugins"],
  },
  {
    category: "Backend & Data",
    items: ["Node.js", "Prisma", "PostgreSQL", "REST APIs"],
  },
  {
    category: "Systems & Tools",
    items: ["Linux", "Git", "Server Administration", "Figma"],
  },
];

export type Website = {
  name: string;
  url: string;
  description: string;
  tags: string[];
  screenshot?: string;
  status: "live" | "in-progress";
};

export const WEBSITES: Website[] = [
  {
    name: "Edenvine",
    url: "https://edenvine.co.zw",
    description:
      "Zimbabwe's leading bathroom & kitchen showroom — a full multi-vendor e-commerce platform with product catalogs, blog, order tracking, coupons, and an admin dashboard.",
    tags: ["Next.js", "Prisma", "Neon", "MUI"],
    status: "live",
  },
  {
    name: "A Lucky Brand",
    url: "https://luckybrandonline.co.zw/",
    description:
      "A Zimbabwean retailer supplying generators, solar systems, agricultural machinery, mining, and construction equipment online.",
    tags: ["WordPress", "WooCommerce"],
    status: "live",
  },
  {
    name: "Die Deutsche Schule",
    url: "https://deutscheschule.co.zw/",
    description:
      "A German language academy offering language instruction and consultancy for studying, apprenticeships, and au-pair programs in Germany.",
    tags: ["WordPress", "Elementor"],
    screenshot: "/popup-project-deut.jpg",
    status: "live",
  },
  {
    name: "Throttle Clothing",
    url: "https://throttle.co.zw/",
    description:
      "A quality clothing retailer supplying corporate, industrial, school, sports, and fashion wear across Zimbabwe.",
    tags: ["WordPress"],
    screenshot: "/popup-project-throttle.jpg",
    status: "live",
  },
  {
    name: "Wise Owl Group of Schools",
    url: "https://wiseowlschool.co.zw/",
    description:
      "A Zimbabwean group of schools spanning pre-school, primary, and high school campuses.",
    tags: [],
    screenshot: "/popup-project-wise%20owl.jpg",
    status: "live",
  },
  {
    name: "Westridge High School",
    url: "http://westridgehigh.ac.zw/",
    description:
      "A Zimbabwean secondary school, established 1999, showcasing its academics, arts, and sports programs.",
    tags: ["WordPress", "Elementor"],
    status: "live",
  },
  {
    name: "Cornerstone Executive College",
    url: "https://cornerstonecollege.ac.zw/",
    description:
      "A Zimbabwean college offering ZIMSEC, Cambridge, and computer literacy programs focused on academic excellence.",
    tags: ["WordPress", "Elementor"],
    status: "live",
  },
  {
    name: "EDR Rovale",
    url: "http://www.edrrovale.co.zw/",
    description: "Business website.",
    tags: [],
    status: "live",
  },
  {
    name: "Impala Car Rental",
    url: "https://impala.co.zw/",
    description:
      "A Zimbabwe-based car rental company offering self-drive, chauffeur-driven, and airport transfer services.",
    tags: ["WordPress", "WooCommerce"],
    status: "live",
  },
  {
    name: "Real Estate Institute of Zimbabwe",
    url: "https://reiz.ac.zw/",
    description:
      "The professional body for real estate practitioners in Zimbabwe, offering courses and membership for agents, valuers, and property managers.",
    tags: ["WordPress", "Elementor"],
    status: "live",
  },
  {
    name: "Mutendi High School",
    url: "https://mutendihighschool.ac.zw/",
    description: "A Zimbabwean secondary school website.",
    tags: [],
    status: "live",
  },
  {
    name: "Pfuma Fund",
    url: "https://pfumareit.com/",
    description:
      "A Real Estate Investment Trust giving investors access to commercial properties across Zimbabwe's urban centers.",
    tags: ["WordPress", "Elementor"],
    status: "live",
  },
  {
    name: "Securico",
    url: "https://securico.co.zw/",
    description:
      "A leading Zimbabwean security company offering guarding services, electronic security systems, and cash management, with 25+ years in the industry.",
    tags: [],
    screenshot: "/popup-project-securico.jpg",
    status: "live",
  },
  {
    name: "Guest & Tanner",
    url: "https://guestandtanner.com/",
    description:
      "A trusted Zimbabwean real estate agency, established 1926, helping clients find, buy, rent, and sell properties across the country.",
    tags: [],
    screenshot: "/popup-project-Guest%20n%20turner.jpg",
    status: "live",
  },
  {
    name: "IH Group",
    url: "https://ih-group.com/",
    description:
      "A Zimbabwean boutique financial services firm — IH Securities is a licensed member of the Zimbabwe Stock Exchange and Victoria Falls Stock Exchange, alongside IH Advisory's wealth management services.",
    tags: [],
    status: "live",
  },
];

export const EXPERIENCE = [
  {
    role: "Senior Web Developer",
    company: "A Lucky Brand",
    period: "Oct 2024 — Present",
    description:
      "Leading web development for Lucky Brand, a major Zimbabwean distributor of alternative power supply, agricultural, and construction machinery — including building and maintaining their WooCommerce e-commerce platform.",
  },
  {
    role: "Web Developer",
    company: "WebEntangled",
    period: "Jan 2022 — Aug 2024",
    description:
      "Built and delivered custom websites and digital solutions for clients across various industries as part of a Zimbabwe-based web development and digital solutions agency.",
  },
  {
    role: "IT Intern",
    company: "Ministry of Primary and Secondary Education (MoPSE)",
    period: "May 2018 — Apr 2019",
    description:
      "Contributed to digital initiatives supporting the Ministry's educational programs, collaborating with educators and administrators on IT-driven improvements.",
  },
];
