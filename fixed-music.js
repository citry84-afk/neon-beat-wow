// ========== FIXED MUSIC SYSTEM ==========
let musicInitialized = false;
let audioCtx = null;
let currentOscillators = [];

// Simple music system without overlapping
window.playSimpleHit = function(lane) {
    if (!audioCtx) {
        try {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            return; // No audio support
        }
    }
    
    // Stop any existing sounds
    currentOscillators.forEach(osc => {
        try { osc.stop(); } catch (e) {}
    });
    currentOscillators = [];
    
    try {
        // Simple hit sound
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        // Different frequency per lane
        const frequencies = [440, 523, 659, 784]; // A, C, E, G
        osc.frequency.value = frequencies[lane] || 440;
        osc.type = 'sine';
        
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.3);
        
        currentOscillators.push(osc);
        
    } catch (e) {
        // Audio error, ignore
    }
};

// Enhanced handleInput without crazy music
const originalHandleInput = window.handleInput;
window.handleInput = function(lane) {
    // Update simple game state
    if (!window.gameState) window.gameState = {};
    window.gameState.combo = (window.gameState.combo || 0) + 1;
    window.gameState.score = (window.gameState.score || 0) + (100 * Math.max(1, Math.floor(window.gameState.combo / 5)));
    
    // Update UI
    const scoreEl = document.getElementById('score');
    const comboEl = document.getElementById('combo');
    if (scoreEl) scoreEl.textContent = window.gameState.score;
    if (comboEl) comboEl.textContent = window.gameState.combo;
    
    // Simple audio feedback
    window.playSimpleHit(lane);
    
    // Call original visual effects
    if (originalHandleInput) {
        originalHandleInput(lane);
    }
};
