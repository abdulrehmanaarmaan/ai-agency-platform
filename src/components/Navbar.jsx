import { Menu, Sparkles, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Effect to handle glassmorphism on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
        { name: 'FAQ', href: '/faq' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5' : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* 1. BRAND LOGO */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-purple-600 p-1.5 rounded-lg group-hover:rotate-[15deg] transition-transform duration-300">
                        <Sparkles className="text-white" size={20} />
                    </div>
                    <span className="text-xl font-black text-white tracking-tighter">
                        Nubien
                    </span>
                </Link>

                {/* 2. DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-10">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    className="text-sm font-bold text-slate-400 hover:text-white transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                        href="/contact"
                        className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-black px-6 py-2.5 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-95"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* 3. MOBILE TOGGLE */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* 4. MOBILE MENU OVERLAY */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 top-[72px] bg-slate-950 z-[90] animate-in fade-in slide-in-from-top duration-300">
                    <div className="flex flex-col p-8 gap-6">
                        {navLinks.map((link) => (
                            <Link
                                to={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-2xl font-black text-white hover:text-purple-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center bg-purple-600 text-white py-4 rounded-2xl font-black mt-4"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;