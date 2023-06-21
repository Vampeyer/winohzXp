

Electron Notes 001  

This is some important notes on 
how the electron packager installs and makes the application. 

There are essentially two styles of packaging an installable program using the electron tool.  
there is apparently a portable , and stand alone style app, 
that initiates the executable file within the folder it is created in . 

this allows the client to just download and run a program as a stand alone program 
by itself. 

----

the other method , is creating a installation file. This creates a local installable file , 
that installs the program on the specified device , that 
that program is designed for. 

-----------------------------------------------------------------------------------------------------

for a stand alone application , 


the package.json needs to be like this ,  

{
  "name": "win0zxp--electron2",
  "version": "1.0.0",
  "description": "",
  "main": "init.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-packager ."
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "electron": "^25.1.0",
    "electron-packager": "^17.1.1"
  }
}



as a electron , packager , 

then , the init.js  , needs to simply create a window and load the code . 
- 
this code should be contained in the init.js file . 
-
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

-  

Once those steps are completed , and the previous steps have been 
set up ( from the electron build READme )

like  this  ,  

Setps. 
1. - use 
-npm init - y
in the terminal , 
and go through all the lines 


2. npm install electron --save


3.   go to the electron docs page and get ther intialization 
code from "  writing your first electron app. " 
----- the main.js ,on the page , 
---- in to your 
init.js file.    ------ or just copy the code here . 


4.  In the package-json file ,     Make SURE , after all of the JavaScript code is copied into the .init file , that the main entry point is set to the init.js file , 
like so. 
--------------------------
  "description": "",
  "main": "init.js",
  "scripts": {  "start": "electron .",
   
    "build": "electron-packager ." }
    -------------------------------------------


.5 Modify the package.json file 
scripts , to contain    
---------------------------------------------------------
"scripts": {
                                  --- this will set the command for npm start  
    "start": "electron ."
  },---------------------------------------------------------

-------------------------------------------------------------------

.... npm start will launch (not package )
 the application .
 
6.  Time to build the package . 
 - npm run build  - 
 
 packages everything in a local file ,
 in a local folder . 
 
 --- click the .exe to run it locally. 




=================================================================================
--------------------------------------------------------------------
That is how you build a , portable .exe file , 

Now , we will continue to either dismantle , 
re build , 
or re figure the code , to run a local installer package , 
for the code and its dependancies. 


=====================================================================================




To build a node nsis or other os file , we will try this , 
this will be an application that will check for previous resources , and if not present , 
then download them. 
Then , it will package the file into a full installation package. 
- Lets GO - 



1. npm install electron-builder --save-dev

2. Configure Electron Builder in your project's package.json file:
Add the following configuration to the scripts section of your package.json:

Copy code  into your scripts tag in the .json file   \ if present , delete other build script key values. 

"scripts": {
  "build": "electron-builder"
}


3.  *** Add these lines of code into your package.json 

"build": {
  "appId": "com.yourapp.app",
  "directories": {
    "output": "dist"
  },
  "win": {
    "target": "nsis"
  },
  "mac": {
    "target": "dmg"
  },
  "linux": {
    "target": "AppImage"
  },
  "extraResources": [                          // this is to tie in the pre install script we will make . 
    {
      "from": "./install-script",
      "to": "./install-script"
    }
  ]
}



4. Since we will be checking for a few 
things to be installed , we first need to configure the 
package.json file , as such  -  


To tie in the installation commands file before and during the npm build process,
 you can modify the preinstall script in your package.json file to execute the 
 installation commands before the build process starts. Here's how you can do it:

Update the scripts section of your package.json file:

json
Copy code
"scripts": {
  "preinstall": "node install.js",
  "start": "electron .",
  "build": "npm run preinstall && electron-builder"
}
Create an install.js file in your project directory and add the installation logic to it. 
This script will be executed automatically before the build process starts.
With this setup, when you run the npm run build command, it will first execute the preinstall
 script, which will run the install.js file to install the necessary dependencies based
  on the user's operating system. Once the installation is complete, the electron-builder
   command will be executed to build your Electron application.

By tying in the installation commands file in the preinstall script, you ensure that the
 installation process occurs automatically before the build process starts, providing a
  seamless experience for users.



5. Create an install-script directory
or folder  
 in the root , 
 AKA just the main location ,  of your project:
This directory will contain the script responsible for checking the presence of Node.js
 and installing it if needed.

6.  Write the installation script:
Create a file named install.js within the install-script directory.
 This script will perform the installation of Node.js if it's not detected. 
 Here's a basic example to get you started:

javascript
Copy code
const { exec } = require('child_process');

const isNodeInstalled = () => {
  // Check if Node.js is installed by running a command
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
  // Install Node.js using a command or script
  // Here, you can use platform-specific installation commands
  // For example, on Windows, you can download the installer and run it silently
  // On macOS, you can use Homebrew or package managers like nvm or nodenv
  // Make sure to handle different platform scenarios appropriately
};

const run = async () => {
  const nodeInstalled = await isNodeInstalled();
  if (!nodeInstalled) {
    console.log('Node.js not found. Installing...');
    await installNode();
    console.log('Node.js installed successfully!');
  } else {
    console.log('Node.js is already installed.');
  }

  // Start your Electron application
  require('./path/to/your/main/file.js');
};

run();








7. Just to check , 
this is what your package.json should contain  , 
{
  "name": "win0zxp--electron2",
  "version": "1.0.0",
  "description": "",
  "main": "./install-script/install.js",
  "scripts": {
    "preinstall": "node ./install-script/install.js",
    "start": "electron .",
    "build": "electron-packager ./ --win --x64 --universal --pd  && electron-builder . "
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "electron-packager": "^17.1.1"
  },
  "devDependencies": {
    "electron": "^25.1.1",
    "electron-builder": "^24.4.0"
  }
}




7.5 -- 
READ THE READ ME -003 
- JUST ADD THAT CODE TO THE END OF THE PACKAGE .JSON ;-) 



8. lastly , npm run build  -- - - - 































