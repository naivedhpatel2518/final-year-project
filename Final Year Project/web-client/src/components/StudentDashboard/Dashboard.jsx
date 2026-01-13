import React from 'react';
import { CheckCircle2, AlertCircle, Clock, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="sd-dashboard-view">
      <div className="sd-welcome-card">
         <div className="sd-welcome-text">
            <h2>Good Morning, Alex! 👋</h2>
            <p className="sd-text-muted">Here's what's happening with your academic schedule today.</p>
         </div>
         <button className="btn-primary" style={{width: 'auto', padding: '0.75rem 1.5rem'}}>
            + New Request
         </button>
      </div>

      <div className="sd-dashboard-grid">
        <div className="sd-main-col">
            {/* Stats Row */}
            <div className="sd-stats-row">
                <div className="sd-stat-card">
                    <div className="sd-stat-header">
                        <div className="sd-stat-icon" style={{background: '#ecfdf5', color: '#10b981'}}>
                            <CheckCircle2 size={24} />
                        </div>
                        <span className="sd-badge" style={{background: '#d1fae5', color: '#065f46', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px'}}>+2%</span>
                    </div>
                    <div className="sd-stat-value">85%</div>
                    <div className="sd-stat-label">Total Attendance</div>
                </div>

                <div className="sd-stat-card">
                    <div className="sd-stat-header">
                        <div className="sd-stat-icon" style={{background: '#fff7ed', color: '#f97316'}}>
                            <Clock size={24} />
                        </div>
                        <span className="sd-badge" style={{background: '#ffedd5', color: '#9a3412', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px'}}>Urgent</span>
                    </div>
                    <div className="sd-stat-value">2</div>
                    <div className="sd-stat-label">Pending Assignments</div>
                </div>

                <div className="sd-stat-card">
                    <div className="sd-stat-header">
                        <div className="sd-stat-icon" style={{background: '#eff6ff', color: '#3b82f6'}}>
                            <Calendar size={24} />
                        </div>
                        <span className="sd-badge" style={{background: '#dbeafe', color: '#1e40af', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px'}}>1 Active</span>
                    </div>
                    <div className="sd-stat-value">Sick</div>
                    <div className="sd-stat-label">Leave Requests</div>
                </div>

                 <div className="sd-stat-card">
                    <div className="sd-stat-header">
                        <div className="sd-stat-icon" style={{background: '#f3e8ff', color: '#a855f7'}}>
                            <Clock size={24} />
                        </div>
                         <span className="sd-badge" style={{background: '#f3e8ff', color: '#6b21a8', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px'}}>10:00 AM</span>
                    </div>
                    <div className="sd-stat-value" style={{fontSize: '1.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Maths</div>
                    <div className="sd-stat-label">Next Class</div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="sd-chart-section">
                <div className="sd-section-header">
                    <h3 className="sd-section-title">Attendance Trends</h3>
                    <select style={{padding: '0.5rem', borderRadius: '8px', border: '1px solid #e2e8f0'}}>
                        <option>This Week</option>
                        <option>Last Week</option>
                    </select>
                </div>
                <div style={{height: '250px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '1rem'}}>
                     {/* Mock Chart Visual */}
                     <div style={{width: '100%', height: '100%', position: 'relative'}}>
                        <svg viewBox="0 0 500 150" style={{width: '100%', height: '100%', overflow: 'visible'}}>
                             <path d="M0,120 Q50,120 100,80 T200,80 T300,50 T400,90 T500,70" 
                                fill="none" stroke="#3b82f6" strokeWidth="3" />
                             <path d="M0,120 Q50,120 100,80 T200,80 T300,50 T400,90 T500,70 V150 H0 Z" 
                                fill="url(#gradient)" opacity="0.1" />
                             <defs>
                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                             </defs>
                             {/* Points */}
                             <circle cx="100" cy="80" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                             <circle cx="200" cy="80" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                             <circle cx="300" cy="50" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                             <circle cx="400" cy="90" r="4" fill="white" stroke="#3b82f6" strokeWidth="2" />
                        </svg>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.8rem', color: '#94a3b8'}}>
                            <span>MON</span>
                            <span>TUE</span>
                            <span>WED</span>
                            <span>THU</span>
                            <span>FRI</span>
                        </div>
                     </div>
                </div>
            </div>
            
             <br />
            {/* Notice Board */}
             <div className="sd-chart-section">
                <div className="sd-section-header">
                    <h3 className="sd-section-title">Notice Board</h3>
                </div>
                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                    <div style={{minWidth: '40px', height: '40px', borderRadius: '50%', background: '#fee2e2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <AlertCircle size={20} />
                    </div>
                    <div>
                        <h4 style={{margin: 0, fontSize: '0.95rem'}}>Semester Exam Schedule Released</h4>
                        <p style={{margin: 0, fontSize: '0.85rem', color: '#64748b'}}>The final datesheet for Spring 2024 has been uploaded.</p>
                    </div>
                    <span style={{marginLeft: 'auto', fontSize: '0.75rem', color: '#94a3b8'}}>2 hrs ago</span>
                </div>
            </div>

        </div>

        {/* Right Column: Schedule */}
        <div className="sd-side-col">
            <div className="sd-schedule-section">
                <div className="sd-section-header">
                    <h3 className="sd-section-title">Today's Schedule</h3>
                    <a href="#" style={{fontSize: '0.85rem', color: '#3b82f6', textDecoration: 'none'}}>View All</a>
                </div>

                <div className="sd-class-list">
                    <div className="sd-class-item">
                        <div className="sd-class-time">
                            09:00 <span>AM</span>
                        </div>
                        <div className="sd-class-info">
                            <h4>Physics - Mech</h4>
                            <p>Room 302 • Dr. Watson</p>
                        </div>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', marginLeft: 'auto'}}></div>
                    </div>

                    <div className="sd-class-item current">
                        <div className="sd-class-time">
                            10:00 <span>AM</span>
                        </div>
                        <div className="sd-class-info">
                            <h4>Mathematics 1</h4>
                            <p>Room 105 • Prof. Alan</p>
                        </div>
                        <div style={{width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6', marginLeft: 'auto'}}></div>
                    </div>

                    <div className="sd-class-item">
                        <div className="sd-class-time">
                            01:00 <span>PM</span>
                        </div>
                        <div className="sd-class-info">
                            <h4>English Lit</h4>
                            <p>Hall B • Mrs. Davis</p>
                        </div>
                    </div>
 
                     <div className="sd-class-item">
                        <div className="sd-class-time">
                            02:30 <span>PM</span>
                        </div>
                        <div className="sd-class-info">
                            <h4>Comp Sci</h4>
                            <p>Lab 04 • Mr. Robot</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
