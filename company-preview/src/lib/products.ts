export interface PricingTier {
    name: string;
    price: string;
    period?: string;
    description: string;
    features: string[];
    cta: string;
    ctaLink: string;
    highlighted?: boolean;
}

export interface AppLink {
    platform: 'playstore' | 'appstore' | 'windows' | 'macos' | 'linux' | 'web';
    url: string;
    available: boolean;
    comingSoon?: boolean;
}

export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    longDescription: string;
    category: 'saas' | 'enterprise' | 'mobile' | 'desktop';
    targetAudience: string;
    heroImage?: string;

    // Features
    features: {
        title: string;
        description: string;
        icon: string;
    }[];

    // Pricing
    pricingModel: 'subscription' | 'enterprise' | 'freemium' | 'one-time';
    pricingTiers: PricingTier[];

    // Downloads
    appLinks: AppLink[];

    // Social proof
    stats: {
        label: string;
        value: string;
    }[];

    // Technical
    techStack: string[];

    // Marketing
    badge?: string;
    color: string; // Accent color for this product

    // Content
    screenshots?: string[];
    demoVideo?: string;
    caseStudySlug?: string;
}

export const products: Product[] = [
    // 1. ATTENDIFY - Educational SaaS
    {
        id: 'attendify',
        name: 'Attendify',
        tagline: 'Geofenced Attendance Tracking for Modern Institutions',
        description: 'QR code and geolocation-based attendance system handling 10k+ concurrent requests.',
        longDescription: 'Attendify is a comprehensive attendance management platform designed for educational institutions. Combining QR code technology with geofencing, it ensures accurate, tamper-proof attendance tracking while providing real-time analytics and insights.',
        category: 'saas',
        targetAudience: 'Schools, Colleges, Universities, Training Centers',
        badge: 'MOST POPULAR',
        color: '#22C55E', // Emerald

        features: [
            {
                title: 'Geofence Protection',
                description: 'Students must be within designated campus boundaries to mark attendance',
                icon: '📍'
            },
            {
                title: 'QR Code Verification',
                description: 'Unique QR codes for each session prevent proxy attendance',
                icon: '📱'
            },
            {
                title: 'Real-time Analytics',
                description: 'Live dashboards showing attendance trends and patterns',
                icon: '📊'
            },
            {
                title: 'Multi-platform Access',
                description: 'Mobile apps for students, web portal for administrators',
                icon: '🌐'
            },
            {
                title: 'Automated Reports',
                description: 'Daily, weekly, and monthly attendance reports generated automatically',
                icon: '📈'
            },
            {
                title: 'Parent Notifications',
                description: 'SMS/email alerts to parents when students are absent',
                icon: '🔔'
            }
        ],

        pricingModel: 'subscription',
        pricingTiers: [
            {
                name: 'Free Trial',
                price: 'Free',
                period: '30 days',
                description: 'Perfect for testing with a single class',
                features: [
                    'Up to 50 students',
                    'Basic QR attendance',
                    'Geofencing',
                    'Email support',
                    'Basic analytics'
                ],
                cta: 'Start Free Trial',
                ctaLink: '/contact?product=attendify&plan=trial'
            },
            {
                name: 'Starter',
                price: '$49',
                period: '/month',
                description: 'Great for small schools and coaching centers',
                features: [
                    'Up to 200 students',
                    'All Free features',
                    'Parent notifications',
                    'Advanced analytics',
                    'Priority support',
                    'Custom branding'
                ],
                cta: 'Get Started',
                ctaLink: '/contact?product=attendify&plan=starter',
                highlighted: true
            },
            {
                name: 'Professional',
                price: '$149',
                period: '/month',
                description: 'For mid-sized institutions',
                features: [
                    'Up to 1,000 students',
                    'All Starter features',
                    'Multi-campus support',
                    'API access',
                    'Dedicated account manager',
                    'Custom integrations'
                ],
                cta: 'Get Started',
                ctaLink: '/contact?product=attendify&plan=pro'
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For universities and large institutions',
                features: [
                    'Unlimited students',
                    'All Professional features',
                    'On-premise deployment',
                    'SLA guarantee',
                    '24/7 phone support',
                    'Custom development'
                ],
                cta: 'Contact Sales',
                ctaLink: '/contact?product=attendify&plan=enterprise'
            }
        ],

        appLinks: [
            {
                platform: 'playstore',
                url: 'https://play.google.com/store/apps/details?id=com.velayon.attendify',
                available: true
            },
            {
                platform: 'appstore',
                url: '#',
                available: false,
                comingSoon: true
            },
            {
                platform: 'web',
                url: 'https://attendify.velayon.com',
                available: true
            }
        ],

        stats: [
            { label: 'Daily Active Users', value: '300+' },
            { label: 'Institutions', value: '15+' },
            { label: 'Attendance Records', value: '50k+' },
            { label: 'Uptime', value: '99.9%' }
        ],

        techStack: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js', 'PostgreSQL']
    },

    // 2. FACE RECOGNITION - Enterprise Security
    {
        id: 'face-recognition',
        name: 'CCTV Face Recognition',
        tagline: 'Enterprise-Grade Facial Recognition for Security',
        description: 'Real-time face detection and recognition system with 95%+ accuracy for access control and surveillance.',
        longDescription: 'Our CCTV Face Recognition system integrates with existing camera infrastructure to provide real-time identification, access control, and security monitoring. Built for enterprise security agencies and large facilities.',
        category: 'enterprise',
        targetAudience: 'Security Agencies, Corporate Offices, Government Facilities',
        badge: 'ENTERPRISE',
        color: '#3B82F6', // Blue

        features: [
            {
                title: '95%+ Accuracy',
                description: 'Industry-leading facial recognition accuracy in varied lighting conditions',
                icon: '🎯'
            },
            {
                title: 'Real-time Processing',
                description: 'Sub-second identification from live camera feeds',
                icon: '⚡'
            },
            {
                title: 'Existing CCTV Integration',
                description: 'Works with your current camera infrastructure',
                icon: '📹'
            },
            {
                title: 'Access Control',
                description: 'Automated door/gate control based on facial recognition',
                icon: '🚪'
            },
            {
                title: 'Watchlist Alerts',
                description: 'Instant notifications when flagged individuals are detected',
                icon: '🚨'
            },
            {
                title: 'Attendance Tracking',
                description: 'Automated employee time tracking via facial recognition',
                icon: '⏰'
            }
        ],

        pricingModel: 'enterprise',
        pricingTiers: [
            {
                name: 'Enterprise',
                price: 'Custom Pricing',
                description: 'Tailored to your security infrastructure',
                features: [
                    'Unlimited cameras',
                    'On-premise deployment',
                    'Custom model training',
                    'Dedicated support team',
                    'SLA with 99.9% uptime',
                    'Regular security updates',
                    'Compliance certifications'
                ],
                cta: 'Request Demo',
                ctaLink: '/contact?product=face-recognition'
            }
        ],

        appLinks: [
            {
                platform: 'windows',
                url: '/contact?product=face-recognition',
                available: true
            },
            {
                platform: 'linux',
                url: '/contact?product=face-recognition',
                available: true
            }
        ],

        stats: [
            { label: 'Recognition Accuracy', value: '95%+' },
            { label: 'Processing Speed', value: '<1s' },
            { label: 'Concurrent Cameras', value: '50+' },
            { label: 'Database Capacity', value: '10k+ faces' }
        ],

        techStack: ['Python', 'TensorFlow', 'OpenCV', 'NVIDIA CUDA', 'PostgreSQL', 'Redis']
    },

    // 3. HOTEL MANAGEMENT - Hospitality ERP
    {
        id: 'hotel-management',
        name: 'HMS Core',
        tagline: 'Complete Hotel Operations Platform',
        description: 'Full-stack hotel management ERP with multi-tenant billing, inventory control, and RBAC.',
        longDescription: 'HMS Core is an all-in-one hotel management solution covering front desk operations, housekeeping, F&B, billing, and analytics. Designed for hotels of all sizes, from boutique properties to large chains.',
        category: 'desktop',
        targetAudience: 'Hotels, Resorts, Guest Houses, Serviced Apartments',
        badge: 'FULL ERP',
        color: '#8B5CF6', // Purple

        features: [
            {
                title: 'Front Desk Management',
                description: 'Reservations, check-in/out, room assignments, guest profiles',
                icon: '🏨'
            },
            {
                title: 'Housekeeping Module',
                description: 'Room status tracking, cleaning schedules, maintenance requests',
                icon: '🧹'
            },
            {
                title: 'F&B Point of Sale',
                description: 'Restaurant billing integrated with room charges',
                icon: '🍽️'
            },
            {
                title: 'Multi-tenant Billing',
                description: 'Separate accounts for multiple properties under one system',
                icon: '💳'
            },
            {
                title: 'Inventory Control',
                description: 'Track amenities, linens, supplies across departments',
                icon: '📦'
            },
            {
                title: 'Analytics Dashboard',
                description: 'Occupancy rates, revenue reports, performance metrics',
                icon: '📊'
            }
        ],

        pricingModel: 'subscription',
        pricingTiers: [
            {
                name: 'Basic',
                price: '$99',
                period: '/month',
                description: 'Perfect for small guest houses',
                features: [
                    'Up to 20 rooms',
                    'Front desk module',
                    'Basic billing',
                    'Email support',
                    '1 property only'
                ],
                cta: 'Start Free Trial',
                ctaLink: '/contact?product=hms&plan=basic'
            },
            {
                name: 'Professional',
                price: '$299',
                period: '/month',
                description: 'For mid-sized hotels',
                features: [
                    'Up to 100 rooms',
                    'All Basic features',
                    'Housekeeping module',
                    'F&B POS',
                    'Inventory management',
                    'Priority support'
                ],
                cta: 'Start Free Trial',
                ctaLink: '/contact?product=hms&plan=pro',
                highlighted: true
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For hotel chains and resorts',
                features: [
                    'Unlimited rooms',
                    'All Professional features',
                    'Multi-property support',
                    'Custom integrations',
                    'On-premise option',
                    'Dedicated support'
                ],
                cta: 'Contact Sales',
                ctaLink: '/contact?product=hms&plan=enterprise'
            }
        ],

        appLinks: [
            {
                platform: 'windows',
                url: '/contact?product=hms',
                available: true
            },
            {
                platform: 'macos',
                url: '/contact?product=hms',
                available: true
            },
            {
                platform: 'linux',
                url: '/contact?product=hms',
                available: true
            }
        ],

        stats: [
            { label: 'Properties Using HMS', value: '25+' },
            { label: 'Daily Transactions', value: '1000+' },
            { label: 'Support Response', value: '<2hr' },
            { label: 'System Uptime', value: '99.8%' }
        ],

        techStack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL', 'Electron']
    },

    // 4. EXPENSE TRACKER - Consumer Mobile
    {
        id: 'expense-tracker',
        name: 'Expense Tracker',
        tagline: 'Automated Transaction Tracking',
        description: 'Parse SMS notifications to automatically track expenses with 95% accuracy. Zero manual entry.',
        longDescription: 'Our Expense Tracker uses AI to parse your bank SMS notifications and automatically categorize transactions. Get insights into spending patterns without lifting a finger.',
        category: 'mobile',
        targetAudience: 'Individuals, Freelancers, Small Business Owners',
        badge: 'COMING SOON',
        color: '#F59E0B', // Amber

        features: [
            {
                title: 'SMS Auto-Parse',
                description: 'Automatically extract transaction details from bank SMS',
                icon: '💬'
            },
            {
                title: 'Smart Categorization',
                description: 'AI-powered expense categorization (food, transport, bills, etc.)',
                icon: '🤖'
            },
            {
                title: 'Spending Insights',
                description: 'Visual reports and trends of your spending habits',
                icon: '📉'
            },
            {
                title: 'Budget Alerts',
                description: 'Get notified when you exceed category budgets',
                icon: '⚠️'
            },
            {
                title: 'Multi-account Support',
                description: 'Track expenses across multiple bank accounts',
                icon: '🏦'
            },
            {
                title: 'Export Reports',
                description: 'Download CSV/PDF reports for tax filing',
                icon: '📄'
            }
        ],

        pricingModel: 'freemium',
        pricingTiers: [
            {
                name: 'Free',
                price: 'Free',
                period: 'forever',
                description: 'Perfect for personal use',
                features: [
                    'SMS auto-parsing',
                    'Basic categorization',
                    '3 months history',
                    'Simple reports',
                    'Ads supported'
                ],
                cta: 'Download Free',
                ctaLink: '/contact?product=expense-tracker&plan=free'
            },
            {
                name: 'Premium',
                price: '$4.99',
                period: '/month',
                description: 'For power users',
                features: [
                    'All Free features',
                    'Unlimited history',
                    'Advanced analytics',
                    'Budget planning',
                    'Export reports',
                    'No ads',
                    'Priority support'
                ],
                cta: 'Get Premium',
                ctaLink: '/contact?product=expense-tracker&plan=premium',
                highlighted: true
            }
        ],

        appLinks: [
            {
                platform: 'playstore',
                url: '#',
                available: false,
                comingSoon: true
            },
            {
                platform: 'appstore',
                url: '#',
                available: false,
                comingSoon: true
            }
        ],

        stats: [
            { label: 'Parsing Accuracy', value: '95%' },
            { label: 'Supported Banks', value: '50+' },
            { label: 'Categories', value: '20+' },
            { label: 'Beta Users', value: '200+' }
        ],

        techStack: ['Flutter', 'Firebase', 'Python ML', 'TensorFlow Lite']
    }
];

// Helper functions
export function getProductById(id: string): Product | undefined {
    return products.find(p => p.id === id);
}

export function getProductsByCategory(category: Product['category']): Product[] {
    return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
    // Return products with badges or most popular
    return products.filter(p => p.badge);
}
