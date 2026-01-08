import { notFound } from "next/navigation";
import Link from "next/link";
import { GridBackground, Navigation, Footer } from "@/components";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <GridBackground>
            <Navigation />

            <main className="min-h-screen pt-32 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/work" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-8 transition-colors font-mono text-sm">
                        <span>←</span>
                        <span>Back to Work</span>
                    </Link>

                    <div className="mb-8">
                        <span className={`px-2 py-1 rounded text-xs font-mono font-medium ${project.status === "Live"
                            ? "bg-[#22C55E]/10 text-[#22C55E]"
                            : "bg-[#F59E0B]/10 text-[#F59E0B]"
                            }`}>
                            {project.status}
                        </span>
                    </div>

                    <h1 className="text-display text-white mb-6">
                        {project.title}
                    </h1>

                    <p className="text-xl text-[#A1A1AA] mb-12 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="p-8 border border-[#2A2A2A] rounded-lg bg-[#0A0A0A]/50">
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <span className="text-4xl mb-4">🚧</span>
                            <h3 className="text-xl font-bold text-white mb-2">Case Study Coming Soon</h3>
                            <p className="text-[#A1A1AA] max-w-md">
                                A detailed breakdown of the architecture, challenges, and solution for this project is being written.
                            </p>
                            <div className="mt-8 flex gap-4">
                                {project.slug === 'attendify' && (
                                    <Link href="https://attendify.velayon.com" className="btn-primary">
                                        View Live Demo
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </GridBackground>
    );
}
