import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const releaseDir = path.join(rootDir, 'release');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory not found. Run "npm run build" first.');
  process.exit(1);
}

fs.mkdirSync(releaseDir, { recursive: true });

// 1. Read compiled index.html and inline all CSS and JS assets into a single self-contained offline file
let html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Inline CSS <link rel="stylesheet" crossorigin href="./assets/...">
html = html.replace(
  /<link[^>]+rel="stylesheet"[^>]+href="(\.?\/?assets\/[^"]+\.css)"[^>]*>/g,
  (_match, relHref) => {
    const cleanRel = relHref.replace(/^\.?\//, '');
    const cssPath = path.join(distDir, cleanRel);
    if (fs.existsSync(cssPath)) {
      const cssContent = fs.readFileSync(cssPath, 'utf-8');
      return `<style>${cssContent}</style>`;
    }
    return _match;
  }
);

// Inline JS <script type="module" crossorigin src="./assets/..."></script>
html = html.replace(
  /<script[^>]+src="(\.?\/?assets\/[^"]+\.js)"[^>]*><\/script>/g,
  (_match, relSrc) => {
    const cleanRel = relSrc.replace(/^\.?\//, '');
    const jsPath = path.join(distDir, cleanRel);
    if (fs.existsSync(jsPath)) {
      const jsContent = fs.readFileSync(jsPath, 'utf-8');
      // Escape any closing script tags inside string literals so HTML parser does not terminate early
      const safeJs = jsContent.replace(/<\/script>/gi, '<\\/script>');
      return `<script type="module">${safeJs}</script>`;
    }
    return _match;
  }
);

const standaloneHtmlPath = path.join(releaseDir, 'Illustrious-Lexicon-Standalone.html');
fs.writeFileSync(standaloneHtmlPath, html, 'utf-8');

// 2. Create a native Windows PC App-Mode Launcher (.bat) that opens the standalone file in a native frameless desktop window
const windowsLauncherBat = `@echo off
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
  start "" msedge --app="file:///%APP_FILE:\=/%" --window-size=1520,940
  exit /b 0
)

if exist "%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe" (
  start "" "%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe" --app="file:///%APP_FILE:\=/%" --window-size=1520,940
  exit /b 0
)

if exist "%ProgramFiles%\\Microsoft\\Edge\\Application\\msedge.exe" (
  start "" "%ProgramFiles%\\Microsoft\\Edge\\Application\\msedge.exe" --app="file:///%APP_FILE:\=/%" --window-size=1520,940
  exit /b 0
)

if exist "%ProgramFiles%\\Google\\Chrome\\Application\\chrome.exe" (
  start "" "%ProgramFiles%\\Google\\Chrome\\Application\\chrome.exe" --app="file:///%APP_FILE:\=/%" --window-size=1520,940
  exit /b 0
)

:: Fallback to default system handler
start "" "%APP_FILE%"
`;

const launcherBatPath = path.join(releaseDir, 'Launch-Illustrious-Lexicon-PC.bat');
fs.writeFileSync(launcherBatPath, windowsLauncherBat.replace(/\r?\n/g, '\r\n'), 'utf-8');

console.log('Successfully generated standalone PC release bundle in ./release/:');
console.log('  - release/Illustrious-Lexicon-Standalone.html');
console.log('  - release/Launch-Illustrious-Lexicon-PC.bat');
