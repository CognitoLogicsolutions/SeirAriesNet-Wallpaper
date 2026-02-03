\f0\fs24 \cf0 et totalValue = Number(localStorage.getItem('paul_balance') || 0);\
let autoInterval = null;\
\

const display = document.getElementById('balance-display');\

const container = document.getElementById('asset-container');\
\
function updateUI() \{\
    display.textContent = `$$\{totalValue.toLocaleString()\}`;\
    localStorage.setItem('paul_balance', totalValue);\
\}\
\
function log(msg) \{\
    const line = document.createElement('div');\
    line.className = 'asset-line';\
    line.textContent = `> $\{new Date().toLocaleTimeString()\}: $\{msg\}`;\
    container.prepend(line);\
\}\
\
document.getElementById('mine-asset-btn').onclick = () => \{\
    totalValue += 100;\
    updateUI();\
    log("Asset Mined +$100");\
\};\
\
document.getElementById('auto-btn').onclick = () => \{\
    if (autoInterval) \{\
        clearInterval(autoInterval);\
        autoInterval = null;\
        log("Auto-Miner Offline");\
    \} else \{\
        autoInterval = setInterval(() => \{\
            totalValue += 10;\
            updateUI();\
        \}, 1000);\
        log("Auto-Miner Online");\
    \}\
\};\
\
document.getElementById('reset-btn').onclick = () => \{\
    totalValue = 0;\
    updateUI();\
    container.innerHTML = '';\
    log("System Reset");\
\};\
\
updateUI();\
log("SeirAriesNet Grid Initialized.");\
}