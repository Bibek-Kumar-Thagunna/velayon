
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
        title: "Attendify",
        description: "Smart attendance tracking with QR codes, location verification, and real-time analytics. Anti-proxy system with web dashboard.",
        tech: ["Flutter", "Firebase", "Google Maps", "QR"],
        status: "Live",
        metric: "Deployed demo",
        slug: "attendify",
    },
    {
        title: "Hotel Management System",
        description: "Full-featured multi-platform hotel operations platform with billing, room management, and Nepal tax compliance. Supports web, iOS, Android, Windows, macOS.",
        tech: ["Node.js", "Flutter", "Prisma", "PostgreSQL"],
        status: "Live",
        metric: "Multi-platform ready",
        slug: "hotel-management",
    },
    {
        title: "Face Recognition Dashboard",
        description: "Real-time multi-face identification system with CCTV integration. Live video processing at 30fps with enterprise-grade accuracy.",
        tech: ["Python", "OpenCV", "React", "WebSocket"],
        status: "Local",
        metric: "30fps real-time",
        slug: "face-recognition",
    },
    {
        title: "Expense Tracker",
        description: "Automated transaction tracking via SMS notification parsing. Smart categorization with 95% accuracy and offline-first architecture.",
        tech: ["Flutter", "Hive", "ML Kit"],
        status: "Live",
        metric: "Deployed demo",
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
