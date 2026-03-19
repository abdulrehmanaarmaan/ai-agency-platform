import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, Cpu, Globe, Play, Shield, Star, Zap } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="bg-slate-950 text-white selection:bg-purple-500/30">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 z-0" />
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Next-Gen AI Studio</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                        AI-Driven Success <br /> Redefining the Future.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
                        Building autonomous ecosystems that scale your vision through neural infrastructure
                        and agentic precision.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-black font-black rounded-xl hover:scale-105 transition-all active:scale-95">
                            Connect With Us
                        </button>
                        <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">
                            What is Nubien?
                        </button>
                    </div>
                </div>
            </section>
            {/* 2. BENTO GRID FEATURES */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black mb-4">Neural Capabilities</h2>
                    <p className="text-slate-500 font-medium">Modular solutions for complex digital
                        challenges.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Large Card */}
                    <div className="md:col-span-2 bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/50 transition-colors group">
                        <Cpu className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" size=
                            {40} />
                        <h3 className="text-3xl font-black mb-4 text-white">Autonomous Agents</h3>
                        <p className="text-slate-400 leading-relaxed">We deploy self-learning agents that
                            handle customer success, cold outreach, and data entry with 99.9% accuracy.</p>
                    </div>
                    {/* Small Card */}
                    <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-10 rounded-[2.5rem] flex flex-col justify-between">
                        <Zap className="text-white" size={40} />
                        <div>
                            <h3 className="text-2xl font-black mb-2 text-white">Velocity Engine</h3>
                            <p className="text-white/80 text-sm">Deploying models in seconds, not weeks.</p>
                        </div>
                    </div>
                    {/* Bottom Row Bento */}
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-4">
                        <Shield size={32} className="text-blue-400" />
                        <h4 className="text-xl font-bold">Encrypted Logic</h4>
                        <p className="text-slate-500 text-sm">Enterprise-grade security for every token
                            processed.</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-4">
                        <Globe size={32} className="text-emerald-400" />
                        <h4 className="text-xl font-bold">Global Sync</h4>
                        <p className="text-slate-500 text-sm">Distributed neural networks across 40+ regions.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col gap-4">
                        <BarChart3 size={32} className="text-orange-400" />
                        <h4 className="text-xl font-bold">Real-time Analytics</h4>
                        <p className="text-slate-500 text-sm">Visualize the thought process of your AI fleet.
                        </p>
                    </div>
                </div>
            </section>
            {/* 3. CTA SECTION (The "Sync" Section from Reference) */}
            <section className="py-24 bg-white text-black rounded-[4rem] mx-6 mb-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
                        Ready to <span className="text-purple-600">Sync</span> your business with the future?
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 font-medium leading-relaxed">
                        Our dynamic team of industry experts is committed to achieving exceptional
                        results through creativity and collaboration.
                    </p>
                    <button className="flex items-center gap-2 mx-auto bg-black text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-transform group">
                        Get in Touch
                        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </section>
            {/* 4. MINI FOOTER */}
            <footer className="py-12 border-t border-white/5 text-center text-slate-600 text-xs font-bold uppercase tracking-widest">
                © 2026 Nubien AI Studio • Redefining Excellence
            </footer>
        </div>
    );
};

export default Home;