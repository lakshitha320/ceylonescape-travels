@echo off
title CeylonEscape Web Server
echo ===================================================
echo   Starting CeylonEscape Local Server...
echo ===================================================
echo.
echo Opening default web browser at http://localhost:3000/
start "" "http://localhost:3000"
echo.
node server.js
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to start server. Please make sure Node.js is installed.
    echo You can download Node.js from https://nodejs.org/
    echo.
    pause
)
