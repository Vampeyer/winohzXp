const { exec } = require('child_process');
const os = require('os');

const isNodeInstalled = () => {
  return new Promise((resolve) => {
    exec('node -v', (error) => {
      if (error) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

const installNode = () => {
  console.log('Installing Node.js...');

  const platform = os.platform();

  if (platform === 'win32') {
    // Windows installation
    console.log('Detected Windows platform');
    exec('powershell.exe -Command "Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString(\'https://chocolatey.org/install.ps1\'))"', (error) => {
      if (error) {
        console.error('Failed to install Chocolatey:', error);
      } else {
        exec('choco install nodejs -y', (error) => {
          if (error) {
            console.error('Failed to install Node.js:', error);
          } else {
            console.log('Node.js installed successfully!');
          }
        });
      }
    });
  } else if (platform === 'darwin') {
    // macOS installation
    console.log('Detected macOS platform');
    exec('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', (error) => {
      if (error) {
        console.error('Failed to install Homebrew:', error);
      } else {
        exec('brew install node', (error) => {
          if (error) {
            console.error('Failed to install Node.js:', error);
          } else {
            console.log('Node.js installed successfully!');
          }
        });
      }
    });
  } 
                /* code for linux , 32 bit  install */
  /* else if (platform === 'linux') {
    // Linux installation
    console.log('Detected Linux platform');
    exec('sudo apt-get update && sudo apt-get install -y curl', (error) => {
      if (error) {
        console.error('Failed to install curl:', error);
      } else {
        exec('curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -', (error) => {
          if (error) {
            console.error('Failed to add Node.js repository:', error);
          } else {
            exec('sudo apt-get install -y nodejs', (error) => {
              if (error) {
                console.error('Failed to install Node.js:', error);
              } else {
                console.log('Node.js installed successfully!');
              }
            });
          }
        });
      }
    });
   }     */
  
  
  else {
    console.log('Unsupported platform. Cannot install Node.js.');
    return;
  }
};

const run = async () => {
  const nodeInstalled = await isNodeInstalled();
  if (!nodeInstalled) {
    await installNode();
    console.log('Node.js installed successfully!');
  } else {
    console.log('Node.js is already installed.');
  }

  // Start your Electron application

};

run();


//////
/* window INIT */ 



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