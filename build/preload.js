"use strict";
var contextBridge = require('electron').contextBridge;
contextBridge.exposeInMainWorld('versions', {
    node: function () { return process.versions.node; },
    chrome: function () { return process.versions.chrome; },
    electron: function () { return process.versions.electron; }
    // we can also expose variables, not just functions
});
