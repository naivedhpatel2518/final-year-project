import React from 'react';
import { Search, Filter, RefreshCw, CheckSquare, AlertTriangle, FlaskConical, User } from 'lucide-react';

const Inbox = () => {
    return (
        <div className="sd-inbox-view">
             <div className="sd-section-header" style={{alignItems: 'flex-start', flexDirection: 'column', gap: '1rem'}}>
                <h2 style={{fontSize: '1.5rem', fontWeight: 800, margin: 0}}>Announcements & Inbox</h2>
                 
                 <div style={{display: 'flex', gap: '1rem', width: '100%'}}>
                    <div style={{position: 'relative', flex: 1}}>
                        <Search size={18} style={{position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8'}} />
                        <input type="text" placeholder="Search messages..." style={{paddingLeft: '2.5rem', background: 'white', color: 'black', border: '1px solid #e2e8f0'}} />
                    </div>
                    <button style={{display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', border: '1px solid #e2e8f0', padding: '0 1rem', borderRadius: '8px', color: '#475569', fontWeight: 600}}>
                        <Filter size={18} /> Filter by Sender
                    </button>
                 </div>
             </div>

             <div className="sd-inbox-container">
                <div className="sd-inbox-toolbar">
                    <div>
                        <h4 style={{margin: 0}}>Inbox Controls</h4>
                        <p style={{margin: 0, fontSize: '0.8rem', color: '#64748b'}}>Manage your unread messages and notifications</p>
                    </div>
                    <div style={{display: 'flex', gap: '0.5rem'}}>
                        <button style={{display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white'}}>
                            <RefreshCw size={16} /> Refresh
                        </button>
                        <button className="btn-primary" style={{width: 'auto', padding: '0.5rem 1rem', display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.9rem'}}>
                            <CheckSquare size={16} /> Mark all as read
                        </button>
                    </div>
                </div>

                <div className="sd-message-list">
                    {/* Message 1 */}
                    <div className="sd-message-item unread">
                        <div className="sd-message-avatar">
                            <span style={{fontSize: '1.2rem'}}>PS</span>
                        </div>
                        <div className="sd-message-content">
                            <div className="sd-message-header">
                                <span className="sd-sender-name">Prof. Smith <span style={{fontWeight: 400, color: '#64748b', fontSize: '0.85rem'}}>• Computer Science Dept</span></span>
                                <span className="sd-message-time" style={{color: '#2563eb', fontWeight: 600}}>10:30 AM</span>
                            </div>
                            <div className="sd-message-subject">Mid-term Schedule Changed</div>
                            <div className="sd-message-preview">Please note that the exam has moved to Room 304 due to maintenance in the main hall.</div>
                        </div>
                         <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', alignSelf: 'center'}}></div>
                    </div>

                    {/* Message 2 */}
                    <div className="sd-message-item unread">
                         <div className="sd-message-avatar" style={{background: '#fef3c7', color: '#d97706'}}>
                            <AlertTriangle size={24} />
                        </div>
                        <div className="sd-message-content">
                            <div className="sd-message-header">
                                <span className="sd-sender-name">System Alert</span>
                                <span className="sd-message-time" style={{color: '#2563eb', fontWeight: 600}}>09:15 AM</span>
                            </div>
                            <div className="sd-message-subject">Library Maintenance Downtime</div>
                            <div className="sd-message-preview">The digital library services will be unavailable this Saturday from 2 AM to 4 AM.</div>
                        </div>
                        <div style={{width: '10px', height: '10px', borderRadius: '50%', background: '#2563eb', alignSelf: 'center'}}></div>
                    </div>

                    {/* Message 3 */}
                    <div className="sd-message-item">
                         <div className="sd-message-avatar" style={{background: '#f3f4f6', color: '#4b5563'}}>
                            <User size={24} />
                        </div>
                        <div className="sd-message-content">
                            <div className="sd-message-header">
                                <span className="sd-sender-name">Admin Office</span>
                                <span className="sd-message-time">Yesterday</span>
                            </div>
                            <div className="sd-message-subject">Tuition Due Reminder</div>
                            <div className="sd-message-preview">This is a reminder to clear your semester dues by the end of the week to avoid late fees.</div>
                        </div>
                    </div>

                     {/* Message 4 */}
                    <div className="sd-message-item">
                         <div className="sd-message-avatar" style={{background: '#f3e8ff', color: '#9333ea'}}>
                            <FlaskConical size={24} />
                        </div>
                        <div className="sd-message-content">
                            <div className="sd-message-header">
                                <span className="sd-sender-name">Physics Dept</span>
                                <span className="sd-message-time">Oct 24</span>
                            </div>
                            <div className="sd-message-subject">Lab Coat Requirement</div>
                            <div className="sd-message-preview">For the upcoming lab session on Thermodynamics, all students are required to wear safety gear.</div>
                        </div>
                    </div>

                </div>
                
                 <button style={{width: '100%', padding: '1rem', background: 'transparent', color: '#3b82f6', fontWeight: 600, border: 'none', cursor: 'pointer', borderTop: '1px solid #e2e8f0'}}>
                    Load more messages
                </button>
             </div>
        </div>
    );
};

export default Inbox;
