const { app, BrowserWindow } = require('electron')
const url = require('url')
const path = require('path')

// create a new react app in ./app folder and then build it
// once finish, npm start to run this electron app
// vite.config.js need to add base: '' option to make its path build correctly

function createMainWindow() {
    const mainWindow = new BrowserWindow({ title: 'Electron', width: 1000, height: 600 })
    const starturl = url.format({ pathname: path.join(__dirname, './app/dist/index.html'), protocol: 'file' })
    mainWindow.loadURL(starturl)
}

app.whenReady().then(createMainWindow)