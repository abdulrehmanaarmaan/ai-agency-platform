import { ArrowRight, Github, Instagram, Sparkles, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-slate-950 pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* 1. CALL TO ACTION CARD (The "Ready to Elevate" section from Image 2) */}
                <div className="relative group mb-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative bg-slate-900/50 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
                        {/* Radial Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                                Ready to Elevate Your Brand <br className="hidden md:block" />
                                with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Next-Gen Innovation?</span>
                            </h2>
                            <p className="text-slate-400 max-w-xl mx-auto mb-10 font-medium">
                                Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
                            </p>
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-black px-10 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] active:scale-95">
                                Book an Appointment
                            </button>
                        </div>
                    </div>
                </div>

                {/* 2. MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group w-fit">
                            <div className="bg-purple-600 p-1.5 rounded-lg">
                                <Sparkles className="text-white" size={20} />
                            </div>
                            <span className="text-xl font-black text-white tracking-tighter">Nubien</span>
                        </Link>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                            Made remotely with 💜 and passion. <br />
                            <span className="text-white">— Westhill Studio.</span>
                        </p>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Template Pages</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-500">
                            <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About</Link></li>
                            <li><Link to="/portfolio" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
                            <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
                            <li><Link to="/faq" className="hover:text-purple-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Social</h4>
                        <ul className="space-y-4 text-sm font-medium text-slate-500">
                            <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Twitter size={16} /> Twitter (X)</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Instagram size={16} /> Instagram</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Youtube size={16} /> Youtube</a></li>
                            <li><a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Github size={16} /> Framer</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Subscribe Form</h4>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter Your Email..."
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-full"
                            />
                            <button className="bg-purple-600 text-white p-2.5 rounded-xl hover:bg-purple-700 transition-all shrink-0">
                                <ArrowRight size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                {/* 3. BOTTOM BAR */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
                    <p>© 2026 Mandra Design</p>
                    <div className="flex gap-8">
                        <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;