import React from 'react';
import { Download, Edit3, Phone, Mail, MapPin } from 'lucide-react';

const Profile = () => {
    return (
        <div className="sd-profile-view">
             <div className="sd-profile-header">
                {/* Banner Background */}
             </div>

             <div className="sd-profile-card">
                 <div className="sd-profile-avatar-large">
                     <img 
                        src="https://ui-avatars.com/api/?name=Alex+Morgan&background=random&size=256" 
                        className="sd-profile-avatar-img"
                        alt="Profile"
                     />
                 </div>

                 <div className="sd-profile-info">
                     <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                         <div>
                             <h2 className="sd-profile-name">Alex Johnson</h2>
                             <p className="sd-profile-email">alex.johnson@university.edu</p>
                             <span className="sd-status-badge active">Active Student</span>
                         </div>
                         <div style={{display: 'flex', gap: '2rem'}}>
                             <div className="sd-detail-item">
                                 <label>Enrollment Number</label>
                                 <p>E202100459</p>
                             </div>
                             <div className="sd-detail-item">
                                 <label>Roll Number</label>
                                 <p>CS-45</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div className="sd-details-grid">
                     <div className="sd-detail-item">
                         <label>Course / Degree</label>
                         <p>Bachelor of Technology (Computer Science)</p>
                     </div>
                     <div className="sd-detail-item">
                         <label>Department</label>
                         <p>School of Engineering</p>
                     </div>

                     <div className="sd-detail-item">
                         <label>Current Semester</label>
                         <p>Semester V <span style={{width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb', display: 'inline-block', marginBottom: '1px'}}></span></p>
                     </div>
                      <div className="sd-detail-item">
                         <label>Batch / Academic Year</label>
                         <p>2021 - 2025</p>
                     </div>

                     <div className="sd-detail-item">
                         <label>Division</label>
                         <p>Division A</p>
                     </div>
                      <div className="sd-detail-item">
                         <label>Mentor / Faculty Advisor</label>
                         <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                             <img src="https://ui-avatars.com/api/?name=Sarah+Williams&background=random" style={{width: '24px', height: '24px', borderRadius: '50%'}} alt="Mentor" />
                             <p>Dr. Sarah Williams</p>
                         </div>
                     </div>
                 </div>

                 <div style={{marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0'}}>
                     <h3 style={{fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                         <span style={{background: '#2563eb', color: 'white', padding: '4px', borderRadius: '6px'}}><UserIcon size={16} /></span> Contact Information
                     </h3>
                     
                     <div className="sd-details-grid" style={{marginTop: '1.5rem'}}>
                         <div className="sd-detail-item">
                            <label>Phone Number</label>
                            <p>+1 (555) 123-4567</p>
                         </div>
                          <div className="sd-detail-item">
                            <label>Emergency Contact</label>
                            <p>Mr. Robert Johnson (+1 555-987-6543)</p>
                         </div>
                         
                         <div className="sd-detail-item" style={{gridColumn: '1 / -1'}}>
                             <label>Permanent Address</label>
                             <p>123 Maple Avenue, Springfield Gardens, NY 11413, USA</p>
                         </div>
                     </div>
                 </div>

                <div style={{display: 'flex', gap: '1rem', marginTop: '3rem'}}>
                    <button className="btn-primary" style={{width: 'auto', padding: '0.75rem 2rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <Download size={18} /> Download ID Card
                    </button>
                    <button style={{padding: '0.75rem 2rem', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                        <Edit3 size={18} /> Request Update
                    </button>
                </div>

             </div>
        </div>
    );
};

// Helper
const UserIcon = ({size}) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

export default Profile;
