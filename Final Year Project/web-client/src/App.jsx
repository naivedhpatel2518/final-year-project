import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import FacultyDashboard from './pages/FacultyDashboard';
import Student from './pages/Student';

function App() {
  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => console.log('Backend Status:', data.message))
      .catch(err => console.error('Backend connection error:', err));
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/faculty" element={<FacultyDashboard />} />
          <Route path="/student" element={<Student />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
