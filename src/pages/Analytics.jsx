import { ArrowDownRight, ArrowUpRight, Download, Layers, Zap } from 'lucide-react';
import React from 'react';

const Analytics = () => {
    return (
        <div className="space-y-6 md:space-y-8 animate-in fade-in duration-700 px-1">
            {/* 1. HEADER & EXPORT */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div>
                    <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white">Neural
                        Analytics</h1>
                    <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Deep-dive performance
                        metrics across your global AI infrastructure.</p>
                </div>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] md:text-xs font-black px-5 py-3.5 rounded-xl transition-all active:scale-95">
                    <Download size={16} />
                    Export Report
                </button>
            </div>
            {/* 2. PERFORMANCE HIGHLIGHTS - 1 col on mobile, 3 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <MetricTile
                    label="Inference Efficiency"
                    value="94.2%"
                    trend="+2.4%"
                    isUp={true}
                    subtext="Avg. across 12 agents"
                />
                <MetricTile
                    label="Token Optimization"
                    value="18.5k"
                    trend="-1.2%"
                    isUp={false}
                    subtext="Savings vs last month"
                />
                <MetricTile
                    label="Global Reach"
                    value="42"
                    trend="+5"
                    isUp={true}
                    subtext="Active regional nodes"
                />
            </div>
            {/* 3. MAIN DATA VISUALIZATION */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Large Scale Performance Graph */}
                <div className="lg:col-span-2 bg-slate-900/50 border border-white/5 rounded-3xl md:rounded-[2.5rem] p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
                        <div>
                            <h3 className="text-lg md:text-xl font-black text-white">Inference Load</h3>
                            <p className="text-slate-500 text-[9px] md:text-xs font-bold uppercase tracking-widest mt-1">Real-time processing power</p>
                        </div>
                        <div className="flex gap-1.5 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
                            {['1H', '24H', '7D', '30D'].map((t) => (
                                <button key={t} className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black transition-all ${t === '24H' ?
                                    'bg-purple-600 text-white' : 'bg-slate-950 text-slate-500 hover:text-white border border-white /5'}`}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Chart Visual Mockup - Adaptive Bar Count */}
                    <div className="relative h-56 md:h-72 w-full flex items-end gap-1">
                        {[30, 45, 35, 60, 55, 80, 75, 90, 85, 100, 95, 80, 70, 85, 90, 60, 50, 65, 70, 40].
                            map((h, i) => (
                                <div key={i} className={`flex-1 flex flex-col justify-end gap-1 group cursor-pointer ${i > 11 ? 'hidden sm:flex' : ''}`}>
                                    <div
                                        className="w-full bg-linear-to-t from-purple-600/10 to-purple-500/40 rounded-t-sm transition-all duration-500 group-hover:to-purple-400 group-hover:from-purple-500/30"
                                        style={{ height: `${h}%` }}
                                    />
                                    <div
                                        className="w-full bg-purple-500 rounded-sm opacity-20 group-hover:opacity-100 transition-opacity"
                                        style={{ height: `${h / 4}px` }}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
                {/* Breakdown Sidebar */}
                <div className="space-y-6 md:space-y-8">
                    <div className="bg-slate-900/50 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8">
                        <h3 className="text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                            <Layers size={16} className="text-purple-500" />
                            Resource Allocation
                        </h3>
                        <div className="space-y-5">
                            <ProgressItem label="NLP Processing" percentage={65} color="bg-purple-500" />
                            <ProgressItem label="Image Synthesis" percentage={20} color="bg-blue-500" />
                            <ProgressItem label="Vector Search" percentage={15} color="bg-emerald-500" />
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_40px_rgba(147,51,234,0.2)]">
                        <Zap className="text-white mb-4" size={24} md:size={28} />
                        <h3 className="text-lg md:text-xl font-black text-white leading-tight">Predictive
                            Scaling is Active.</h3>
                        <p className="text-white/70 text-xs md:text-sm mt-2 font-medium">Your infrastructure
                            is automatically expanding to handle incoming surge.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

// --- HELPER COMPONENTS ---

const MetricTile = ({ label, value, trend, isUp, subtext }) => (
    <div className="bg-slate-900/50 border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden group">
        <div className="relative z-10">
            <p className="text-slate-500 text-[9px] md:text-[10px] font-black uppercase tracking-widest mb-1">{label}</p>
            <div className="flex items-end gap-2 md:gap-3">
                <h4 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                    {value}</h4>
                <span className={`text-[10px] md:text-xs font-bold mb-1 flex items-center gap-0.5 ${isUp ?
                    'text-emerald-500' : 'text-red-500'}`}>
                    {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {trend}
                </span>
            </div>
            <p className="text-slate-600 text-[9px] md:text-[10px] font-bold mt-4 uppercase tracking-tighter leading-none">{subtext}</p>
        </div>
    </div>
);


const ProgressItem = ({ label, percentage, color }) => (
    <div className="space-y-2">
        <div className="flex justify-between items-end">
            <span className="text-[10px] md:text-xs font-bold text-slate-400">{label}</span>
            <span className="text-[10px] md:text-xs font-black text-white">{percentage}%</span>
        </div>
        <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
            <div
                className={`h-full ${color} rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(147,51,234,0.3)]`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    </div>
);

export default Analytics;