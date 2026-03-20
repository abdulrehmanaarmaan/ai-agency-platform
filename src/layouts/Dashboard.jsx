import { BarChart3, Bell, ChevronLeft, Cpu, LayoutDashboard, LogOut, Search, Settings, Sparkles, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router';

const Dashboard = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const menuItems = [
        { name: 'Overview', icon: <LayoutDashboard size={20} />, href: '/dashboard/overview' },
        { name: 'AI Agents', icon: <Cpu size={20} />, href: '/dashboard/agents' },
        { name: 'Analytics', icon: <BarChart3 size={20} />, href: '/dashboard/analytics' },
        { name: 'Team', icon: <Users size={20} />, href: '/dashboard/team' },
        { name: 'Settings', icon: <Settings size={20} />, href: '/dashboard/settings' },
    ];

    return (
        <div className="flex min-h-screen bg-slate-950 text-slate-200">

            {/* 1. SIDEBAR */}
            <aside
                className={`${isSidebarOpen ? 'w-64' : 'w-20'
                    } fixed left-0 top-0 h-full bg-slate-900/50 backdrop-blur-xl border-r border-white/5 transition-all duration-300 z-50`}
            >
                <div className="flex flex-col h-full p-4">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3 px-2 mb-10 mt-2">
                        <div className="bg-purple-600 p-1.5 rounded-lg shrink-0">
                            <Sparkles className="text-white" size={20} />
                        </div>
                        {isSidebarOpen && (
                            <span className="text-xl font-black text-white tracking-tighter animate-in fade-in duration-500">
                                Nubien
                            </span>
                        )}
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 px-3 py-3 rounded-xl transition-all group ${isActive
                                        ? 'bg-purple-600/20 text-purple-400 border border-purple-600/20'
                                        : 'hover:bg-white/5 text-slate-400 hover:text-purple-400'
                                    }`
                                }
                            >
                                {item.icon}
                                {isSidebarOpen && <span>{item.name}</span>}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Bottom Actions */}
                    <div className="pt-4 border-t border-white/5 space-y-2">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="w-full flex items-center gap-4 px-3 py-3 rounded-xl hover:bg-white/5 transition-all text-slate-500 hover:text-white"
                        >
                            <ChevronLeft className={`transition-transform duration-500 ${!isSidebarOpen && 'rotate-180'}`} size={20} />
                            {isSidebarOpen && <span className="text-sm font-bold">Collapse</span>}
                        </button>
                    </div>
                </div>
            </aside>

            {/* 2. MAIN CONTENT AREA */}
            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'}`}>

                {/* Top Header */}
                <header className="h-20 border-b border-white/5 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
                    <div className="relative w-96 hidden md:block">
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full border-2 border-slate-950"></span>
                        </button>
                        <div className="h-10 w-10 rounded-full bg-to-tr from-purple-600 to-blue-600 border border-white/20 cursor-pointer"></div>
                    </div>
                </header>

                {/* Page Content */}
                <div className="relative p-8">
                    {/* Subtle Background Glows to match landing page */}
                    <div className="absolute top-0 right-0 w-100 h-100 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;