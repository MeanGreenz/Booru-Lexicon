@echo off
setlocal
title Illustrious Lexicon Launcher
set "APP_FILE=%~dp0Illustrious-Lexicon-Standalone.html"

if not exist "%APP_FILE%" (
    echo Could not find Illustrious-Lexicon-Standalone.html in the current folder.
      pause
        exit /b 1
)

set "APP_URL=file:///%APP_FILE:\=/%"

if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
    call :launch "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" & exit /b 0
)
if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
    call :launch "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" & exit /b 0
)
if exist "%LocalAppData%\Google\Chrome\Application\chrome.exe" (
    call :launch "%LocalAppData%\Google\Chrome\Application\chrome.exe" & exit /b 0
)
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
    call :launch "%ProgramFiles%\Google\Chrome\Application\chrome.exe" & exit /b 0
)

:: Fallback to default system handler
start "" "%APP_FILE%"
exit /b 0

:launch
start "" "%~1" --app="%APP_URL%" --window-size=1520,940
exit /b 0