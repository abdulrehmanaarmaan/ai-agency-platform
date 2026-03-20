import { Activity, ArrowUpRight, Clock, Cpu, TrendingUp, Users, Zap } from 'lucide-react';
import React from 'react';

const Overview = () => {
    return (
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700 px-1">
            {/* 1. HEADER SECTION */}
            <div className="space-y-1">
                <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white leading-tight">System Overview</h1>
                <p className="text-slate-500 text-xs md:text-sm font-medium max-w-2xl">
                    Welcome back. Here is what's happening with your AI infrastructure today.
                </p>
            </div>
            {/* 2. STATS GRID - Stacks 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <StatCard
                    title="Total API Requests"
                    value="142.8k"
                    change="+12.5%"
                    icon={<Zap size={18} className="text-yellow-400" />}
                />
                <StatCard
                    title="Active Agents"
                    value="12"
                    change="+2"
                    icon={<Cpu size={18} className="text-purple-400" />}
                />
                <StatCard
                    title="Avg. Latency"
                    value="240ms"
                    change="-14ms"
                    icon={<Activity size={18} className="text-emerald-400" />}
                />
                <StatCard
                    title="Total Users"
                    value="8,432"
                    change="+144"
                    icon={<Users size={18} className="text-blue-400" />}
                />
            </div>
            {/* 3. MAIN CONTENT SPLIT - Stacks 1 col on mobile/tablet, 3-span grid on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Usage Graph Placeholder */}
                <div className="lg:col-span-2 bg-slate-900/50 border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity hidden sm:block">
                        <TrendingUp size={120} className="text-purple-500" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-lg md:text-xl font-black mb-1">Neural Traffic</h3>
                        <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-8 font-medium">Real-time
                            token consumption across all nodes.</p>
                        {/* Visual Placeholder for a Chart - Gap scales with screen size */}
                        <div className="h-48 md:h-64 w-full bg-slate-950/50 border border-white/5 rounded-2xl md:rounded-3xl flex items-end justify-between p-4 md:p-6 gap-1 md:gap-2 overflow-hidden">
                            {[40, 70, 45, 90, 65, 80, 50, 95, 75, 60, 85, 45, 70, 55].map((h, i) => (
                                <div
                                    key={i}
                                    className={`w-full bg-linear-to-t from-purple-600/20 to-purple-500 rounded-t-sm md:rounded-t-lg transition-all duration-1000 ${i > 8 ?
                                        'hidden sm:block' : ''}`}
                                    style={{ height: `${h}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                {/* Recent Activity Feed */}
                <div className="bg-slate-900/50 border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-black mb-6">Recent Activity</h3>
                    <div className="space-y-5 md:space-y-6">
                        <ActivityItem
                            label="Agent 'Astra' Deployed"
                            time="2 mins ago"
                            status="Success"
                        />
                        <ActivityItem
                            label="API Key Generated"
                            time="45 mins ago"
                            status="Security"
                        />
                        <ActivityItem
                            label="New Knowledge Uploaded"
                            time="3 hours ago"
                            status="Data"
                        />
                        <ActivityItem
                            label="Billing Cycle Updated"
                            time="5 hours ago"
                            status="Finance"
                        />
                    </div>
                    <button className="w-full mt-6 md:mt-8 py-3 rounded-xl border border-white/5 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-white/5 hover:text-white transition-all active:scale-95">
                        View All Logs
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- HELPER COMPONENTS ---

const StatCard = ({ title, value, change, icon }) => (
    <div className="bg-slate-900/50 border border-white/5 p-5 md:p-6 rounded-3xl md:rounded-4xl hover:border-purple-500/30 transition-all group">
        <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 md:p-3 bg-slate-950 rounded-2xl border border-white/5 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <span className={`text-[9px] md:text-[10px] font-black px-2 py-1 rounded-lg ${change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'
                }`}>
                {change}
            </span>
        </div>
        <h4 className="text-slate-500 text-[10px] md:text-xs font-black uppercase tracking-widest leading-none">{title}</h4>
        <p className="text-2xl md:text-3xl font-black text-white mt-1 tracking-tighter leading-none">{value}
        </p>
    </div>
);


const ActivityItem = ({ label, time, status }) => (
    <div className="flex items-start gap-3 md:gap-4 group cursor-pointer">
        <div className="mt-1.5 shrink-0">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
        </div>
        <div className="flex-1 border-b border-white/5 pb-4 group-last:border-0 min-w-0">
            <p className="text-xs md:text-sm font-bold text-slate-200 group-hover:text-purple-400 transition-colors truncate">{label}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <span className="flex items-center gap-1 text-[9px] md:text-[10px] text-slate-500 font-bold uppercase tracking-wide">
                    <Clock size={10} /> {time}
                </span>
                <span className="text-[9px] md:text-[10px] text-purple-500/50 font-black uppercase tracking-widest">[{status}]</span>
            </div>
        </div>
        <ArrowUpRight size={14} className="text-slate-700 group-hover:text-white transition-colors shrink-0 mt-1" />
    </div>
);

export default Overview;