import { ChevronDown, Plus } from 'lucide-react';
import React from 'react';

const Portfolio = () => {
    return (
        <div className="bg-slate-950 text-white min-h-screen">

            {/* 1. PORTFOLIO HERO */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                        <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Our Work</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                        Explore Our Most <br /> <span className="text-white">Remarkable Projects.</span>
                    </h1>

                    <p className="text-slate-400 max-w-xl mx-auto leading-relaxed mb-10 font-medium text-sm md:text-base">
                        We build customized solutions that empower both startups and established brands, driving success through innovation and impact.
                    </p>

                    <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-black px-8 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-95">
                        Build Your Product
                    </button>
                </div>
            </section>

            {/* 2. PROJECT GRID SECTION */}
            <section className="py-20 max-w-7xl mx-auto px-6 space-y-12">
                <ProjectCard
                    tag="2026 • Lumaride Task"
                    title="Lumaride Dashboard"
                    features={["AI Integration", "Responsive Design", "Custom Layouts", "Fast Loading"]}
                    image1="https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
                    image2="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                />

                <ProjectCard
                    tag="2025 • Myn Studio"
                    title="Agency Ecosystem"
                    features={["Modern Typography", "Clean Layouts", "Flexible CMS", "SEO Optimized"]}
                    image1="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
                    image2="https://images.unsplash.com/photo-1618761767630-01f4496bb657?auto=format&fit=crop&q=80&w=800"
                />
            </section>

            {/* 3. FAQ SECTION (Bottom of Portfolio) */}
            <section className="py-24 max-w-3xl mx-auto px-6">
                <div className="flex items-center gap-4 mb-12">
                    <div className="bg-purple-600 p-2 rounded-lg text-white">
                        <Plus size={20} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black tracking-tight">Frequently Asked Questions</h2>
                        <p className="text-slate-500 text-sm font-medium mt-1">Everything you need to know about our process.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <FAQItem question="What do I need to get started?" />
                    <FAQItem question="What kind of customization is available?" />
                    <FAQItem question="How does the AI integration work?" />
                </div>
            </section>
        </div>
    );
};

// --- HELPER COMPONENTS ---

const ProjectCard = ({ tag, title, features, image1, image2 }) => (
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden group hover:border-purple-500/30 transition-all duration-500">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Project Details */}
            <div className="p-10 md:p-16 flex flex-col justify-between">
                <div>
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">{tag}</span>
                    <h3 className="text-3xl md:text-4xl font-black mt-4 mb-8 text-white group-hover:text-purple-400 transition-colors">{title}</h3>

                    <ul className="space-y-4">
                        {features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-slate-400 font-medium text-sm">
                                <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex gap-4 mt-12">
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-500">Website</div>
                    <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-slate-500">Agency</div>
                </div>
            </div>

            {/* Project Preview Images */}
            <div className="grid grid-cols-2 gap-2 p-4 bg-slate-900/50">
                <div className="rounded-2xl overflow-hidden h-[300px] lg:h-full">
                    <img src={image1} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Project v1" />
                </div>
                <div className="rounded-2xl overflow-hidden h-[300px] lg:h-full">
                    <img src={image2} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Project v2" />
                </div>
            </div>
        </div>
    </div>
);

const FAQItem = ({ question }) => (
    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer flex items-center justify-between">
        <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{question}</span>
        <ChevronDown size={18} className="text-slate-600 group-hover:text-purple-400 transition-colors" />
    </div>
);

export default Portfolio;