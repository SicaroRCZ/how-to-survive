// Copie la version web (../web) dans www/ pour Capacitor, sans le service worker (inutile en natif).
const fs = require("fs"), path = require("path");
const src = path.join(__dirname, "..", "..", "web"), dst = path.join(__dirname, "..", "www");
fs.rmSync(dst, { recursive: true, force: true });
fs.cpSync(src, dst, { recursive: true, filter: s => !s.endsWith("sw.js") && !s.endsWith(".nojekyll") });
console.log("Version web copiée dans www/");
