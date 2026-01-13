import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CalendarDays, 
  MessageSquare, 
  User, 
  LogOut, 
  Bell, 
  BookOpen, 
  Menu
} from 'lucide-react';
import './StudentDashboard.css';
import Dashboard from './Dashboard';
import Attendance from './Attendance';
import Inbox from './Inbox';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const navigate = useNavigate();

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return <Dashboard />;
            case 'attendance':
                return <Attendance />;
            case 'inbox':
                return <Inbox />;
            case 'profile':
                return <Profile />;
            default:
                return <Dashboard />;
        }
    };

    const getTitle = () => {
        switch (activeTab) {
            case 'dashboard': return 'Dashboard';
            case 'attendance': return 'Attendance';
            case 'inbox': return 'Inbox';
            case 'profile': return 'My Profile';
            default: return 'Dashboard';
        }
    };

    const handleLogout = () => {
        // Add logout logic here
        navigate('/login');
    };

    return (
        <div className="sd-container">
            {/* Sidebar */}
            <aside className="sd-sidebar">
                <div className="sd-brand">
                    <div className="sd-brand-icon">
                        <BookOpen size={24} />
                    </div>
                    <div className="sd-brand-text">
                        <h1>EduPortal</h1>
                        <span>Student Panel</span>
                    </div>
                </div>

                <nav className="sd-nav">
                    <button 
                        className={`sd-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                        onClick={() => setActiveTab('dashboard')}
                    >
                        <LayoutDashboard size={20} className="icon"/>
                        <span>Dashboard</span>
                    </button>
                    <button 
                        className={`sd-nav-item ${activeTab === 'attendance' ? 'active' : ''}`}
                        onClick={() => setActiveTab('attendance')}
                    >
                        <CalendarDays size={20} className="icon"/>
                        <span>Attendance</span>
                    </button>
                    <button 
                        className={`sd-nav-item ${activeTab === 'inbox' ? 'active' : ''}`}
                        onClick={() => setActiveTab('inbox')}
                    >
                        <MessageSquare size={20} className="icon"/>
                        <span>Inbox</span>
                    </button>
                    <button 
                        className={`sd-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <User size={20} className="icon"/>
                        <span>Profile</span>
                    </button>

                    <button className="sd-nav-item sd-logout-btn" onClick={handleLogout}>
                        <LogOut size={20} className="icon"/>
                        <span>Log Out</span>
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="sd-main">
                <header className="sd-header">
                    <div className="sd-breadcrumb">
                        <span>Home</span>
                        <span>/</span>
                        <span className="current">{getTitle()}</span>
                    </div>

                    <div className="sd-header-actions">
                        <button className="sd-notification-btn">
                            <Bell size={20} color="#64748b" />
                            <span className="sd-notif-badge"></span>
                        </button>
                        
                        <div className="sd-user-profile">
                            <div className="sd-user-info">
                                <span className="sd-user-name">Alex Morgan</span>
                                <span className="sd-user-role">Class 12-B</span>
                            </div>
                            <img 
                                src="https://ui-avatars.com/api/?name=Alex+Morgan&background=random" 
                                alt="Profile" 
                                className="sd-avatar"
                            />
                        </div>
                    </div>
                </header>

                <div className="sd-content-scroll">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default Layout;
