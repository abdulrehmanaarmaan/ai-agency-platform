import { ArrowLeft, Home, Search, ShieldAlert } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 animate-in fade-in zoom-in duration-700">
            <div className="relative max-w-lg w-full text-center">

                {/* 1. BACKGROUND GLOW EFFECTS */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full -z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

                {/* 2. ICON & ERROR CODE */}
                <div className="relative inline-block mb-8">
                    <div className="p-6 bg-slate-900/50 border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl">
                        <ShieldAlert size={48} className="text-purple-500 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-[10px] font-black px-3 py-1 rounded-lg shadow-lg">
                        ERR: 404
                    </div>
                </div>

                {/* 3. TEXT CONTENT */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
                        Path Not Found.
                    </h1>
                    <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm mx-auto leading-relaxed">
                        The neural coordinate you are looking for does not exist or has been moved to a restricted sector.
                    </p>
                </div>

                {/* 4. ACTIONS - Responsive Stack */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-black px-8 py-4 rounded-2xl transition-all active:scale-95"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                    <button
                        onClick={() => navigate('/dashboard')}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-black px-8 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] active:scale-95"
                    >
                        <Home size={18} />
                        Return Dashboard
                    </button>
                </div>

                {/* 5. SEARCH HINT */}
                <div className="mt-12 pt-8 border-t border-white/5">
                    <div className="flex items-center justify-center gap-2 text-slate-600">
                        <Search size={14} />
                        <span className="text-[10px] font-black uppercase tracking-widest">
                            Lost? Contact System Admin
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;