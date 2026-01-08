import Link from "next/link";

interface BackNavProps {
    href?: string;
    label?: string;
    className?: string; // Allow custom styling positioning
}

export function BackNav({ href = "/", label = "Home", className = "" }: BackNavProps) {
    return (
        <Link
            href={href}
            className={`inline-flex items-center gap-2 text-[#6B7280] hover:text-white transition-colors font-mono text-sm group ${className}`}
        >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>{label}</span>
        </Link>
    );
}
