export interface NavItem {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  badge: string;
  domain: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl: string;
  repoUrl?: string;
  accent: 'emerald' | 'gold';
  ctaLabel: string;
}

export type EnterpriseCategory = 'all' | 'net10-react' | 'net8-mvc';

export interface EnterpriseSystemItem {
  id: string;
  category: Exclude<EnterpriseCategory, 'all'>;
  badge: string;
  pattern: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  keyModules: string[];
  integrationsOps: string[];
  flow: string[];
}

export interface AiToolItem {
  id: string;
  name: string;
  role: string;
  summary: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface PassionShowcase {
  eyebrow: string;
  title: string;
  summary: string;
  highlights: string[];
  liveUrl: string;
  repoUrl: string;
  ctaLabel: string;
}

export interface SocialLink {
  id: 'github' | 'youtube' | 'facebook' | 'instagram' | 'tiktok';
  label: string;
  handle: string;
  url: string;
}

export const PROFILE = {
  name: 'Harold Calo Trinidad',
  monogram: 'HT',
  handle: 'haroldprofile',
  role: 'Full Stack Developer (.NET / React)',
  location: 'Sta. Rita, Pampanga, Philippines',
  status: 'Open to Full Stack & Engineering Collaborations',
  email: 'haroldcalo.trinidad@gmail.com',
  photoPath: `${import.meta.env.BASE_URL}profile.jpg`,
  photoAlt: 'Harold Calo Trinidad portrait',
  headlinePrefix: 'Engineering Enterprise',
  headlineAccent: '.NET & React',
  headlineSuffix: 'Systems.',
  summary:
    'Full Stack Developer experienced in end-to-end architecture, development, and Linux container deployment for production enterprise systems on .NET 8/10, React 19, TypeScript, and SQL Server — alongside privacy-first browser apps and AI-augmented engineering.',
  metrics: ['5 Enterprise Systems', '.NET 8/10 & React 19', 'Docker · Nginx · Azure VM'],
} as const;

export const STATS = [
  { value: 5, suffix: '', label: 'Production Systems' },
  { value: 35, suffix: '+', label: 'Browser-Local Tools' },
  { value: 4, suffix: '+', label: 'Years Engineering' },
] as const;

export const NAV_ITEMS: NavItem[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'AI Stack', href: '#ai-stack' },
  { label: 'Resume', href: '#resume' },
  { label: 'Beyond Code', href: '#passion' },
  { label: 'Contact', href: '#contact' },
];

export const MARQUEE_ROW_1: string[] = [
  '.NET 10',
  'C# 13',
  'React 19',
  'TypeScript',
  'MediatR CQRS',
  'Clean Architecture',
  'EF Core 10',
  'SQL Server',
  'SignalR',
  'JWT Auth',
];

export const MARQUEE_ROW_2: string[] = [
  'Docker',
  'Docker Compose',
  'Nginx',
  'Azure VM',
  'TanStack Query',
  'TanStack Table',
  'Polly',
  'Scalar / OpenAPI',
  'ClosedXML',
  'Claude AI',
  'Antigravity',
  'Codex',
];

export const LIVE_SPOTLIGHT_PROJECT: ProjectItem = {
  id: 'pdfmaster',
  badge: 'LIVE PUBLIC APP // SPOTLIGHT',
  domain: 'haroldprofile.github.io/pdfmaster',
  title: 'PDFMaster',
  tagline: '35+ browser-local PDF, Image & QR tools with zero server uploads.',
  description:
    'Production client-side document & utility studio built for speed and strict data privacy — processing PDFs, OCR, images, and certificates directly inside the browser.',
  highlights: [
    'Merge, split, compress, sign & extract OCR text offline via Tesseract.js',
    'AI Background Removal, ID Photo Maker & EXIF metadata stripper',
    'Bulk Certificate Generator & custom QR suite packaged with Docker',
  ],
  stack: ['React 19', 'TypeScript', 'Vite', 'pdf-lib', 'Tesseract.js', 'Docker'],
  liveUrl: 'https://haroldprofile.github.io/pdfmaster/',
  repoUrl: 'https://github.com/haroldprofile/pdfmaster',
  accent: 'emerald',
  ctaLabel: 'Launch Live App',
};

export const ENTERPRISE_FILTERS: { id: EnterpriseCategory; label: string }[] = [
  { id: 'all', label: 'All Systems' },
  { id: 'net10-react', label: '.NET 10 + React 19' },
  { id: 'net8-mvc', label: '.NET 8 MVC' },
];

export const ENTERPRISE_SYSTEMS: EnterpriseSystemItem[] = [
  {
    id: 'mrs',
    category: 'net10-react',
    badge: 'INTERNAL // .NET 10 + REACT 19',
    pattern: 'CQRS · Clean Architecture',
    title: 'Milled Rice System (MRS)',
    summary:
      'Modern SPA platform managing end-to-end agricultural production, harvesting, drying, milling, warehouse receipts, and 30+ server-paginated operational modules.',
    highlights: [
      '30+ server-paginated modules via TanStack Query v5, Table v8 & 500ms debounced search',
      'ASP.NET Core (.NET 10) MediatR CQRS backend with EF Core 10, JWT rotation & Rate Limiting',
      'Real-time SignalR hubs, ClosedXML Excel exports, SkiaSharp & Resend transactional email',
    ],
    stack: [
      '.NET 10',
      'C# 13',
      'MediatR',
      'EF Core 10',
      'SQL Server',
      'React 19',
      'TypeScript',
      'TanStack Query/Table',
      'SignalR',
      'JWT',
      'Scalar',
      'Docker',
    ],
    keyModules: [
      'Farmer, Consolidator, Season & Territory Masterfiles',
      'Harvesting, Drying, Drying2, Milling, Noh & WarehouseReceipt Workflows',
      'Role/Group RBAC, Notification Hub, EmailLogs & FileUploadLogs',
    ],
    integrationsOps: [
      'Dual REST contract (GET query + POST /paged) with SearchPolicy rate limiting',
      'Scalar / OpenAPI interactive API docs & @microsoft/signalr live client sync',
      'Self-hosted Linux Azure VM deployment with Docker & ASP.NET SPA Proxy',
    ],
    flow: ['React 19 SPA', 'MediatR CQRS', 'EF Core 10', 'SQL Server'],
  },
  {
    id: 'fdl',
    category: 'net10-react',
    badge: 'INTERNAL // .NET 10 + REACT 19',
    pattern: 'CQRS · Compliance Hub',
    title: 'Financial & Regulatory Document Library (FDL)',
    summary:
      'Enterprise compliance, tax filing, and corporate governance repository centralizing statutory deadlines, permits, contracts, and year-end documentation.',
    highlights: [
      'BIR returns, deadlines, Authority to Print (ATP) & Tax Reconciliation tracking',
      'SEC, GIS, AFS, LGU & Special Permits, Actuarial, Contracts & Invoices management',
      'MediatR CQRS API on .NET 10 with Polly resilience, JWT auth & Vite 8 / React 19 SPA',
    ],
    stack: [
      '.NET 10',
      'C#',
      'MediatR',
      'EF Core 10',
      'SQL Server',
      'React 19',
      'TypeScript',
      'Vite 8',
      'TanStack Query/Table',
      'JWT',
      'Polly',
      'ClosedXML',
    ],
    keyModules: [
      'BIR Suite (Returns, Deadlines, ATP, Form Grouping, Return Periods, Tax Setup)',
      'Corporate & Audit (SEC, GIS, AFS, External Auditor, Minutes of Meeting, YearEnd)',
      'Permits, Contracts, Invoices, Folder/File Setup & System Audit Logs',
    ],
    integrationsOps: [
      'Polly retry/circuit-breaker resilience & JWT Bearer authentication',
      'Scalar / OpenAPI endpoint documentation & ClosedXML report exports',
      'React Router DOM v7 + TanStack Query v5/Table v8 + Docker containerization',
    ],
    flow: ['React 19 SPA', 'MediatR + Polly', 'EF Core 10', 'SQL Server'],
  },
  {
    id: 'qms',
    category: 'net8-mvc',
    badge: 'INTERNAL // .NET 8 MVC',
    pattern: 'MVC · EF Core + Dapper',
    title: 'Quality Management System (QMS)',
    summary:
      'Seed quality compliance and traceability platform enforcing a structured 20-step QMS workflow from field selection through harvesting and COA release.',
    highlights: [
      '20-step QMS operational pipeline with germination, varietal & physical purity testing',
      'QR batch traceability (QRCoder, SkiaSharp) & automated Certificate of Analysis (COA)',
      'GeoJSON polygon field mapping, SignalR alerts & resilient Flask REST API integration',
    ],
    stack: [
      'ASP.NET Core 8',
      'C#',
      'EF Core',
      'Dapper',
      'SQL Server',
      'SignalR',
      'QRCoder',
      'SkiaSharp',
      'GeoJSON',
      'Polly',
      'Docker',
      'Nginx',
    ],
    keyModules: [
      'QmsStep1–QmsStep20 Field Selection, Seedling, Transplanting & Harvesting Controls',
      'COA Activity Templates, Data Capture, Approval Routing & Public QR Verification',
      'Harvesting Dashboard, SPPW Reports, Agro-Climatic Data & Audit Access Manager',
    ],
    integrationsOps: [
      'EF Core + Dapper hybrid data access with ASP.NET Identity RBAC',
      'External Flask REST API integrated via RestSharp + Polly retry/circuit-breaker',
      'Docker Compose + Nginx reverse proxy on Linux with mounted upload/backup volumes',
    ],
    flow: ['MVC Controller', 'EF Core + Dapper', 'SignalR / Flask', 'SQL Server'],
  },
  {
    id: 'rss',
    category: 'net8-mvc',
    badge: 'INTERNAL // .NET 8 MVC',
    pattern: 'MVC · ERP Integration',
    title: 'Rice Seed System (RSS)',
    summary:
      'End-to-end seed production, farmer profiling, territory stock movement, multi-step fund request approvals, and financial liquidation platform.',
    highlights: [
      'Multi-step fund request approval routing & SMTP alerts cutting manual paperwork',
      'Real-time territory stock movement, Withholding Tax (WHT) compliance & liquidation',
      'External ERP/financial system sync (NAV/TFCI) via REST APIs + Excel/PDF exports',
    ],
    stack: [
      'ASP.NET Core 8',
      'C#',
      'EF Core',
      'SQL Server',
      'JWT',
      'Polly',
      'ERP (NAV/TFCI)',
      'ClosedXML',
      'iText7',
      'DataTables',
      'Docker',
      'Nginx',
    ],
    keyModules: [
      'Centralized Farmer Management (Soil Fertility, Pest/Disease, Crop & Irrigation)',
      'Season-Based Production Scheduling, Category Calendars & Sourcing Tracking',
      'Fund Request Approvals, Liquidation, Stock Movement & WHT Configuration',
    ],
    integrationsOps: [
      'NAV/TFCI ERP financial & vendor journal REST sync protected by Polly policies',
      'JWT module-level RBAC + ClosedXML Excel & iText7 PDF document generation',
      'jQuery, Bootstrap & DataTables UI deployed with Docker + Nginx',
    ],
    flow: ['MVC Controller', 'JWT + Polly', 'NAV/TFCI ERP', 'SQL Server'],
  },
  {
    id: 'dtci',
    category: 'net8-mvc',
    badge: 'INTERNAL // .NET 8 MVC',
    pattern: 'MVC · Bilingual EN/FIL',
    title: 'DTCI Inventory Logs',
    summary:
      'Warehouse inventory tracking, Bill of Materials (BOM), WIP cost computation, and replenishment platform supporting multi-language plant operations.',
    highlights: [
      'Warehouse receiving, outgoing, lot control & automated replenishment tracking',
      'BOM/Assembly management and WIP cost computation (WIPDC, WIPDI, WIPTSFG)',
      'ASP.NET Identity RBAC, ClosedXML exports & English/Filipino localization',
    ],
    stack: [
      'ASP.NET Core 8',
      'C#',
      'EF Core 8',
      'SQL Server',
      'ASP.NET Identity',
      'ClosedXML',
      'EN/FIL i18n',
      'Docker',
      'Nginx',
    ],
    keyModules: [
      'ItemMaster, BOM / ItemBomDetail, Assembly & Warehouse Location Controls',
      'ReceivingHeader, Outgoing, InventoryLog, Lot & ReplenishmentSystem Modules',
      'WIP Costing & Finished Goods Production (Wipdc, Wipdi, Wiptsfg, FgProd)',
    ],
    integrationsOps: [
      'Bilingual English/Filipino resource localization (SharedResource.fil.resx)',
      'ASP.NET Identity role/group access control & ClosedXML Excel reporting',
      'Containerized ASP.NET Core 8 MVC deployment with Docker & Nginx',
    ],
    flow: ['MVC + EN/FIL', 'Identity RBAC', 'EF Core 8', 'SQL Server'],
  },
];

export const AI_WORKFLOW: AiToolItem[] = [
  {
    id: 'claude',
    name: 'Claude AI',
    role: 'Architecture & Deep Reasoning',
    summary:
      'CQRS & Clean Architecture design, edge-case auditing, SQL optimization review, and safe multi-layer refactoring.',
    tags: ['Architecture', 'Code Audit', 'Refactoring'],
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    role: 'Agentic Full-Stack Execution',
    summary:
      'Multi-file full-stack delivery, TDD scaffolding, automated debugging, UI/UX systems, and end-to-end verification.',
    tags: ['CQRS Scaffold', 'TDD & Debug', 'UI Systems'],
  },
  {
    id: 'codex',
    name: 'Codex',
    role: 'High-Speed Prototyping',
    summary:
      'Rapid component generation, targeted utility scripting, and fast spec-to-implementation iteration cycles.',
    tags: ['Rapid Scaffold', 'Utilities', 'Iteration'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'tao',
    role: 'Full Stack Developer',
    company: 'TAO Corporation',
    period: 'December 2024 – Present',
    current: true,
    summary:
      'Experienced in end-to-end architecture, development, SQL Server optimization, and containerized Linux deployment for three flagship enterprise platforms (RSS, QMS, MRS), FDL, and the DTCI inventory system.',
    highlights: [
      'Architected .NET 10 + React 19 SPAs (MRS, FDL) with MediatR CQRS, JWT access/refresh rotation, SignalR hubs, and TanStack Query/Table',
      'Built .NET 8 MVC systems (QMS, RSS, DTCI) with 20-step traceability workflows, QR/COA automation, GeoJSON mapping, and NAV/TFCI ERP integration',
      'Managed Docker / Docker Compose + Nginx reverse proxy deployments on self-hosted Linux / Azure VMs and applied AI-assisted TDD workflows',
    ],
    stack: ['.NET 8 / .NET 10', 'React 19', 'TypeScript', 'SQL Server', 'Docker', 'Nginx', 'Azure VM'],
  },
  {
    id: 'monde-nissin',
    role: 'Equipment Owner',
    company: 'Monde Nissin Corporation',
    period: 'June 2023 – December 2024',
    summary:
      'Combined plant automation, PLC programming, and internal web/low-code engineering to improve machine efficiency and eliminate print defects.',
    highlights: [
      'Built an automated real-time alarm web app (HTML/CSS/JS) reducing print quality issues by 90%',
      'Designed a Waste Analysis & Monitoring System using Power Apps, Power BI, and SharePoint; cut document retrieval time by 10%',
      'Programmed PLCs (Ladder Logic, Structured Text) and collaborated with engineers to maintain continuous plant operations',
    ],
    stack: ['HTML/CSS/JS', 'Power BI', 'Power Apps', 'SharePoint', 'PLC (Ladder / ST)'],
  },
  {
    id: 'mk-printing',
    role: 'Associate Software Engineer',
    company: 'MK Printing and Office Supplies Trading',
    period: 'October 2022 – June 2023',
    summary:
      'Designed and built a desktop inventory management system tracking products, stock levels, and sales transactions.',
    highlights: [
      'Designed normalized MySQL database schemas and built a Java UI for reliable inventory CRUD operations',
      'Tested, debugged, and documented the full system lifecycle for ongoing operational support',
    ],
    stack: ['Java', 'MySQL', 'SQL Schema Design'],
  },
  {
    id: 'hv-archon',
    role: 'Web Developer (Remote)',
    company: 'HV Architecture & Construction Services',
    period: 'February 2022 – September 2022',
    summary:
      'Built and maintained the responsive company website (hvarchon.com) with custom WordPress plugins and client-aligned delivery.',
    highlights: [
      'Developed custom WordPress plugins and mobile-responsive layouts tailored to client specifications',
    ],
    stack: ['WordPress', 'PHP', 'HTML5 / CSS3', 'Responsive UI'],
  },
  {
    id: 'eworld',
    role: 'Frontend Developer (Remote)',
    company: 'Eworld Xprenuer Management LLC',
    period: 'July 2021 – January 2022',
    summary:
      'Directed UI/UX design in Figma and delivered responsive cross-browser frontend interfaces for the company platform.',
    highlights: [
      'Translated Figma designs into clean, maintainable, cross-device frontend code and optimized page performance',
    ],
    stack: ['Figma', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'ua-research',
    role: 'Student Researcher — Food Waste to Fertilizer Machine',
    company: 'University of the Assumption Research & Planning Office',
    period: 'September 2020 – March 2021',
    summary:
      'Developed machine learning models and embedded microcontroller automation for an automated food-waste conversion prototype.',
    highlights: [
      'Programmed Raspberry Pi and Arduino controllers using Python and C++ and authored/defended the thesis',
    ],
    stack: ['Python', 'C++', 'Raspberry Pi', 'Arduino', 'Machine Learning'],
  },
];

export const SKILL_CATEGORIES: SkillGroup[] = [
  {
    label: 'Languages & Frameworks',
    items: ['.NET 8 / .NET 10', 'ASP.NET Core MVC', 'C#', 'React 19', 'TypeScript', 'JavaScript', 'Razor Pages', 'Java', 'HTML5 / CSS3 / SASS'],
  },
  {
    label: 'Architecture & Patterns',
    items: ['CQRS (MediatR)', 'Clean Architecture', 'SOLID', 'MVC', 'RESTful API Design', 'Microservice-Style Integration'],
  },
  {
    label: 'Backend, Data & Resilience',
    items: ['EF Core', 'Dapper', 'SQL Server (MSSQL)', 'MySQL', 'MongoDB', 'ASP.NET Identity', 'JWT (Access/Refresh)', 'SignalR', 'Polly', 'RestSharp'],
  },
  {
    label: 'Frontend, APIs & Reporting',
    items: ['Vite', 'React Router v7', 'TanStack Query & Table', 'jQuery / DataTables', 'Swagger / Scalar', 'ClosedXML', 'EPPlus', 'iText7', 'QRCoder', 'SkiaSharp', 'GeoJSON'],
  },
  {
    label: 'DevOps & Deployment',
    items: ['Docker', 'Docker Compose', 'Nginx Reverse Proxy', 'Linux (Ubuntu/Debian)', 'Azure VM', 'Git / GitHub', 'GitHub Actions'],
  },
  {
    label: 'AI, Automation & Embedded',
    items: ['Claude AI', 'Antigravity', 'Codex', 'Power BI', 'Power Apps', 'Power Automate', 'SMTP / Resend API', 'PLC (Ladder/ST)', 'Raspberry Pi / Arduino'],
  },
];

export const EDUCATION = {
  degree: 'BS in Electronics and Communication Engineering',
  school: 'University of the Assumption',
  period: '2015 – 2020',
  languages: ['English', 'Filipino', 'Capampangan'],
} as const;

export const PASSION_SHOWCASE: PassionShowcase = {
  eyebrow: 'BEYOND CODE // PERSONAL PASSION',
  title: 'Live Saxophone Performance',
  summary:
    'Outside software engineering, I play live soprano and alto saxophone for weddings, corporate galas, and private celebrations — and built a custom interactive booking site to power it.',
  highlights: [
    '15+ curated YouTube live saxophone performances',
    '2026 dynamic package, venue distance & deposit calculator',
    'Custom-built Visual CMS admin panel on GitHub Pages',
  ],
  liveUrl: 'https://haroldprofile.github.io/saxophonist/',
  repoUrl: 'https://github.com/haroldprofile/saxophonist',
  ctaLabel: 'Visit Saxophonist Profile',
};

export const SOCIALS: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@haroldprofile',
    url: 'https://github.com/haroldprofile',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: 'youtube.com/saxcover',
    url: 'https://youtube.com/saxcover',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    handle: 'harold.calotrinidad',
    url: 'https://facebook.com/harold.calotrinidad',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    handle: '@harold.c.t',
    url: 'https://instagram.com/harold.c.t',
  },
  {
    id: 'tiktok',
    label: 'TikTok',
    handle: 'Creator & Sax Clips',
    url: 'https://vt.tiktok.com/ZS4YLm2HK',
  },
];
