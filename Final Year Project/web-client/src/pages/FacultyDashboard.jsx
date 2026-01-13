import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyDashboard.css';

const FacultyDashboard = () => {
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState('dashboard');

    const handleLogout = () => {
        navigate('/login');
    };

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', filled: true },
        { id: 'attendance', label: 'Attendance', icon: 'co_present' },
        { id: 'reports', label: 'Reports', icon: 'bar_chart' },
        { id: 'timetable', label: 'Timetable', icon: 'schedule' },
        { id: 'inbox', label: 'Inbox', icon: 'inbox', badge: 3 },
        { id: 'leave', label: 'Leave Request', icon: 'event_busy' },
        { id: 'profile', label: 'Profile', icon: 'person' },
    ];

    return (
        <div className="faculty-dashboard-wrapper bg-background-light dark:bg-background-dark text-slate-900 antialiased h-screen overflow-hidden flex">
            {/* Global Faculty Sidebar Navigation */}
            <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col flex-shrink-0 z-50">
                <div className="h-20 flex items-center px-6 border-b border-slate-100 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-xl">school</span>
                        </div>
                        <h1 className="text-slate-900 text-lg font-bold tracking-tight">Academia<span className="text-primary">Sys</span></h1>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-4 flex flex-col gap-6" id="faculty-nav">
                    <div className="flex flex-col gap-1">
                        <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
                        
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveSection(item.id)}
                                className={`nav-btn flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                                    activeSection === item.id
                                        ? 'bg-primary text-white shadow-sm shadow-primary/30'
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                                }`}
                            >
                                <span className={`material-symbols-outlined w-6 text-center ${activeSection === item.id || item.filled ? 'filled' : ''}`}>
                                    {item.icon}
                                </span>
                                {item.badge ? (
                                    <div className="flex flex-1 justify-between items-center">
                                        <span className="text-sm font-medium">{item.label}</span>
                                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
                                    </div>
                                ) : (
                                    <span className="text-sm font-medium">{item.label}</span>
                                )}
                            </button>
                        ))}
                    </div>

                    <button 
                        onClick={handleLogout}
                        className="flex items-center gap-4 px-4 py-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-red-500 transition-colors mt-auto mb-4"
                    >
                        <span className="material-symbols-outlined w-6 text-center">logout</span>
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </div>

                <div className="p-4 border-t border-slate-100">
                    <div className="flex items-center gap-3 px-2">
                        <div className="size-10 rounded-full bg-slate-200 bg-center bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRMJNOML_Lth3ba7TBdbJiefUMcOJ4HjzJnQeeJBiA_KcSnK_Otg-lBqDL8bkrzdUs3leM4awwQr93iJkf47I_JHccNhEYIYrMMXFzoavsPYIdfBlHz8kEKCxTpSDMu0Ot1kxhs5N94cHoCN2pnztuh31kEV40K9-tuutKnNNoP1jnMU4bU54dcd83VsAy2YGhpGZAGGN8TS87WCFmPaRUhsa6l3t2C6eutIqJ21tZ-YZCyCQkpT4UdaIT0Uu-mZherrMcET56FQ')" }}></div>
                        <div className="flex flex-col overflow-hidden">
                            <p className="text-sm font-semibold text-slate-900 truncate">Prof. Anderson</p>
                            <p className="text-xs text-slate-500 truncate">Faculty ID: 4920</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Dynamic Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                
                {/* SECTION: DASHBOARD */}
                {activeSection === 'dashboard' && (
                    <div className="h-full overflow-y-auto fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <h2 className="text-slate-900 text-lg font-bold">Faculty Dashboard</h2>
                            <div className="flex items-center gap-6">
                                <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-slate-400 text-xl">search</span>
                                    <input className="bg-transparent border-none text-sm text-slate-700 placeholder-slate-400 focus:ring-0 w-full ml-2 p-0" placeholder="Search students, classes..." type="text"/>
                                </div>
                                <button className="relative text-slate-500 hover:text-primary p-1.5 rounded-lg">
                                    <span className="material-symbols-outlined">notifications</span>
                                    <span className="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border border-white"></span>
                                </button>
                            </div>
                        </header>
                        <div className="p-10 max-w-6xl mx-auto space-y-8">
                            <div className="flex flex-col gap-1">
                                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back, Prof. Anderson</h1>
                                <p className="text-slate-500 font-medium">Monday, October 24, 2023</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-32 relative overflow-hidden group hover:border-primary/50 transition-colors">
                                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-8xl text-primary">school</span>
                                    </div>
                                    <p className="text-slate-500 font-medium z-10">Total Lectures Today</p>
                                    <div className="flex items-end gap-2 z-10">
                                        <span className="text-4xl font-bold text-slate-900">4</span>
                                        <span className="text-sm text-slate-400 mb-1.5">sessions</span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-32 relative overflow-hidden group hover:border-green-500/50 transition-colors">
                                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="material-symbols-outlined text-8xl text-green-600">check_circle</span>
                                    </div>
                                    <p className="text-slate-500 font-medium z-10">Lectures Completed</p>
                                    <div className="flex items-end gap-2 z-10">
                                        <span className="text-4xl font-bold text-slate-900">1</span>
                                        <span className="text-sm text-green-600 font-medium mb-1.5 bg-green-50 px-2 py-0.5 rounded-full">25%</span>
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between h-32 relative overflow-hidden group">
                                    <div className="absolute right-0 top-0 p-4 opacity-10">
                                        <span className="material-symbols-outlined text-8xl text-amber-500">schedule</span>
                                    </div>
                                    <p className="text-slate-500 font-medium z-10">Lectures Remaining</p>
                                    <div className="flex items-end gap-2 z-10">
                                        <span className="text-4xl font-bold text-primary">3</span>
                                        <span className="text-sm text-amber-600 font-medium mb-1.5 bg-amber-50 px-2 py-0.5 rounded-full">Up Next: 11:00 AM</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Time Slot</th>
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject</th>
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="hover:bg-slate-50 transition-colors">
                                            <td className="py-5 px-6 whitespace-nowrap"><span className="text-sm font-semibold">09:00 AM</span></td>
                                            <td className="py-5 px-6"><span className="text-sm font-medium">Data Structures</span></td>
                                            <td className="py-5 px-6"><span className="text-sm text-slate-600">Room 302</span></td>
                                            <td className="py-5 px-6 text-right"><span className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">Taken</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION: ATTENDANCE */}
                {activeSection === 'attendance' && (
                    <div className="h-full overflow-y-auto fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <h2 className="text-slate-900 text-lg font-bold">Attendance Record</h2>
                        </header>
                        <div className="p-8 max-w-7xl mx-auto flex flex-col gap-6">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <h2 className="text-2xl font-bold text-slate-900">October 2023</h2>
                                        <div className="flex bg-slate-100 rounded-lg p-1">
                                            <button className="p-1 hover:bg-white rounded-md shadow-sm"><span className="material-symbols-outlined">chevron_left</span></button>
                                            <button className="p-1 hover:bg-white rounded-md shadow-sm"><span className="material-symbols-outlined">chevron_right</span></button>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-7 gap-y-6 text-center">
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Mon</div>
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Tue</div>
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Wed</div>
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Thu</div>
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Fri</div>
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Sat</div>
                                        <div className="text-sm font-semibold text-slate-400 uppercase">Sun</div>
                                        <div className="aspect-square flex items-center justify-center"><div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium cursor-pointer">1</div></div>
                                        <div className="aspect-square flex items-center justify-center"><div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-medium cursor-pointer">2</div></div>
                                        <div className="aspect-square flex items-center justify-center"><div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-medium cursor-pointer">3</div></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4 flex flex-col gap-6">
                                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                                        <h3 className="text-lg font-bold mb-6">Monthly Summary</h3>
                                        <div className="flex flex-col items-center">
                                            <div className="relative h-32 w-32 mb-6">
                                                <svg className="h-full w-full transform -rotate-90" viewBox="0 0 36 36">
                                                    <path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                                    <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeLinecap="round" strokeWidth="3"></path>
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center"><span className="text-2xl font-bold">92%</span></div>
                                            </div>
                                            <button className="w-full bg-primary text-white py-3 rounded-xl font-medium">Download Report</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION: REPORTS */}
                {activeSection === 'reports' && (
                    <div className="h-full overflow-y-auto fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <h2 className="text-slate-900 text-lg font-bold">Attendance Reports</h2>
                        </header>
                        <div className="p-10 max-w-7xl mx-auto space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white rounded-xl border-2 border-primary/20 p-5 flex items-center justify-between shadow-sm">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <span className="material-symbols-outlined text-xl">history</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#4c669a] uppercase">Download Report</p>
                                            <p className="font-bold">Yesterday (Oct 24)</p>
                                        </div>
                                    </div>
                                    <button className="bg-primary text-white p-2 rounded-lg"><span className="material-symbols-outlined text-[20px]">download</span></button>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-[#cfd7e7] overflow-hidden shadow-sm">
                                <div className="px-6 py-4 border-b flex justify-between items-center bg-gray-50/30">
                                    <h3 className="font-bold text-lg">Class-wide Records: CS-A 2024</h3>
                                    <div className="flex gap-2">
                                        <button className="px-4 py-2 border rounded-lg text-sm font-medium">Excel</button>
                                    </div>
                                </div>
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-[#f8f9fc] border-b text-sm font-bold text-[#4c669a]">
                                            <th className="px-6 py-4">Student Name</th>
                                            <th className="px-6 py-4">Roll Number</th>
                                            <th className="px-6 py-4">Attendance %</th>
                                            <th className="px-6 py-4 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y text-sm">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium">Liam Anderson</td>
                                            <td className="px-6 py-4">CS24001</td>
                                            <td className="px-6 py-4 font-bold text-green-600">98%</td>
                                            <td className="px-6 py-4 text-center"><button className="text-primary"><span className="material-symbols-outlined">download</span></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION: TIMETABLE */}
                {activeSection === 'timetable' && (
                    <div className="h-full overflow-y-auto fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <h2 className="text-slate-900 text-lg font-bold">Faculty Timetable</h2>
                        </header>
                        <div className="p-10 max-w-6xl mx-auto space-y-8">
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Time Slot</th>
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject & Code</th>
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                                            <th className="py-4 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">QR Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        <tr className="bg-primary/[0.03] border-l-4 border-l-primary hover:bg-primary/[0.06] transition-colors relative">
                                            <td className="py-6 px-6"><span className="text-sm font-bold text-primary">11:00 AM</span></td>
                                            <td className="py-6 px-6"><span className="text-sm font-bold">Algorithms & Complexity</span></td>
                                            <td className="py-6 px-6"><span class="text-sm">Main Hall 104</span></td>
                                            <td className="py-6 px-6 text-right">
                                                <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-primary/30 group/btn">
                                                    <span className="material-symbols-outlined text-xl group-hover/btn:rotate-12 transition-transform">qr_code_2</span>
                                                    Generate QR
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION: INBOX (NEW) */}
                {activeSection === 'inbox' && (
                    <div className="h-full overflow-hidden bg-background-light fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <div className="flex items-center gap-4 text-slate-900">
                                <div className="size-6 text-primary"><span className="material-symbols-outlined filled">mail</span></div>
                                <h2 className="text-lg font-bold">Faculty Inbox & Announcements</h2>
                            </div>
                            <div className="flex flex-1 justify-end gap-4 items-center">
                                <div className="flex bg-slate-100 rounded-lg h-10 px-3 items-center w-64">
                                    <span className="material-symbols-outlined text-[20px] text-slate-400">search</span>
                                    <input className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2" placeholder="Search announcements..."/>
                                </div>
                                <button className="size-10 flex items-center justify-center rounded-full hover:bg-gray-100 relative">
                                    <span className="material-symbols-outlined text-slate-500">notifications</span>
                                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>
                            </div>
                        </header>

                        <div className="flex-1 overflow-y-auto p-10 h-[calc(100vh-64px)] scroll-smooth">
                            <div className="max-w-5xl mx-auto flex flex-col gap-6">
                                <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                                    <div className="flex items-center justify-between p-5 border-b bg-slate-50/50">
                                        <div>
                                            <p className="text-base font-bold">Inbox Controls</p>
                                            <p className="text-slate-500 text-sm">Manage administrative notices and alerts</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="px-4 py-2 border border-slate-200 bg-white rounded-lg text-sm font-medium hover:bg-slate-50">Refresh</button>
                                            <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm shadow-primary/20">Mark all as read</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col divide-y divide-slate-100">
                                        {/* Faculty Message 1 */}
                                        <div className="flex items-center gap-4 p-5 hover:bg-slate-50 cursor-pointer border-l-4 border-primary">
                                            <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center text-primary shrink-0">
                                                <span className="material-symbols-outlined filled">account_balance</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <p className="font-bold text-slate-900">Dean's Office <span className="text-slate-400 font-normal text-xs ml-2">• Main Administration</span></p>
                                                    <p className="text-primary text-xs font-bold">09:30 AM</p>
                                                </div>
                                                <p className="text-sm font-bold text-slate-900 truncate">Quarterly Academic Review Meeting</p>
                                                <p className="text-slate-500 text-sm truncate">The Dean has scheduled a mandatory review meeting for all senior faculty members this Friday in the Conference Hall.</p>
                                            </div>
                                            <div className="size-2.5 rounded-full bg-primary shrink-0"></div>
                                        </div>

                                        {/* Faculty Message 2 */}
                                        <div className="flex items-center gap-4 p-5 hover:bg-slate-50 cursor-pointer border-l-4 border-transparent">
                                            <div className="size-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                                <span className="material-symbols-outlined filled">group</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <p className="font-bold text-slate-900">HR Department <span className="text-slate-400 font-normal text-xs ml-2">• Personnel Management</span></p>
                                                    <p className="text-slate-400 text-xs font-medium">Yesterday</p>
                                                </div>
                                                <p className="text-sm font-bold text-slate-900 truncate">Insurance Policy Update 2024</p>
                                                <p className="text-slate-500 text-sm truncate">Please review the updated health insurance benefits applicable for the current academic year.</p>
                                            </div>
                                        </div>

                                        {/* Faculty Message 3 */}
                                        <div className="flex items-center gap-4 p-5 hover:bg-slate-50 cursor-pointer border-l-4 border-transparent opacity-75">
                                            <div className="size-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                                                <span className="material-symbols-outlined filled">warning</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-baseline mb-1">
                                                    <p className="font-bold text-slate-700">IT Support</p>
                                                    <p className="text-slate-400 text-xs font-medium">Oct 22</p>
                                                </div>
                                                <p className="text-sm font-medium text-slate-700 truncate">Portal Maintenance Notice</p>
                                                <p className="text-slate-500 text-sm truncate">The grading portal will be offline for maintenance this Sunday between 12:00 AM and 04:00 AM.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-50/50 border-t flex justify-center">
                                        <button className="text-slate-500 hover:text-primary text-sm font-medium">Load older notifications</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION: LEAVE */}
                {activeSection === 'leave' && (
                    <div className="h-full overflow-y-auto fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <h2 className="text-slate-900 text-lg font-bold">Leave Request</h2>
                        </header>
                        <div className="p-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-5 bg-white rounded-xl shadow-sm border p-6 space-y-5">
                                <h3 className="font-bold text-gray-900 flex items-center gap-2"><span className="material-symbols-outlined text-primary text-xl">edit_note</span> New Application</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="text-sm font-semibold">Leave Type</label>
                                        <select className="w-full rounded-lg border-gray-100 bg-gray-50/50 py-2.5 text-sm mt-1">
                                            <option>Select leave type</option>
                                            <option>Sick Leave</option>
                                            <option>Casual Leave</option>
                                        </select>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div><label className="text-sm font-semibold">Start Date</label><input type="date" className="w-full rounded-lg border-gray-100 bg-gray-50/50 py-2.5 text-sm mt-1"/></div>
                                        <div><label className="text-sm font-semibold">End Date</label><input type="date" className="w-full rounded-lg border-gray-100 bg-gray-50/50 py-2.5 text-sm mt-1"/></div>
                                    </div>
                                    <button className="w-full bg-primary text-white font-bold py-3.5 rounded-xl">Submit Request</button>
                                </form>
                            </div>
                            <div className="lg:col-span-7 bg-white rounded-xl shadow-sm border overflow-hidden">
                                <div className="px-6 py-6 border-b"><h3 className="text-lg font-bold">Request History</h3></div>
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="text-[10px] uppercase font-bold text-gray-400 border-b">
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Type</th>
                                            <th className="px-6 py-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y text-sm">
                                        <tr>
                                            <td className="px-6 py-6 font-semibold">Oct 24, 2023</td>
                                            <td className="px-6 py-6">Casual Leave</td>
                                            <td className="px-6 py-6"><span className="px-3 py-1 rounded-full bg-green-50 text-green-600 font-bold border border-green-100">Approved</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {/* SECTION: PROFILE */}
                {activeSection === 'profile' && (
                    <div className="h-full overflow-y-auto fade-in-section">
                        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-10 sticky top-0 z-10">
                            <h2 className="text-slate-900 text-lg font-bold">Faculty Profile</h2>
                        </header>
                        <div className="p-10 max-w-5xl mx-auto">
                            <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                                <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5"></div>
                                <div className="px-10 pb-10 -mt-12">
                                    <div className="flex flex-col md:flex-row gap-6 items-end mb-8">
                                        <div className="size-32 rounded-full border-4 border-white shadow-md bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9ZNqidfqshk4AiGEn_zFstQXvLGNd03UymIm0aF8sfHcEIgZJglaxDnPFgPflYB7lNjXHRwe_96QZSOvgNp04tLuPnrhwZz5envjFANGXdXLL3wn8a5lxkzAsh1NXmWFWiqT_1HCZTwMwilL1fQ7mIZMd5kMIyc-0zmAsG9LZyWcQFfMz4ZpNOSgjj_QBmIJNXRoJYFJTX4dZ56uy2R3IZ0Cn9Za1G7_JjZsbkTaWtHLx-ZAFCwjdr4sm9rqkMvzqqP0MQGWyBw')" }}></div>
                                        <div className="flex-1 pb-1">
                                            <h1 className="text-2xl font-bold tracking-tight">Dr. Jonathan Reid</h1>
                                            <p className="text-slate-500 font-medium text-lg">Senior Professor</p>
                                            <p className="text-sm text-slate-400">Computer Science & Engineering Department</p>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 border-t">
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Employee ID</p>
                                            <p className="font-semibold text-slate-900">FAC-2024-098</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Email</p>
                                            <p className="font-semibold text-slate-900">j.reid@university.edu</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Experience</p>
                                            <p className="font-semibold text-slate-900">12 Years</p>
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

export default FacultyDashboard;