
export interface Project {
    title: string;
    description: string;
    tech: string[];
    status: "Live" | "Local" | "Development";
    metric?: string;
    slug: string;
}

export interface Note {
    title: string;
    excerpt: string;
    readTime: string;
    date: string;
    slug: string;
    author?: string;
    category?: string;
}

export const projects: Project[] = [
    {
        title: "Hotel Management System",
        description: "Multi-platform hotel operations with billing, room management, and compliance",
        tech: ["Node.js", "Flutter", "Prisma"],
        status: "Live",
        metric: "Full-stack deployed",
        slug: "hotel-management",
    },
    {
        title: "Attendify",
        description: "Smart attendance tracking with QR codes and location authentication",
        tech: ["Flutter", "Firebase"],
        status: "Live",
        metric: "Anti-proxy system",
        slug: "attendify",
    },
    {
        title: "Face Recognition Dashboard",
        description: "Real-time multi-face identification with live video processing",
        tech: ["Python", "OpenCV", "React"],
        status: "Local",
        metric: "30fps processing",
        slug: "face-recognition",
    },
    {
        title: "Expense Tracker",
        description: "Automated transaction tracking via notification parsing",
        tech: ["Flutter", "Hive"],
        status: "Live",
        metric: "95% Parsing Accuracy",
        slug: "expense-tracker",
    },
];

export const notes: Note[] = [
    {
        title: "Why Most AI-Assisted Coding Fails",
        excerpt: "The difference between 'vibe coding' and production systems requires more than just prompting...",
        readTime: "5 min read",
        date: "Jan 2026",
        slug: "ai-assisted-coding-pitfalls",
        category: "AI Engineering"
    },
    {
        title: "Designing Multi-Platform Systems in 2025",
        excerpt: "How Flutter + robust backends enable true cross-platform delivery without compromise...",
        readTime: "8 min read",
        date: "Dec 2025",
        slug: "multi-platform-systems",
        category: "System Design"
    },
    {
        title: "Building Production Systems with Agentic AI",
        excerpt: "How we ship systems 10x faster using AI agents while maintaining enterprise-grade quality.",
        date: "Jan 05, 2026",
        slug: "agentic-ai-development",
        readTime: "5 min read",
        category: "AI Development"
    },
    {
        title: "Real-time Face Recognition at 30fps",
        excerpt: "Architecture and optimizations for production-grade computer vision with Python and OpenCV.",
        date: "Dec 20, 2026",
        slug: "face-recognition-architecture",
        readTime: "12 min read",
        category: "Machine Learning"
    }
];

export const featuredProjects = projects;
// Take first 2 for homepage
export const featuredNotes = notes.slice(0, 2);
