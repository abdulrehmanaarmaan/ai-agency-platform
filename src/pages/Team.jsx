import { Fingerprint, Mail, MoreHorizontal, ShieldAlert, ShieldCheck, UserPlus, Users } from 'lucide-react';
import React from 'react';

const Team = () => {

    const team = [
        {
            id: 1, name: 'Abdul Rehman Aarmaan', role: 'Owner', email: 'ar.aarmaan@agency.ai', status:
                'Online', avatar: 'AR'
        },
        {
            id: 2, name: 'Sarah Chen', role: 'AI Engineer', email: 's.chen@agency.ai', status: 'Offline',
            avatar: 'SC'
        },
        {
            id: 3, name: 'Marcus Thorne', role: 'Prompt Designer', email: 'm.thorne@agency.ai', status:
                'Online', avatar: 'MT'
        },
        {
            id: 4, name: 'Elena Rodriguez', role: 'Viewer', email: 'e.rod@client.com', status: 'Online',
            avatar: 'ER'
        },
    ];

    return (
        <div className="mx-auto space-y-6 md:space-y-10 animate-in fade-in duration-700 px-2 pb-10">
            {/* 1. HEADER & ACTIONS - Vertical stack on Mobile, Row on Desktop */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white leading-none">Neural Team</h1>
                    <p className="text-slate-500 text-sm font-medium">Manage collaborators and model access
                        permissions.</p>
                </div>
                <div className="grid grid-cols-2 md:flex gap-3">
                    <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest px-4 py-4 rounded-2xl transition-all active:scale-95">
                        <ShieldCheck size={16} className="text-purple-400" />
                        <span>Roles</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-[10px] font-black uppercase tracking-widest px-4 py-4 rounded-2xl transition-all shadow-[0_0_30px_rgba(147,51,234,0.2)] active:scale-95">
                        <UserPlus size={16} />
                        <span>Invite</span>
                    </button>
                </div>
            </div>
            {/* 2. SUMMARY STATS - 1 col on Mobile, 3 on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SummaryCard icon={<Users size={20} />} label="Total Members" value={team.length}
                    color="text-purple-400" bgColor="bg-purple-500/10" />
                <SummaryCard icon={<Fingerprint size={20} />} label="Security" value="100%"
                    color="text-emerald-400" bgColor="bg-emerald-500/10" />
                <SummaryCard icon={<ShieldAlert size={20} />} label="Pending" value="0"
                    color="text-blue-400" bgColor="bg-blue-500/10" />
            </div>
            {/* 3. MAIN CONTENT CONTAINER */}
            <div className="bg-slate-900/40 border border-white/5 rounded-[2rem] overflow-hidden backdrop-blur-md">
                <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center">
                    <h3 className="text-base md:text-lg font-black text-white uppercase tracking-widest text-[10px] md:text-sm">Collaborators</h3>
                    <div className="flex items-center gap-2 text-emerald-500 text-[10px] font-black uppercase px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        3 Online
                    </div>
                </div>
                {/* --- MOBILE VIEW: Card List (Hidden on Desktop) --- */}
                <div className="md:hidden divide-y divide-white/5">
                    {team.map(member =>
                        <div key={member.id} className="p-5 space-y-4 hover:bg-white/[0.02] transition-colors">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-sm font-black text-white shadow-xl">
                                        {member.avatar}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-black text-white truncate">{member.name}</p>
                                        <p className="text-[11px] text-slate-500 truncate">{member.email}</p>
                                    </div>
                                </div>
                                <button className="p-2 text-slate-500 hover:text-white transition-colors">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between pt-2">
                                <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg border ${member.role === 'Owner' ? 'border-purple-500/30 bg-purple-500 /10 text-purple-400' : 'border-white/10 bg-white/5text-slate-400'
                                    }`}>
                                    {member.role}
                                </span>
                                <div className="flex items-center gap-2 bg-slate-950/50 px-3 py-1.5 rounded-full border border-white/5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${member.status === 'Online' ?
                                        'bg-emerald-500' : 'bg-slate-700'}`} />
                                    <span className="text-[10px] font-black uppercase text-slate-400">
                                        {member.status}</span>
                                </div>
                            </div>
                        </div>)}
                </div>
                {/* --- DESKTOP VIEW: Table (Hidden on Mobile) --- */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 border-b border-white/5">
                                <th className="px-8 py-6">Member</th>
                                <th className="px-8 py-6">Access Role</th>
                                <th className="px-8 py-6">Status</th>
                                <th className="px-8 py-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {team.map(member =>
                                <tr key={member.id} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="h-10 w-10 flex-shrink-0 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-black text-white shadow-lg">
                                                {member.avatar}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-black text-white tracking-tight">
                                                    {member.name}</p>
                                                <p className="text-[11px] text-slate-500 font-medium">
                                                    {member.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border inline-block ${member.role ===
                                            'Owner' ? 'border-purple-500/30 bg-purple-500/10 text-purple-400' :
                                            'border-white/10 bg-white/5 text-slate-400'
                                            }`}>
                                            {member.role}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${member.status ===
                                                'Online' ? 'bg-emerald-500' : 'bg-slate-700'}`} />
                                            <span className="text-xs font-bold text-slate-400">{member.
                                                status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"><Mail size={16} /></button>
                                            <button className="p-2 hover:bg-white/10 rounded-lg text-slate-400 transition-colors"><MoreHorizontal size={16} /></button>
                                        </div>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

// --- HELPER COMPONENTS ---

const SummaryCard = ({ icon, label, value, color, bgColor }) => (
    <div className="bg-slate-900/50 border border-white/5 p-6 rounded-[2rem] flex items-center gap-5 transition-all hover:border-white/10">
        <div className={`p-4 rounded-2xl ${color} ${bgColor} flex-shrink-0`}>
            {icon}
        </div>
        <div className="min-w-0">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1 truncate">{label}</p>
            <p className="text-2xl font-black text-white leading-none">{value}</p>
        </div>
    </div>
);

export default Team;