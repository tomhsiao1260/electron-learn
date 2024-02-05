const { channel } = require("diagnostics_channel");
const { contextBridge, ipcRenderer } = require("electron");
const os = require("os");

// contextBridge: expose function in Main process so that Renderer process can use them
// ipcRenderer: on & send event between Main & Renderer process

contextBridge.exposeInMainWorld("electron", {
  homeDir: () => os.homedir(),
  osVersion: () => os.version(),
  osArch: () => os.arch(),
});

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, func) =>
    ipcRenderer.on(channel, (event, ...args) => func(...args)),
  removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel),
});
