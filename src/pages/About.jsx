import { Globe, Lightbulb, Rocket, Shield, Target, Users } from 'lucide-react';
import React from 'react';

const About = () => {
    return (
        <div className="bg-slate-950 text-white min-h-screen">

            {/* 1. ABOUT HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent z-0" />

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
                        <Rocket size={14} className="text-purple-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Explore Our Journey</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                        Pioneering AI Innovation <br /> with <span className="text-white">Revolution!</span>
                    </h1>

                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed mb-10">
                        Nubien is your trusted agency for creative strategy. We specialize in cutting-edge digital solutions and AI-driven growth.
                    </p>

                    {/* Central Image/App Preview with Glow */}
                    <div className="relative mt-16 max-w-5xl mx-auto group">
                        <div className="absolute inset-0 bg-purple-600/30 blur-[100px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                        <div className="relative bg-slate-900 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200"
                                alt="AI Workspace Preview"
                                className="w-full h-auto object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VALUE PROPOSITION SECTION */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Image with Decorative Border */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 blur-2xl rounded-[3rem]" />
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=800"
                                alt="Team Collaboration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                            <Users size={14} className="text-purple-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">About Nubien</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                            Shaping Tomorrow <br />
                            <span className="text-slate-500">With Bold Ideas</span>
                        </h2>

                        <p className="text-slate-400 leading-relaxed">
                            Nubien is a next-gen AI agency template built for bold visionaries, researchers, and builders shaping the future of intelligence.
                        </p>

                        {/* Feature Cards inside About */}
                        <div className="space-y-4">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all cursor-default group">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="bg-purple-600/20 p-2 rounded-lg text-purple-400 group-hover:scale-110 transition-transform">
                                        <Target size={20} />
                                    </div>
                                    <h4 className="font-black text-lg">Built for Cutting-Edge AI Teams</h4>
                                </div>
                                <p className="text-sm text-slate-500 ml-12">
                                    Whether you're developing LLMs, intelligent tools, or autonomous agents, Nubien gives you a launch-ready site.
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">AI Agency</div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400">Future Ready</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE VALUES GRID */}
            <section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ValueCard
                        icon={<Lightbulb className="text-yellow-400" />}
                        title="Innovation First"
                        desc="We push the boundaries of what's possible with neural infrastructure."
                    />
                    <ValueCard
                        icon={<Globe className="text-blue-400" />}
                        title="Global Vision"
                        desc="Connecting intelligence across borders and industries."
                    />
                    <ValueCard
                        icon={<Shield className="text-emerald-400" />}
                        title="Ethical AI"
                        desc="Committed to safety and transparency in every model we deploy."
                    />
                </div>
            </section>
        </div>
    );
};

const ValueCard = ({ icon, title, desc }) => (
    <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-purple-500/50 transition-all group">
        <div className="mb-6 p-4 bg-slate-900 rounded-2xl w-fit group-hover:rotate-12 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-black mb-4">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
);

export default About;