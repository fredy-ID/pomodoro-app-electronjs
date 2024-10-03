"use strict";
// interface Versions {
//     chrome: () => string;
//     node: () => string;
//     electron: () => string;
// }
// const versions: Versions = (window as any).versions;
var information = document.getElementById('info');
information.innerText = "This app is using Chrome (v".concat(versions.chrome(), "), Node.js (v").concat(versions.node(), "), and Electron (v").concat(versions.electron(), ")");
