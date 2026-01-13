import React from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

const Attendance = () => {
    // Helper to generate mock days
    const renderDays = () => {
        const days = [];
        // Pad for start of month (e.g., Wed start)
        for (let i = 0; i < 3; i++) {
            days.push(<div key={`pad-${i}`} className="sd-day-cell empty"></div>);
        }
        
        for (let i = 1; i <= 30; i++) {
            let status = 'present'; 
            if ([4, 11, 18, 25].includes(i)) status = 'absent'; // Sundays/Random
            if (i === 8) status = 'half-day';
            
            days.push(
                <div key={i} className={`sd-day-cell ${status === 'present' ? 'present' : status === 'absent' ? 'absent' : 'half-day'}`}>
                    {i}
                    <div className={`sd-dot ${status}`}></div>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="sd-attendance-view">
             <div className="sd-section-header">
                <div>
                     <h2 style={{fontSize: '1.5rem', fontWeight: 800, margin: 0}}>Attendance Record</h2>
                     <p className="sd-text-muted">View your monthly attendance history and overall status.</p>
                </div>
                <div style={{background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600}}>
                    <CalendarIcon size={16} /> Academic Year 2023-2024
                </div>
             </div>

             <div className="sd-attendance-grid">
                {/* Left: Calendar */}
                <div className="sd-calendar-card">
                    <div className="sd-header-actions" style={{justifyContent: 'space-between', marginBottom: '1rem'}}>
                        <h3 style={{margin: 0}}>September 2023</h3>
                        <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                            <button style={{padding: '0.25rem', borderRadius: '8px', border: '1px solid #e2e8f0'}}><ChevronLeft size={20}/></button>
                            <span style={{fontWeight: 600}}>Today</span>
                            <button style={{padding: '0.25rem', borderRadius: '8px', border: '1px solid #e2e8f0'}}><ChevronRight size={20}/></button>
                        </div>
                    </div>

                    <div className="sd-grid-days">
                        <div className="sd-day-header">SUN</div>
                        <div className="sd-day-header">MON</div>
                        <div className="sd-day-header">TUE</div>
                        <div className="sd-day-header">WED</div>
                        <div className="sd-day-header">THU</div>
                        <div className="sd-day-header">FRI</div>
                        <div className="sd-day-header">SAT</div>
                        {renderDays()}
                    </div>

                    <div style={{marginTop: '2rem', display: 'flex', gap: '2rem', fontSize: '0.85rem'}}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                            <div className="sd-dot present"></div> Present
                        </div>
                         <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                            <div className="sd-dot absent"></div> Absent
                        </div>
                         <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                            <div className="sd-dot half-day"></div> Half-day
                        </div>
                    </div>
                </div>

                {/* Right: Stats */}
                <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                    <div className="sd-status-summary-card">
                         <h4 style={{margin: '0 0 1rem 0'}}>Today's Status</h4>
                         <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                            <div style={{width: '48px', height: '48px', borderRadius: '50%', background: '#d1fae5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <CheckCircle2 size={28} />
                            </div>
                            <div>
                                <h3 style={{margin: 0, fontSize: '1.25rem'}}>Present</h3>
                                <span className="sd-text-muted" style={{fontSize: '0.8rem'}}>Auto-logged at 09:02 AM</span>
                            </div>
                         </div>
                         <div style={{height: '4px', background: '#d1fae5', borderRadius: '2px', marginTop: '1rem', width: '100%', overflow: 'hidden'}}>
                            <div style={{width: '100%', height: '100%', background: '#10b981'}}></div>
                         </div>
                    </div>

                    <div className="sd-status-summary-card">
                        <h4 style={{margin: '0 0 1rem 0', textAlign: 'center'}}>Attendance Overview</h4>
                        <div className="sd-status-circle-lg">
                            <span style={{fontSize: '2.5rem', fontWeight: 800, color: '#1e3a8a'}}>88%</span>
                            <span style={{fontSize: '0.75rem', fontWeight: 700, letterSpacing: '1px', color: '#64748b'}}>ATTENDANCE</span>
                        </div>
                        
                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem', textAlign: 'center'}}>
                            <div style={{background: '#f8fafc', padding: '1rem', borderRadius: '8px', flex: 1, marginRight: '0.5rem'}}>
                                <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#64748b', marginBottom: '0.25rem'}}>TOTAL</div>
                                <div style={{fontSize: '1.25rem', fontWeight: 800}}>45</div>
                            </div>
                             <div style={{background: '#eff6ff', padding: '1rem', borderRadius: '8px', flex: 1, marginLeft: '0.5rem'}}>
                                <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.25rem'}}>ATTENDED</div>
                                <div style={{fontSize: '1.25rem', fontWeight: 800, color: '#2563eb'}}>40</div>
                            </div>
                        </div>

                        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '1rem', textAlign: 'center'}}>
                            <div style={{background: '#fef2f2', padding: '1rem', borderRadius: '8px', flex: 1, marginRight: '0.5rem'}}>
                                <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#ef4444', marginBottom: '0.25rem'}}>ABSENT</div>
                                <div style={{fontSize: '1.25rem', fontWeight: 800, color: '#b91c1c'}}>4</div>
                            </div>
                             <div style={{background: '#fffbeb', padding: '1rem', borderRadius: '8px', flex: 1, marginLeft: '0.5rem'}}>
                                <div style={{fontSize: '0.7rem', fontWeight: 700, color: '#f59e0b', marginBottom: '0.25rem'}}>HALF-DAY</div>
                                <div style={{fontSize: '1.25rem', fontWeight: 800, color: '#b45309'}}>1</div>
                            </div>
                        </div>
                    </div>

                     <div className="sd-status-summary-card" style={{background: '#ecfdf5', borderColor: '#d1fae5'}}>
                         <div style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem'}}>
                            <div style={{minWidth: '24px'}}>
                                <CheckCircle2 size={24} color="#059669" />
                            </div>
                            <div>
                                <h4 style={{margin: '0 0 0.25rem 0', color: '#065f46'}}>Safe Zone</h4>
                                <p style={{margin: 0, fontSize: '0.85rem', color: '#047857'}}>Great job! Your attendance is above the 75% requirement. Keep it up to maintain eligibility for exams.</p>
                            </div>
                         </div>
                     </div>
                </div>
             </div>
        </div>
    );
};

export default Attendance;
