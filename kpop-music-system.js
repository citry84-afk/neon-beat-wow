// ========== K-POP MUSIC SYSTEM ==========

// Game state enhancement
if (!window.gameState) window.gameState = {};
window.gameState.combo = 0;
window.gameState.maxCombo = 0;
window.gameState.perfectHits = 0;
window.gameState.score = 0;
window.gameState.bpm = 140; // Higher BPM for K-pop energy

// ========== ENHANCED HANDLEINPUT WITH COMBOS ==========
const originalHandleInput = window.handleInput;
window.handleInput = function(lane) {
    
    // Increment combo and score
    window.gameState.combo++;
    window.gameState.perfectHits++;
    window.gameState.score += 100 * Math.max(1, Math.floor(window.gameState.combo / 5));
    
    if (window.gameState.combo > window.gameState.maxCombo) {
        window.gameState.maxCombo = window.gameState.combo;
    }
    
    // Update UI
    updateGameUI();
    
    // Call original effect
    if (originalHandleInput) {
        originalHandleInput(lane);
    }
    
    // Enhanced effects based on combo
    createComboEffect(lane);
    
    // Trigger music layers
    updateMusicLayers();
    
    // Haptic feedback based on combo
    if (navigator.vibrate) {
        if (window.gameState.combo > 20) {
            navigator.vibrate([30, 30, 30, 30, 100]); // Epic combo
        } else if (window.gameState.combo > 10) {
            navigator.vibrate([50, 50, 100]); // Good combo
        } else {
            navigator.vibrate([50, 100]); // Normal hit
        }
    }
};

// ========== COMBO VISUAL EFFECTS ==========
function createComboEffect(lane) {
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;
    
    const combo = window.gameState.combo;
    const laneCenter = (lane * 25) + 12.5;
    
    // Combo multiplier text
    if (combo > 1) {
        const comboText = document.createElement('div');
        comboText.style.position = 'absolute';
        comboText.style.left = laneCenter + '%';
        comboText.style.bottom = '30%';
        comboText.style.transform = 'translate(-50%, 0)';
        comboText.style.pointerEvents = 'none';
        comboText.style.zIndex = '1001';
        comboText.style.fontFamily = 'Orbitron, monospace';
        comboText.style.fontWeight = 'bold';
        comboText.style.animation = 'comboFloat 1.2s ease-out forwards';
        
        if (combo >= 50) {
            comboText.textContent = `🔥 COMBO x${combo} 🔥`;
            comboText.style.fontSize = '28px';
            comboText.style.color = '#FF0080';
            comboText.style.textShadow = '0 0 30px #FF0080, 0 0 60px #FF0080';
        } else if (combo >= 20) {
            comboText.textContent = `⚡ COMBO x${combo} ⚡`;
            comboText.style.fontSize = '24px';
            comboText.style.color = '#FFFF00';
            comboText.style.textShadow = '0 0 25px #FFFF00';
        } else if (combo >= 10) {
            comboText.textContent = `✨ COMBO x${combo} ✨`;
            comboText.style.fontSize = '20px';
            comboText.style.color = '#00FFFF';
            comboText.style.textShadow = '0 0 20px #00FFFF';
        } else {
            comboText.textContent = `COMBO x${combo}`;
            comboText.style.fontSize = '16px';
            comboText.style.color = '#FFFFFF';
            comboText.style.textShadow = '0 0 15px #FFFFFF';
        }
        
        gameArea.appendChild(comboText);
        
        setTimeout(() => {
            if (comboText.parentNode) comboText.parentNode.removeChild(comboText);
        }, 1200);
    }
    
    // Screen shake for high combos
    if (combo > 0 && combo % 10 === 0) {
        gameArea.style.animation = 'screenShake 0.3s ease-out';
        setTimeout(() => {
            gameArea.style.animation = '';
        }, 300);
    }
}

// ========== K-POP MUSIC LAYERS ==========
let musicContext = null;
let bassOscillator = null;
let melodyOscillator = null;
let harmonyOscillator = null;

function initKPopMusic() {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    try {
        musicContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
    }
}

function updateMusicLayers() {
    if (!musicContext) initKPopMusic();
    if (!musicContext) return;
    
    const combo = window.gameState.combo;
    const perfectHits = window.gameState.perfectHits;
    
    try {
        // Bass layer (always playing when combo > 0)
        if (combo > 0 && !bassOscillator) {
            bassOscillator = musicContext.createOscillator();
            const bassGain = musicContext.createGain();
            bassOscillator.connect(bassGain);
            bassGain.connect(musicContext.destination);
            
            bassOscillator.type = 'sine';
            bassOscillator.frequency.value = 65; // Low C
            bassGain.gain.value = 0.15;
            bassOscillator.start();
            
            // Bass pattern
            const bassPattern = [65, 73, 55, 62]; // C, D, G, B
            let bassIndex = 0;
            setInterval(() => {
                if (bassOscillator && combo > 0) {
                    bassOscillator.frequency.value = bassPattern[bassIndex % bassPattern.length];
                    bassIndex++;
                }
            }, 500);
        }
        
        // Melody layer (combo > 5)
        if (combo > 5 && !melodyOscillator) {
            melodyOscillator = musicContext.createOscillator();
            const melodyGain = musicContext.createGain();
            melodyOscillator.connect(melodyGain);
            melodyGain.connect(musicContext.destination);
            
            melodyOscillator.type = 'triangle';
            melodyOscillator.frequency.value = 523; // High C
            melodyGain.gain.value = 0.10;
            melodyOscillator.start();
            
            // K-pop melody pattern
            const melodyPattern = [523, 587, 659, 698, 784, 659, 587, 523];
            let melodyIndex = 0;
            setInterval(() => {
                if (melodyOscillator && combo > 5) {
                    melodyOscillator.frequency.value = melodyPattern[melodyIndex % melodyPattern.length];
                    melodyIndex++;
                }
            }, 300);
        }
        
        // Harmony layer (combo > 15)
        if (combo > 15 && !harmonyOscillator) {
            harmonyOscillator = musicContext.createOscillator();
            const harmonyGain = musicContext.createGain();
            harmonyOscillator.connect(harmonyGain);
            harmonyGain.connect(musicContext.destination);
            
            harmonyOscillator.type = 'sawtooth';
            harmonyOscillator.frequency.value = 330; // E
            harmonyGain.gain.value = 0.08;
            harmonyOscillator.start();
        }
        
    } catch (e) {
    }
}

// ========== UI UPDATES ==========
function updateGameUI() {
    const scoreElement = document.getElementById('score');
    const comboElement = document.getElementById('combo');
    
    if (scoreElement) {
        scoreElement.textContent = window.gameState.score;
        
        // Score color based on value
        if (window.gameState.score > 5000) {
            scoreElement.style.color = '#FF0080';
            scoreElement.style.textShadow = '0 0 20px #FF0080';
        } else if (window.gameState.score > 1000) {
            scoreElement.style.color = '#FFFF00';
            scoreElement.style.textShadow = '0 0 15px #FFFF00';
        }
    }
    
    if (comboElement) {
        comboElement.textContent = window.gameState.combo;
        
        // Combo color and effects
        if (window.gameState.combo >= 50) {
            comboElement.style.color = '#FF0080';
            comboElement.style.textShadow = '0 0 25px #FF0080';
            comboElement.style.animation = 'pulse 0.5s infinite';
        } else if (window.gameState.combo >= 20) {
            comboElement.style.color = '#FFFF00';
            comboElement.style.textShadow = '0 0 20px #FFFF00';
        } else if (window.gameState.combo >= 10) {
            comboElement.style.color = '#00FFFF';
            comboElement.style.textShadow = '0 0 15px #00FFFF';
        } else {
            comboElement.style.color = '#FFFFFF';
            comboElement.style.textShadow = 'none';
            comboElement.style.animation = 'none';
        }
    }
}

// Add CSS animations
if (!document.getElementById('kpop-animations')) {
    const style = document.createElement('style');
    style.id = 'kpop-animations';
    style.textContent = `
        @keyframes comboFloat {
            0% { transform: translate(-50%, 0) scale(0.5); opacity: 0; }
            20% { transform: translate(-50%, 0) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -80px) scale(1); opacity: 0; }
        }
        
        @keyframes screenShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        .combo-display, .score-display {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize when script loads
document.addEventListener('DOMContentLoaded', () => {
    initKPopMusic();
});

