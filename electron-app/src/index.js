const { app, BrowserWindow } = require('electron');
const path = require('node:path');

if (typeof window !== 'undefined' && !localStorage.getItem('1')){
    createLocalStorage()
}

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    
  });
  mainWindow.setMenuBarVisibility(false);
  //Dev
  mainWindow.loadURL('http://localhost:3000')
  //Prod
  //mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools
  //mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

