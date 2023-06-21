
This is an important script too include 
in the package.json , to link an install script. 

and also  , 
builds for each Operating system. 


  "build": "install-script/install.js",
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
  "extraResources": [
    {
      "from": "./install-script",
      "to": "./install-script"
    }
  ]
}