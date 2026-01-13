import React, { useState, useEffect } from 'react';
import './Student.css';
import { useNavigate } from 'react-router-dom';

const Student = () => {
    const [activeSection, setActiveSection] = useState('dashboard');
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-text-main h-screen overflow-hidden flex">
            {/* Global Sidebar Navigation */}
            <aside className="w-72 bg-surface h-full flex flex-col border-r border-border-color shrink-0 z-50 transition-all duration-300">
                <div className="p-6 flex items-center gap-3">
                    <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <span className={`material-symbols-outlined filled`}>school</span>
                    </div>
                    <div>
                        <h1 className="text-text-main text-lg font-bold leading-tight">EduPortal</h1>
                        <p className="text-text-secondary text-xs font-medium">Student Panel</p>
                    </div>
                </div>
                
                <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto no-scrollbar" id="main-nav">
                    {/* Dashboard Link */}
                    <button onClick={() => setActiveSection('dashboard')} className={`nav-link flex items-center gap-4 px-4 py-3.5 rounded-full transition-all group ${activeSection === 'dashboard' ? 'bg-primary text-white shadow-soft' : 'text-text-secondary hover:bg-background-light hover:text-primary'}`}>
                        <span className={`material-symbols-outlined text-[22px] ${activeSection === 'dashboard' ? 'filled' : 'group-hover:scale-110 transition-transform'}`}>dashboard</span>
                        <span className="text-sm font-semibold tracking-wide">Dashboard</span>
                    </button>
                    
                    {/* Timetable/Lectures Link */}
                    <button onClick={() => setActiveSection('timetable')} className={`nav-link flex items-center gap-4 px-4 py-3.5 rounded-full transition-all group ${activeSection === 'timetable' ? 'bg-primary text-white shadow-soft' : 'text-text-secondary hover:bg-background-light hover:text-primary'}`}>
                        <span className={`material-symbols-outlined text-[22px] ${activeSection === 'timetable' ? 'filled' : 'group-hover:scale-110 transition-transform'}`}>calendar_today</span>
                        <span className="text-sm font-medium tracking-wide">Timetable</span>
                    </button>

                    {/* Attendance Link */}
                    <button onClick={() => setActiveSection('attendance')} className={`nav-link flex items-center gap-4 px-4 py-3.5 rounded-full transition-all group ${activeSection === 'attendance' ? 'bg-primary text-white shadow-soft' : 'text-text-secondary hover:bg-background-light hover:text-primary'}`}>
                        <span className={`material-symbols-outlined text-[22px] ${activeSection === 'attendance' ? 'filled' : 'group-hover:scale-110 transition-transform'}`}>analytics</span>
                        <span className="text-sm font-medium tracking-wide">Attendance</span>
                    </button>
                    
                    {/* Inbox Link */}
                    <button onClick={() => setActiveSection('inbox')} className={`nav-link flex items-center gap-4 px-4 py-3.5 rounded-full transition-all group ${activeSection === 'inbox' ? 'bg-primary text-white shadow-soft' : 'text-text-secondary hover:bg-background-light hover:text-primary'}`}>
                        <span className={`material-symbols-outlined text-[22px] ${activeSection === 'inbox' ? 'filled' : 'group-hover:scale-110 transition-transform'}`}>inbox</span>
                        <div className="flex flex-1 justify-between items-center">
                            <span className="text-sm font-medium tracking-wide">Inbox</span>
                            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                        </div>
                    </button>
                    
                    {/* Profile Link */}
                    <button onClick={() => setActiveSection('profile')} className={`nav-link flex items-center gap-4 px-4 py-3.5 rounded-full transition-all group ${activeSection === 'profile' ? 'bg-primary text-white shadow-soft' : 'text-text-secondary hover:bg-background-light hover:text-primary'}`}>
                        <span className={`material-symbols-outlined text-[22px] ${activeSection === 'profile' ? 'filled' : 'group-hover:scale-110 transition-transform'}`}>person</span>
                        <span className="text-sm font-medium tracking-wide">Profile</span>
                    </button>
                </nav>
                
                <div className="p-6 border-t border-border-color">
                    <button onClick={handleLogout} className="flex w-full items-center justify-center gap-2 rounded-full h-11 bg-red-50 text-red-600 hover:bg-red-100 text-sm font-bold transition-colors">
                        <span className="material-symbols-outlined text-[20px]">logout</span>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content Container */}
            <main className="flex-1 h-full overflow-hidden relative">
                
                {/* SECTION: DASHBOARD */}
                {activeSection === 'dashboard' && (
                <div className="portal-section active h-full overflow-y-auto">
                    <header className="h-20 px-8 flex items-center justify-between bg-background-light/80 backdrop-blur-sm sticky top-0 z-20">
                        <div className="flex items-center gap-2 text-text-secondary text-sm font-medium">
                            <span>Home</span>
                            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            <span className="text-text-main font-bold">Dashboard</span>
                        </div>
                        <div className="flex items-center gap-5">
                            <button className="hidden md:flex h-10 px-5 items-center gap-2 bg-primary text-white text-sm font-bold rounded-full shadow-lg shadow-primary/20 hover:bg-primary-hover transition-colors">
                                <span className="material-symbols-outlined text-[20px]">add</span> New Request
                            </button>
                            <button className="size-10 flex items-center justify-center rounded-full bg-white border border-border-color text-text-main relative">
                                <span className="material-symbols-outlined text-[22px]">notifications</span>
                                <span className="absolute top-2 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                            <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-bold text-text-main leading-tight">Alex Morgan</p>
                                    <p className="text-xs text-text-secondary">Class 12-B</p>
                                </div>
                                <div className="size-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvF8qh9KB-89fJnFyX1MYsJCLgR4bioO2omM-VIFQxFupCdGXLiOSpd2shYr_17jNVz-RLujq-iMWctGcBi1mVSYOre0XvquSDbdapMGt8racR-8FjFzzUnZDqeNbe4tcK5eFKJ1Q3O-4ckGy_hrJuyYYG7EIJZk0JrBHaMZwRzrsTiEeFhi6rK9VpdGDQyDllJEU_taJeb9M9Gd__4HY6qnol-ROKy6ay1lksY7qMSqdD_IF4aVNQ0tTgSzEvvoqZK_pKCi55qg')"}}></div>
                            </div>
                        </div>
                    </header>

                    <div className="p-8 pt-2 max-w-[1200px] mx-auto flex flex-col gap-8">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl font-bold text-text-main tracking-tight">Good Morning, Alex! 👋</h2>
                            <p className="text-text-secondary">Here's what's happening with your academic schedule today.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-surface p-5 rounded-xl border border-border-color shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+2%</span>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-sm font-medium">Total Attendance</p>
                                    <p className="text-2xl font-bold text-text-main mt-1">85%</p>
                                </div>
                            </div>
                            <div className="bg-surface p-5 rounded-xl border border-border-color shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="size-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                                        <span className="material-symbols-outlined">assignment</span>
                                    </div>
                                    <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-full">Urgent</span>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-sm font-medium">Pending Assignments</p>
                                    <p className="text-2xl font-bold text-text-main mt-1">2 Pending</p>
                                </div>
                            </div>
                            <div className="bg-surface p-5 rounded-xl border border-border-color shadow-sm flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                    <div className="size-10 rounded-full bg-blue-50 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">pending_actions</span>
                                    </div>
                                    <span className="bg-blue-100 text-primary text-xs font-bold px-2 py-1 rounded-full">1 Active</span>
                                </div>
                                <div>
                                    <p className="text-text-secondary text-sm font-medium">Leave Requests</p>
                                    <p className="text-2xl font-bold text-text-main mt-1">Sick Leave</p>
                                </div>
                            </div>
                            <div className="bg-surface p-5 rounded-xl border border-border-color shadow-sm flex flex-col gap-4 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/5 to-transparent"></div>
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="size-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                        <span className="material-symbols-outlined">schedule</span>
                                    </div>
                                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full">10:00 AM</span>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-text-secondary text-sm font-medium">Next Class</p>
                                    <p className="text-2xl font-bold text-text-main mt-1 truncate">Mathematics 101</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 bg-surface p-6 rounded-2xl border border-border-color shadow-sm">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-text-main">Attendance Trends</h3>
                                        <p className="text-text-secondary text-sm">Weekly participation overview</p>
                                    </div>
                                </div>
                                <div className="w-full h-64 relative">
                                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 300">
                                        <path d="M0,200 C100,200 100,100 200,100 C300,100 300,180 400,180 C500,180 500,50 600,50 C700,50 700,150 800,150 L800,300 L0,300 Z" fill="rgba(19, 91, 236, 0.1)"></path>
                                        <path d="M0,200 C100,200 100,100 200,100 C300,100 300,180 400,180 C500,180 500,50 600,50 C700,50 700,150 800,150" fill="none" stroke="#135bec" strokeWidth="3"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="bg-surface p-6 rounded-2xl border border-border-color shadow-sm">
                                <h3 className="text-lg font-bold text-text-main mb-6">Today's Schedule</h3>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-background-light border border-transparent">
                                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-lg border border-border-color">
                                            <span className="text-[10px] text-text-secondary font-bold uppercase">AM</span>
                                            <span className="text-sm font-bold text-text-main">09:00</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-text-main">Physics - Mechanics</p>
                                            <p className="text-xs text-text-secondary">Room 302 • Dr. Watson</p>
                                        </div>
                                        <div className="size-2 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-white shadow-md border border-primary/20">
                                        <div className="flex flex-col items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                                            <span className="text-[10px] text-primary font-bold uppercase">AM</span>
                                            <span className="text-sm font-bold text-primary">10:00</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-bold text-text-main">Mathematics 101</p>
                                            <p className="text-xs text-text-secondary">Room 105 • Prof. Alan</p>
                                        </div>
                                        <span className="material-symbols-outlined text-primary text-lg animate-pulse">play_circle</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-6 rounded-2xl border border-border-color shadow-sm mb-6">
                            <h3 className="text-lg font-bold text-text-main mb-4">Notice Board</h3>
                            <div className="divide-y divide-border-color">
                                <div className="py-4 flex gap-4 items-start group cursor-pointer">
                                    <div className="bg-red-100 text-red-600 rounded-full p-2">
                                        <span className="material-symbols-outlined text-[20px]">priority_high</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-text-main font-bold group-hover:text-primary transition-colors">Semester Exam Schedule Released</p>
                                        <p className="text-text-secondary text-sm mt-1">The final datesheet for the Spring 2024 semester exams has been uploaded.</p>
                                    </div>
                                    <span className="text-xs text-text-secondary font-medium">2 hrs ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/* SECTION: TIMETABLE */}
                {activeSection === 'timetable' && (
                <div className="portal-section active h-full overflow-y-auto bg-[#f8f9fc]">
                    <header className="flex items-center justify-between h-16 px-8 border-b border-[#e7ebf3] bg-white sticky top-0 z-10">
                        <div className="flex items-center text-sm font-medium text-[#4c669a]">
                            <span>Student Panel</span>
                            <span className="material-symbols-outlined mx-2 text-base">chevron_right</span>
                            <span className="text-[#0d121b]">Today's Schedule</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <button className="size-10 flex items-center justify-center rounded-full hover:bg-[#f0f2f5] text-[#4c669a] relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white"></span>
                            </button>
                        </div>
                    </header>

                    <div className="p-8 max-w-4xl mx-auto space-y-8">
                        <div>
                            <h1 className="text-3xl font-extrabold text-[#0d121b] tracking-tight mb-1">Good Morning, Alex!</h1>
                            <p className="text-[#4c669a] text-lg font-normal flex items-center gap-2">
                                <span className="material-symbols-outlined text-xl">calendar_today</span> Wednesday, Oct 25th
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-[#e7ebf3] z-0 hidden md:block"></div>
                            <div className="space-y-6">
                                {/* COMPLETED */}
                                <div className="relative flex flex-col md:flex-row gap-6 opacity-70">
                                    <div className="hidden md:flex flex-col items-center mt-1 z-10">
                                        <div className="size-10 rounded-full bg-[#f0f2f5] border-2 border-[#e7ebf3] flex items-center justify-center text-[#9ca3af]">
                                            <span className="material-symbols-outlined text-xl">check</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white rounded-xl p-5 border border-[#e7ebf3] shadow-sm">
                                        <div className="flex items-center justify-between mb-4 border-b pb-3">
                                            <div className="flex items-center gap-2 text-[#4c669a]">
                                                <span className="material-symbols-outlined text-lg">schedule</span>
                                                <span className="text-sm font-medium">09:00 AM - 10:00 AM</span>
                                            </div>
                                            <span className="bg-[#f0f2f5] text-[#4c669a] text-xs font-bold px-2 py-0.5 rounded">COMPLETED</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#0d121b]">Mathematics</h3>
                                        <p className="text-sm text-[#4c669a] mt-2">Prof. Alan Smith • Room 302</p>
                                    </div>
                                </div>
                                {/* ACTIVE */}
                                <div className="relative flex flex-col md:flex-row gap-6">
                                    <div className="hidden md:flex flex-col items-center mt-1 z-10">
                                        <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center shadow-[0_0_0_4px_rgba(19,91,236,0.2)]">
                                            <span className="material-symbols-outlined text-xl animate-pulse">play_arrow</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 bg-white rounded-xl p-5 border-l-4 border-l-primary border-y border-r border-r-[#e7ebf3] border-y-[#e7ebf3] shadow-md">
                                        <div className="flex items-center justify-between mb-4 border-b pb-3">
                                            <div className="flex items-center gap-2 text-primary">
                                                <span className="material-symbols-outlined text-lg fill-1">schedule</span>
                                                <span className="text-base font-bold">10:00 AM - 11:00 AM</span>
                                            </div>
                                            <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded animate-pulse">NOW</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0d121b]">Physics</h3>
                                        <p className="text-sm text-[#4c669a]">Thermodynamics & Heat Transfer</p>
                                        <div className="flex gap-4 mt-4">
                                            <span className="bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10 text-sm font-medium flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-lg">person</span> Dr. Sarah Jones
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/* SECTION: ATTENDANCE */}
                {activeSection === 'attendance' && (
                <div className="portal-section active h-full overflow-y-auto bg-background-light">
                     <header className="flex items-center justify-between border-b border-[#e7ebf3] bg-white px-8 py-4 sticky top-0 z-10">
                        <div className="flex items-center gap-4">
                            <div className="size-8 flex items-center justify-center rounded bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">analytics</span>
                            </div>
                            <h2 className="text-lg font-bold">Attendance Record</h2>
                        </div>
                    </header>

                    <main className="p-8 max-w-[1200px] mx-auto flex flex-col gap-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            {/* Calendar View */}
                            <div className="lg:col-span-8 bg-white rounded-xl border border-[#e7ebf3] shadow-sm overflow-hidden">
                                <div className="flex items-center justify-between p-6 border-b">
                                    <h3 className="text-xl font-bold text-[#0d121b]">September 2023</h3>
                                    <div className="flex gap-2">
                                        <button className="size-9 rounded-lg border flex items-center justify-center"><span className="material-symbols-outlined">chevron_left</span></button>
                                        <button className="size-9 rounded-lg border flex items-center justify-center"><span className="material-symbols-outlined">chevron_right</span></button>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-7 gap-4">
                                        {/* Weekdays */}
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Mon</div>
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Tue</div>
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Wed</div>
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Thu</div>
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Fri</div>
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Sat</div>
                                        <div className="text-center text-xs font-bold text-[#4c669a] uppercase">Sun</div>
                                        {/* Mock Days */}
                                        <div className="aspect-square rounded-lg bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center"><span className="font-bold">1</span><span className="size-1 rounded-full bg-emerald-500 mt-1"></span></div>
                                        <div className="aspect-square rounded-lg bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center"><span class="font-bold">2</span><span class="size-1 rounded-full bg-emerald-500 mt-1"></span></div>
                                        <div className="aspect-square rounded-lg bg-rose-50 border border-rose-100 flex flex-col items-center justify-center"><span className="font-bold text-rose-900">3</span><span className="size-1 rounded-full bg-rose-500 mt-1"></span></div>
                                        <div className="aspect-square rounded-lg bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center"><span className="font-bold">4</span><span className="size-1 rounded-full bg-emerald-500 mt-1"></span></div>
                                        <div className="aspect-square rounded-lg bg-emerald-50 border border-emerald-100 flex flex-col items-center justify-center"><span className="font-bold">5</span><span className="size-1 rounded-full bg-emerald-500 mt-1"></span></div>
                                        <div className="aspect-square rounded-lg bg-gray-50 flex items-center justify-center"><span className="text-gray-400">6</span></div>
                                        <div className="aspect-square rounded-lg bg-gray-50 flex items-center justify-center"><span className="text-gray-400">7</span></div>
                                    </div>
                                </div>
                            </div>
                            {/* Stats Column */}
                            <div className="lg:col-span-4 flex flex-col gap-6">
                                <div className="bg-white rounded-xl border border-[#e7ebf3] p-6 text-center shadow-sm">
                                    <h3 className="text-lg font-bold mb-6 text-left">Overview</h3>
                                    <div className="relative size-40 mx-auto mb-6">
                                        <svg className="size-full -rotate-90" viewBox="0 0 100 100">
                                            <circle className="text-[#f1f3f7] stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeWidth="8"></circle>
                                            <circle className="text-primary stroke-current" cx="50" cy="50" fill="transparent" r="40" strokeDasharray="251.2" strokeDashoffset="30" strokeLinecap="round" strokeWidth="8"></circle>
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-3xl font-bold">88%</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs font-medium text-[#4c669a]">Attended</p><p className="text-xl font-bold">40</p></div>
                                        <div className="bg-rose-50 p-3 rounded-lg"><p class="text-xs font-medium text-rose-700">Absent</p><p className="text-xl font-bold text-rose-700">4</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
                )}

                {/* SECTION: INBOX */}
                {activeSection === 'inbox' && (
                <div className="portal-section active h-full overflow-hidden bg-background-light">
                    <header className="flex items-center justify-between border-b border-[#e7ebf3] bg-white px-8 py-4 sticky top-0 z-10">
                        <div className="flex items-center gap-4 text-[#0d121b]">
                            <div className="size-6 text-primary"><span className="material-symbols-outlined filled">mail</span></div>
                            <h2 className="text-lg font-bold">Announcements & Inbox</h2>
                        </div>
                        <div className="flex flex-1 justify-end gap-4 items-center">
                            <div className="flex bg-[#f0f2f5] rounded-lg h-10 px-3 items-center w-64">
                                <span className="material-symbols-outlined text-[20px] text-[#4c669a]">search</span>
                                <input className="bg-transparent border-none focus:ring-0 text-sm w-full" placeholder="Search messages..."/>
                            </div>
                            <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 relative">
                                <span className="material-symbols-outlined">notifications</span>
                                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                            </button>
                        </div>
                    </header>

                    <div className="p-8 max-w-5xl mx-auto h-[calc(100vh-72px)] overflow-y-auto">
                        <div className="rounded-xl border border-[#cfd7e7] bg-white shadow-sm overflow-hidden">
                            <div className="flex items-center justify-between p-5 border-b bg-gray-50/50">
                                <div>
                                    <p className="text-base font-bold">Inbox Controls</p>
                                    <p className="text-[#4c669a] text-sm">Manage your unread messages</p>
                                </div>
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium">Mark all as read</button>
                            </div>
                            <div className="flex flex-col divide-y">
                                {/* Message Item */}
                                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-primary">
                                    <div className="size-12 rounded-full bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBabu1WNgr2PjTHqTZwdQUY37nZvaYvexFVlwAOY4td06qmQ1N_GKPLgATAUqjYyI4kWNNVAFMBfeUrFHsNDmHDP1Y8bhlDWPr2Mco2GX6EtqpzYyGLGUDcTmodf2xhQuTvonPqQAePdPkrKbU5VDBJ9iFbQPFG8ce2tf52ppNmfoGf8yd4L-7JODCo_iuxi1c_dOGZhzoigJrMvPb_qj3vBimx9G3P9mI8zst4Lc7NB4FIscGLcw78-iFu1KiNyn_6IP_k3yk49g')"}}></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-bold">Prof. Smith <span className="text-[#4c669a] font-normal text-xs ml-2 hidden sm:inline">• CS Dept</span></p>
                                            <p className="text-primary text-xs font-bold">10:30 AM</p>
                                        </div>
                                        <p className="text-sm font-semibold truncate">Mid-term Schedule Changed</p>
                                        <p className="text-[#4c669a] text-sm truncate">Please note that the exam has moved to Room 304 due to maintenance...</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer">
                                    <div className="size-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600"><span className="material-symbols-outlined filled">warning</span></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-bold">System Alert</p>
                                            <p className="text-primary text-xs font-bold">09:15 AM</p>
                                        </div>
                                        <p className="text-sm font-semibold">Library Maintenance</p>
                                        <p className="text-[#4c669a] text-sm truncate">The digital library services will be unavailable this Saturday...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/* SECTION: PROFILE */}
                {activeSection === 'profile' && (
                <div className="portal-section active h-full overflow-y-auto bg-background-light">
                     <header className="flex items-center justify-between border-b border-[#e7ebf3] bg-white px-8 py-4 sticky top-0 z-10">
                        <div>
                            <h2 className="text-xl font-bold">Academic Information</h2>
                            <p className="text-sm text-slate-500">View your personal and academic details</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3 pl-4 border-l">
                                <div className="text-right"><p className="text-sm font-semibold">Alex Johnson</p><p className="text-xs text-slate-500">B.Tech CS</p></div>
                                <div className="size-10 rounded-full bg-cover border-2 border-white shadow-sm" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrF_krPaxpV31dPbgirhKi4UIzUTLW8NacS1t6dmyRyEx-FytL87lR-dLwJnOhc8wWj69ZADcPlnKETIeV3U0aJux-4sapwf2tTHeyzNQiYCFqy0k_2T51b-0r35GmWW2k7HqIWYJJuQ7miA8QV0lDAeVI130M-ueeiVaW5G-YA2T4g7UnR3pXxf6YuFuYkyAL1j1iWHYjrZ2HfypU8ILKQUhYRQM98uIBhhCsiST3pNIk7gIywedeu4-X7WsaNwVEPrGUa9p9TA')"}}></div>
                            </div>
                        </div>
                    </header>

                    <div className="p-8 max-w-7xl mx-auto flex flex-col gap-6">
                        <div className="bg-white rounded-xl shadow-sm border border-[#e7ebf3] overflow-hidden">
                            <div className="h-32 bg-gradient-to-r from-primary to-blue-400 relative"></div>
                            <div className="px-8 pb-8">
                                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
                                    <div className="flex flex-col items-center lg:items-start -mt-16 lg:w-1/3 shrink-0">
                                        <div className="size-32 rounded-full border-4 border-white shadow-lg bg-cover bg-center mb-4" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUrSUMlB9sXZdztjZs1kHOlRYuF131xMY_Z5G15M7ocTeB2iMedChXe-PzXZLOPcBhD3uqPWJySJ_-QFh7qVdEy1Oo8xFyZ2B5zyUZzJer4A_1_5Lw_HrNSzzWXKr1Mt867YQd9KBg-jd0ZXs5MAif6HvuWxc8bsC-0VkPH2cTOQGsA5ooxejbBkmLxTgG-G9OvmWzbTeVQLvcvcmgSeYd7kEzyEEKN5M7JiVlN9YM2x7P8mregYzZQKyS33vlxjmrj0wJaAeXCg')"}}></div>
                                        <h2 className="text-2xl font-bold">Alex Johnson</h2>
                                        <p className="text-slate-500 font-medium">alex.johnson@university.edu</p>
                                        <div className="w-full space-y-3 mt-6">
                                            <button className="w-full bg-primary text-white py-2.5 rounded-lg font-medium">Download ID Card</button>
                                            <button className="w-full bg-slate-50 border border-slate-200 py-2.5 rounded-lg font-medium">Request Update</button>
                                        </div>
                                    </div>
                                    <div className="flex-1 pt-4 lg:pt-12">
                                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2"><span className="material-symbols-outlined text-primary">school</span> Academic Details</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div><p className="text-sm font-medium text-slate-500 mb-1">Enrollment Number</p><p className="text-base font-semibold">E202100459</p></div>
                                            <div><p className="text-sm font-medium text-slate-500 mb-1">Roll Number</p><p className="text-base font-semibold">CS-45</p></div>
                                            <div><p className="text-sm font-medium text-slate-500 mb-1">Course / Degree</p><p className="text-base font-semibold">B.Tech (Computer Science)</p></div>
                                            <div><p className="text-sm font-medium text-slate-500 mb-1">Department</p><p className="text-base font-semibold">School of Engineering</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

            </main>
        </div>
    );
};

export default Student;
