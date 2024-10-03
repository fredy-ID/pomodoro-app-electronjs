"use strict";
var _a = require('electron/main'), app = _a.app, BrowserWindow = _a.BrowserWindow;
var path = require('node:path');
var createWindow = function () {
    var win = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    var indexHTML = path.join(__dirname + "/index.html");
    win
        .loadFile(indexHTML)
        .then(function () {
        // IMPLEMENT FANCY STUFF HERE
    })
        .catch(function (e) { return console.error(e); });
};
app.on('ready', function () {
    console.log("App is ready");
    createWindow();
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin')
        app.quit();
});
