import { Bell, ChevronRight, Copy, Eye, Key, Lock, RefreshCw, Shield, User } from 'lucide-react';
import React from 'react';

const Settings = () => {
    return (
        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12 animate-in fade-in duration-700 px-1">
            {/* 1. HEADER */}
            <div>
                <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white">System Settings</h1>
                <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Configure your neural
                    identity and security parameters.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* SIDE NAVIGATION - Horizontal scroll on mobile, Vertical on Desktop */}
                <aside className="lg:col-span-1 flex lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-1 px-1 lg:mx-0">
                    <SettingsNav icon={<User size={18} />} label="Profile" active />
                    <SettingsNav icon={<Lock size={18} />} label="Security" />
                    <SettingsNav icon={<Key size={18} />} label="API Keys" />
                    <SettingsNav icon={<Bell size={18} />} label="Notifications" />
                    <SettingsNav icon={<Shield size={18} />} label="Billing" />
                </aside>
                {/* MAIN SETTINGS CONTENT */}
                <div className="lg:col-span-3 space-y-10 md:space-y-12">
                    {/* PROFILE SECTION */}
                    <section className="space-y-6">
                        <h3 className="text-lg font-black text-white border-b border-white/5 pb-4 flex items-center gap-2">
                            <div className="w-1 h-4 bg-purple-500 rounded-full" />
                            Profile Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    defaultValue="Abdul Rehman Aarmaan"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4py-3.5 text-sm text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all placeholder:text-slate-700"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Professional Email</label>
                                <input
                                    type="email"
                                    defaultValue="ar.aarmaan@agency.ai"
                                    className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4py-3.5 text-sm text-white focus:ring-2 focus:ring-purple-500/50 outline-none transition-all"
                                />
                            </div>
                        </div>
                        <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white10 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all active:scale-95">
                            Update Profile
                        </button>
                    </section>
                    {/* API SECURITY SECTION */}
                    <section className="space-y-6">
                        <h3 className="text-lg font-black text-white border-b border-white/5 pb-4 flex items-center gap-2">
                            <div className="w-1 h-4 bg-purple-500 rounded-full" />
                            API Infrastructure
                        </h3>
                        <div className="bg-slate-900/50 border border-white/5 rounded-[1.5rem] md:rounded-3xl p-5 md:p-6 space-y-6">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-sm font-bold text-white leading-none">Production API
                                        Key</p>
                                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">Used to
                                        authenticate your AI agents in external apps.</p>
                                </div>
                                <button className="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl text-slate-400 transition-all flex-shrink-0">
                                    <RefreshCw size={18} />
                                </button>
                            </div>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-slate-950 p-3 md:p-4 rounded-2xl border border-white/5">
                                <code className="flex-1 text-[10px] md:text-xs text-purple-400 font-mono break-all sm:truncate bg-purple-500/5 p-2 sm:p-0 rounded-lg sm:rounded-none">
                                    sk_live_4592_nx29_nubien_neural_key_z01</code>
                                <div className="flex items-center justify-end gap-3 px-2 sm:px-0 border-t border-white/5 sm:border-0 pt-3 sm:pt-0">
                                    <button className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-white transition-colors">
                                        <Copy size={16} />
                                        <span className="sm:hidden">Copy</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors">
                                        <Eye size={16} />
                                        <span className="sm:hidden text-[10px] font-bold">View</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* SECURITY STATUS */}
                    <section className="space-y-6">
                        <h3 className="text-lg font-black text-white border-b border-white/5 pb-4 flex items-center gap-2">
                            <div className="w-1 h-4 bg-purple-500 rounded-full" />
                            Account Security
                        </h3>
                        <div className="flex items-center justify-between p-5 bg-emerald-500/5 border border-emerald-500/20 rounded-3xl gap-4">
                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500 shrink-0">
                                    <Shield size={24} />
                                </div>
                                {/* THE FIXED DIV */}
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-white truncate">Two-Factor
                                        Authentication</p>
                                    <p className="text-[11px] text-emerald-500/70 font-medium mt-1">Your
                                        account is currently protected by 2FA.</p>
                                </div>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 shrink-0">
                                Configure
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div >
    );
};

// --- HELPER COMPONENT ---

const SettingsNav = ({ icon, label, active }) => (
    <button className={`flex items-center justify-between px-5 py-3.5 rounded-xl transition-all group flex-shrink-0 lg:w-full ${active
        ? 'bg-purple-600/10 text-purple-400 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]'
        : 'text-slate-500 hover:bg-white/5 hover:text-white'
        }`}>
        <div className="flex items-center gap-3">
            <span className={active ? 'text-purple-400' : 'text-slate-600 group-hover:text-slate-400'}>{icon}</span>
            <span className="text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap">{label}</span>
        </div>
        <ChevronRight size={14} className={`hidden lg:block ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'}`} />
    </button>
);

export default Settings;