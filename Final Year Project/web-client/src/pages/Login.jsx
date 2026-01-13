import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

    // Force light mode on mount
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }, []);

    const isFormValid = userId.trim().length > 0 && password.trim().length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMsg({ text: '', type: '' });

        // Simulate API verification
        setTimeout(() => {
            setLoading(false);
            setStatusMsg({ 
                text: `Welcome back! Redirecting to ${role} dashboard...`, 
                type: 'success' 
            });

            setTimeout(() => {
                if (role === 'student') {
                    navigate('/student');
                } else if (role === 'staff') {
                   navigate('/faculty');
                } else {
                    setStatusMsg({ text: 'Unknown role selected', type: 'error' });
                }
            }, 1500);
        }, 1200);
    };

    return (
        <div className="bg-gray-50 font-display min-h-screen flex flex-col relative overflow-x-hidden text-black transition-colors duration-300">
            
            {/* Background Accents */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-600/5 blur-[100px]"></div>
                <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-400/5 blur-[80px]"></div>
            </div>

            <header className="relative z-20 w-full px-6 py-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg transition-colors duration-300">
                        <span className="material-symbols-outlined text-2xl">school</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold leading-none tracking-tight text-black">University Portal</h1>
                        <span className="text-xs font-normal text-gray-500 mt-1 transition-colors duration-300">Attendance System</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex items-center justify-center px-4 py-8 relative z-10 w-full">
                <div className="w-full max-w-[440px]">
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-10 transition-colors duration-300">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-black">Welcome back</h2>
                            <p className="text-gray-500 text-sm md:text-base">Please enter your details to sign in.</p>
                        </div>

                        <div className="mb-8">
                            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 ml-1">Select Role</label>
                            <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-1 border border-gray-200 relative transition-colors duration-300">
                                <label className="flex-1 relative cursor-pointer group">
                                    <input 
                                        type="radio" 
                                        name="role" 
                                        value="student" 
                                        checked={role === 'student'} 
                                        onChange={(e) => setRole(e.target.value)}
                                        className="peer sr-only" 
                                    />
                                    <div className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-gray-500 transition-all duration-200 peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm border border-transparent peer-checked:border-gray-200 hover:text-black">
                                        Student
                                    </div>
                                </label>
                                <label className="flex-1 relative cursor-pointer group">
                                    <input 
                                        type="radio" 
                                        name="role" 
                                        value="staff" 
                                        checked={role === 'staff'} 
                                        onChange={(e) => setRole(e.target.value)}
                                        className="peer sr-only" 
                                    />
                                    <div className="w-full py-2.5 px-4 rounded-xl text-center text-sm font-semibold text-gray-500 transition-all duration-200 peer-checked:bg-white peer-checked:text-blue-600 peer-checked:shadow-sm border border-transparent peer-checked:border-gray-200 hover:text-black">
                                        Staff
                                    </div>
                                </label>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-black ml-1" htmlFor="userid">User ID</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-blue-600 transition-colors text-[20px]">badge</span>
                                    </div>
                                    <input 
                                        className="block w-full pl-11 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all sm:text-sm font-medium" 
                                        id="userid" 
                                        placeholder="e.g., 20230045" 
                                        type="text"
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-black ml-1" htmlFor="password">Password</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-gray-400 group-focus-within:text-blue-600 transition-colors text-[20px]">lock</span>
                                    </div>
                                    <input 
                                        className="block w-full pl-11 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all sm:text-sm font-medium" 
                                        id="password" 
                                        placeholder="••••••••" 
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button 
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer text-gray-400 hover:text-blue-600 transition-colors"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">
                                            {showPassword ? 'visibility' : 'visibility_off'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <a className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">Forgot password?</a>
                            </div>

                            <button 
                                id="submitBtn" 
                                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-2xl shadow-lg text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-2" 
                                type="submit"
                                disabled={!isFormValid || loading}
                            >
                                {loading ? (
                                    <>
                                        <span>Authenticating...</span>
                                        <span className="loader"></span>
                                    </>
                                ) : (
                                    <>
                                        <span>Secure Login</span>
                                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                                    </>
                                )}
                            </button>
                            
                            {statusMsg.text && (
                                <div className={`text-center text-sm font-medium mt-4 p-3 rounded-xl block ${statusMsg.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                    {statusMsg.text}
                                </div>
                            )}
                        </form>
                    </div>

                    <footer className="mt-8 text-center">
                        <p className="text-xs text-gray-500 opacity-60">
                            &copy; 2026 Team Beates. All rights reserved.
                        </p>
                    </footer>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>
            
            <style jsx>{`
                .loader {
                    width: 18px;
                    height: 18px;
                    border: 2px solid #FFF;
                    border-bottom-color: transparent;
                    border-radius: 50%;
                    display: inline-block;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }

                @keyframes rotation {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Login;