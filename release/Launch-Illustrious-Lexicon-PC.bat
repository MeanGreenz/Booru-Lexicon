@echo off
setlocal
title Illustrious Lexicon Launcher
set "APP_FILE=%~dp0Illustrious-Lexicon-Standalone.html"

if not exist "%APP_FILE%" (
  echo Could not find Illustrious-Lexicon-Standalone.html in the current folder.
  pause
  exit /b 1
)

:: Launch in native Windows desktop App Mode (frameless window via Microsoft Edge or Chrome)
where msedge >nul 2>nul
if %ERRORLEVEL% EQU 0 (
  start "" msedge --app="file:///%APP_FILE:=/%" --window-size=1520,940
  exit /b 0
)

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" --app="file:///%APP_FILE:=/%" --window-size=1520,940
  exit /b 0
)

if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" --app="file:///%APP_FILE:=/%" --window-size=1520,940
  exit /b 0
)

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" --app="file:///%APP_FILE:=/%" --window-size=1520,940
  exit /b 0
)

:: Fallback to default system handler
start "" "%APP_FILE%"
