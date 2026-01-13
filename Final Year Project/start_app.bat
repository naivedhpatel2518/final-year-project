@echo off
echo Starting Smart Attendance System...

:: Start Backend
start "Smart Attendance Server" cmd /k "cd server && npm start"

:: Start Frontend
start "Smart Attendance Client" cmd /k "cd web-client && npm run dev"

echo System starting...
