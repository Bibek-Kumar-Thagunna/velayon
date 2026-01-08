import { notFound } from "next/navigation";
import Link from "next/link";
import { GridBackground, Navigation, Footer } from "@/components";
import { notes } from "@/lib/data";

export async function generateStaticParams() {
    return notes.map((note) => ({
        slug: note.slug,
    }));
}

export default async function NotePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const note = notes.find((n) => n.slug === slug);

    if (!note) {
        notFound();
    }

    return (
        <GridBackground>
            <Navigation />

            <main className="min-h-screen pt-32 pb-16 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link href="/notes" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-white mb-8 transition-colors font-mono text-sm">
                        <span>←</span>
                        <span>Back to Notes</span>
                    </Link>

                    <div className="flex items-center gap-3 text-sm mb-6 font-mono">
                        <span className="text-[#F59E0B]">{note.category || "Engineering"}</span>
                        <span className="text-[#333333]">•</span>
                        <span className="text-[#6B7280]">{note.readTime}</span>
                        <span className="text-[#333333]">•</span>
                        <span className="text-[#6B7280]">{note.date}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {note.title}
                    </h1>

                    <p className="text-xl text-[#A1A1AA] mb-12 leading-relaxed border-l-2 border-[#22C55E] pl-6 font-light">
                        {note.excerpt}
                    </p>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-[#A1A1AA] mb-6">
                            In the rapidly evolving landscape of AI-assisted software development, a dangerous pattern is emerging. Developers are increasingly relying on "vibe coding"—generating code based on loose semantic intent without rigorous architectural constraints. While this dramatically speeds up the initial prototype phase, it creates substantial technical debt that becomes visible only when scaling to production.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Context Trap</h2>
                        <p className="text-[#A1A1AA] mb-6">
                            Large Language Models (LLMs) excel at local optimization—writing a perfect function or class—but struggle with global coherence. When a codebase exceeds the context window (or effective attention span) of the model, hallucinated imports, mismatched types, and inconsistent patterns begin to creep in.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-12 mb-6">Architecture as the Guardrail</h2>
                        <p className="text-[#A1A1AA] mb-6">
                            The solution isn&apos;t better prompting; it&apos;s better systems. By treating AI as an implementation detail within a strict architectural framework (e.g., Domain-Driven Design or Clean Architecture), we can constrain the AI&apos;s output space to valid, production-ready code.
                        </p>

                        <div className="bg-[#1A1A1A] p-6 rounded-lg my-8 border-l-4 border-[#22C55E]">
                            <p className="text-white font-mono italic">
                                "AI writes the code, but the System Engineer defines the interface."
                            </p>
                        </div>

                        <p className="text-[#A1A1AA]">
                            This approach allows us to maintain 10x velocity without sacrificing long-term maintainability. It transforms the role of the developer from "writer of code" to "architect of systems".
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </GridBackground>
    );
}
