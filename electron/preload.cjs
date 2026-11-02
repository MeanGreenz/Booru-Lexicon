const { contextBridge, clipboard } = require('electron');

contextBridge.exposeInMainWorld('desktopBridge', {
  isDesktopApp: true,
  platform: process.platform,
  copyText: (text) => clipboard.writeText(String(text || ''))
});
