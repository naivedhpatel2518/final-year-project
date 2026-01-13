import React, { useState, useEffect } from 'react';
import API from '../services/api';
import { RefreshCw, Clock } from 'lucide-react';

const QRDisplay = ({ lectureId }) => {
    const [qrImage, setQrImage] = useState('');
    const [timeLeft, setTimeLeft] = useState(120); // 120 seconds
    const [refreshKey, setRefreshKey] = useState(0);

    const fetchQR = async () => {
        try {
            const { data } = await API.get(`/faculty/generate-qr/${lectureId}`);
            setQrImage(data.qrCode);
            setTimeLeft(120);
        } catch (err) {
            console.error("Failed to generate QR", err);
        }
    };

    useEffect(() => {
        fetchQR();
        // Set an interval to refresh QR every 2 mins independently or rely on timeLeft
    }, [lectureId, refreshKey]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    setRefreshKey(k => k + 1); // Trigger refresh
                    return 120;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    return (
        <div className="qr-display-container">
            <h3>Scan to Mark Attendance</h3>
            
            <div className="qr-wrapper">
                {qrImage ? <img src={qrImage} alt="Attendance QR" className="qr-image" /> : <div className="loading">Generating...</div>}
                
                <div className="timer-overlay">
                    <Clock size={16} />
                    <span>Expires in {formatTime(timeLeft)}</span>
                </div>
            </div>

            <button className="btn-secondary" onClick={() => setRefreshKey(k => k + 1)}>
                <RefreshCw size={16} /> Force Refresh
            </button>

            <style>{`
                .qr-display-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    background: white;
                    padding: 2rem;
                    border-radius: var(--radius);
                    color: #000;
                }
                .qr-wrapper {
                    position: relative;
                    padding: 1rem;
                    border: 2px dashed #ccc;
                    border-radius: var(--radius);
                }
                .qr-image {
                    width: 250px;
                    height: 250px;
                    display: block;
                }
                .timer-overlay {
                    margin-top: 1rem;
                    font-weight: 600;
                    color: var(--primary);
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    justify-content: center;
                }
                .btn-secondary {
                    background: transparent;
                    border: 1px solid var(--primary);
                    color: var(--primary);
                    padding: 0.5rem 1rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .btn-secondary:hover {
                    background: rgba(99, 102, 241, 0.1);
                }
            `}</style>
        </div>
    );
};

export default QRDisplay;
