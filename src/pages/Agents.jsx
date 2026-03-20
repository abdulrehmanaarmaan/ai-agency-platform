import { Cpu, MoreVertical, Pause, Play, Plus, Settings2, Trash2 } from 'lucide-react';
import React from 'react';

const Agents = () => {

    const agents = [
        { name: 'Astra-1', type: 'Customer Support', status: 'Active', tokens: '1.2k', uptime: '99.9%' },
        { name: 'Neural-Sync', type: 'Data Analyst', status: 'Paused', tokens: '450', uptime: '98.2%' },
        { name: 'Lumina', type: 'Content Creator', status: 'Active', tokens: '2.8k', uptime: '100%' },
        { name: 'Vector-X', type: 'Security Audit', status: 'Active', tokens: '890', uptime: '99.5%' },
    ];

    return (
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700 px-1">
            {/* 1. HEADER & ACTION BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white">AI Agents</
                    h1>
                    <p className="text-slate-500 text-xs md:text-sm font-medium">
                        Deploy and manage your autonomous intelligence units.
                    </p>
                </div>
                <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white text-[10px] md:text-xs font-black px-6 py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] active:scale-95 flex items-center justify-center gap-2">
                    <Plus size={18} />
                    Create New Agent
                </button>
            </div>
            {/* 2. AGENTS GRID */}
            {/* Added 'lg' breakpoint for smoother transition between tablet and desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                {agents.map((agent, index) => (
                    <AgentCard key={index} agent={agent} />
                ))}
            </div>
        </div>
    );
};

// --- HELPER COMPONENT ---


const AgentCard = ({ agent }) => (
    /* Reduced padding on mobile (p-6) vs desktop (p-8) and slightly smaller corner radius for mobile */
    <div className="bg-slate-900/50 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 hover:border-purple-500/30 transition-all group relative overflow-hidden">


        {/* Status Indicator Glow */}
        <div className={`absolute top-0 right-0 w-32 h-32 blur-[50px] opacity-10 pointer-events-none ${agent.
            status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'
            }`} />


        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                {/* Scaled down icon for mobile */}
                <div className="p-3 md:p-4 bg-slate-950 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                    <Cpu size={20} className="text-purple-400" />
                </div>
                <div className="flex items-center gap-2">
                    <span className={`flex items-center gap-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${agent.status === 'Active' ?
                        'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${agent.status === 'Active' ?
                            'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
                        {agent.status}
                    </span>
                    <button className="text-slate-600 hover:text-white transition-colors p-1">
                        <MoreVertical size={18} />
                    </button>
                </div>
            </div>


            <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-black text-white tracking-tight leading-tight">{agent.
                    name}</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">{agent.
                    type}</p>
            </div>


            {/* Stats Mini-Grid - Uses smaller text on very small screens */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                <div className="bg-slate-950/50 p-3 md:p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] md:text-[10px] text-slate-600 font-black uppercase tracking-tighter mb-1">Daily Tokens</p>
                    <p className="text-base md:text-lg font-black text-slate-200">{agent.tokens}</p>
                </div>
                <div className="bg-slate-950/50 p-3 md:p-4 rounded-2xl border border-white/5">
                    <p className="text-[9px] md:text-[10px] text-slate-600 font-black uppercase tracking-tighter mb-1">Uptime</p>
                    <p className="text-base md:text-lg font-black text-slate-200">{agent.uptime}</p>
                </div>
            </div>


            {/* Action Buttons - Adjusted for clickability on touch screens */}
            <div className="flex gap-2 md:gap-3">
                <button className="flex-[2] bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-300 transition-all flex items-center justify-center gap-2">
                    <Settings2 size={14} />
                    <span className="hidden xs:inline">Config</span>
                </button>
                <button className={`flex-1 p-3 rounded-xl border border-white/10 transition-all flex items-center justify-center ${agent.status === 'Active' ? 'text-amber-500 hover:bg-amber-500/10' : 'text-emerald-500 hover:bg-emerald-500/10'
                    }`}>
                    {agent.status === 'Active' ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button className="flex-1 p-3 rounded-xl border border-white/10 text-slate-600 hover:text-red-500 hover:bg-red-500/10 transition-all flex items-center justify-center">
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    </div >
);

export default Agents;