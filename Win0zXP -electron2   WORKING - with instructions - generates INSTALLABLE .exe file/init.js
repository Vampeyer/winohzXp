const electron = require('electron')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: ""
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})