import { ChevronDown, MessageSquare, Plus, Send } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <div className="bg-slate-950 text-white min-h-screen">

            {/* 1. CONTACT HERO */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-600/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                        <MessageSquare size={14} className="text-purple-400" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Get in Touch</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
                        Have Any Doubts? We <br /> <span className="text-white">are Ready to Help.</span>
                    </h1>

                    <p className="text-slate-400 max-w-xl mx-auto leading-relaxed font-medium text-sm md:text-base mb-12">
                        Whether you need guidance, support, or a fresh start, our team is ready to assist you in transforming your vision into reality.
                    </p>
                </div>
            </section>

            {/* 2. CONTACT FORM SECTION */}
            <section className="max-w-4xl mx-auto px-6 pb-24 relative">
                {/* Background Glow behind form */}
                <div className="absolute inset-0 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl overflow-hidden">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">First Name*</label>
                                <input type="text" placeholder="John" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-700" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Last Name*</label>
                                <input type="text" placeholder="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-700" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Work Email*</label>
                            <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-700" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Industry</label>
                                <select className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer">
                                    <option>Select Industry</option>
                                    <option>Technology</option>
                                    <option>Healthcare</option>
                                    <option>Finance</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Company Size</label>
                                <select className="w-full bg-slate-800 border border-white/10 rounded-xl px-5 py-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer">
                                    <option>Select Category</option>
                                    <option>1-10 Employees</option>
                                    <option>11-50 Employees</option>
                                    <option>50+ Employees</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Message</label>
                            <textarea rows={5} placeholder="Type your message..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-slate-700 resize-none" />
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-5 rounded-2xl transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] active:scale-[0.98] flex items-center justify-center gap-3">
                            <Send size={18} />
                            Submit Now
                        </button>
                    </form>
                </div>
            </section>

            {/* 3. FAQ SECTION (Matching the bottom of your reference) */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <div className="bg-purple-600 p-2 rounded-lg w-fit">
                            <Plus size={24} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                            Frequently <br /> Asked Questions
                        </h2>
                        <p className="text-slate-500 font-medium max-w-xs">
                            Have questions? Our FAQ section has you covered with quick answers to common inquiries.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <FAQItem question="What do I need to get started?" />
                        <FAQItem question="What kind of customization is available?" />
                        <FAQItem question="How does the AI synchronization work?" />
                        <FAQItem question="Do you provide ongoing tech support?" />
                        <FAQItem question="Is there a money-back guarantee?" />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FAQItem = ({ question }) => (
    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-purple-500/30 transition-all group cursor-pointer flex items-center justify-between">
        <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{question}</span>
        <ChevronDown size={18} className="text-slate-600 group-hover:text-purple-400 transition-colors" />
    </div>
);

export default Contact;