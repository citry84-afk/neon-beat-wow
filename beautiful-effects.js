// ========== BEAUTIFUL TOUCH EFFECTS ==========
console.log('✨ Beautiful effects loading...');

// Override the simple handleInput with epic effects
window.handleInput = function(lane) {
    console.log('🎵 Epic handleInput called for lane:', lane);
    
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;
    
    // Calculate exact position
    const laneWidth = 25; // 25% per lane
    const laneCenter = (lane * laneWidth) + (laneWidth / 2);
    
    // ========== EPIC HIT EFFECT ==========
    const hitEffect = document.createElement('div');
    hitEffect.style.position = 'absolute';
    hitEffect.style.left = laneCenter + '%';
    hitEffect.style.bottom = '10%';
    hitEffect.style.width = '40px';
    hitEffect.style.height = '40px';
    hitEffect.style.background = 'radial-gradient(circle, #FF0080, #00FFFF)';
    hitEffect.style.borderRadius = '50%';
    hitEffect.style.transform = 'translate(-50%, 0) scale(0)';
    hitEffect.style.pointerEvents = 'none';
    hitEffect.style.zIndex = '999';
    hitEffect.style.boxShadow = '0 0 30px #FF0080, 0 0 60px #00FFFF';
    hitEffect.style.animation = 'hitBlast 0.6s ease-out forwards';
    gameArea.appendChild(hitEffect);
    
    // ========== PARTICLES EXPLOSION ==========
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = laneCenter + '%';
        particle.style.bottom = '10%';
        particle.style.width = '6px';
        particle.style.height = '6px';
        particle.style.background = i % 2 === 0 ? '#FF0080' : '#00FFFF';
        particle.style.borderRadius = '50%';
        particle.style.transform = 'translate(-50%, 0)';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '998';
        particle.style.boxShadow = '0 0 10px currentColor';
        
        // Random direction
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        particle.style.animation = `particle-${i} 0.8s ease-out forwards`;
        
        // Create keyframes for this particle
        const keyframes = `
            @keyframes particle-${i} {
                0% { transform: translate(-50%, 0) scale(1); opacity: 1; }
                100% { transform: translate(calc(-50% + ${endX}px), ${endY}px) scale(0); opacity: 0; }
            }
        `;
        
        // Add keyframes to head
        if (!document.getElementById('particle-styles')) {
            const style = document.createElement('style');
            style.id = 'particle-styles';
            document.head.appendChild(style);
        }
        document.getElementById('particle-styles').sheet.insertRule(keyframes, 0);
        
        gameArea.appendChild(particle);
        
        // Clean up particle
        setTimeout(() => {
            if (particle.parentNode) particle.parentNode.removeChild(particle);
        }, 800);
    }
    
    // ========== LANE FLASH ==========
    const laneFlash = document.createElement('div');
    laneFlash.style.position = 'absolute';
    laneFlash.style.left = (lane * 25) + '%';
    laneFlash.style.top = '0';
    laneFlash.style.width = '25%';
    laneFlash.style.height = '100%';
    laneFlash.style.background = 'linear-gradient(to bottom, rgba(255,0,128,0.3), rgba(0,255,255,0.3), rgba(255,255,0,0.3))';
    laneFlash.style.pointerEvents = 'none';
    laneFlash.style.zIndex = '997';
    laneFlash.style.animation = 'laneFlash 0.4s ease-out forwards';
    gameArea.appendChild(laneFlash);
    
    // ========== SCORE TEXT ==========
    const scoreText = document.createElement('div');
    scoreText.style.position = 'absolute';
    scoreText.style.left = laneCenter + '%';
    scoreText.style.bottom = '20%';
    scoreText.style.transform = 'translate(-50%, 0)';
    scoreText.style.color = '#FFFF00';
    scoreText.style.fontSize = '24px';
    scoreText.style.fontWeight = 'bold';
    scoreText.style.fontFamily = 'Orbitron, monospace';
    scoreText.style.textShadow = '0 0 20px #FFFF00';
    scoreText.style.pointerEvents = 'none';
    scoreText.style.zIndex = '999';
    scoreText.style.animation = 'scoreFloat 1s ease-out forwards';
    scoreText.textContent = '+100';
    gameArea.appendChild(scoreText);
    
    // Clean up effects
    setTimeout(() => {
        if (hitEffect.parentNode) hitEffect.parentNode.removeChild(hitEffect);
        if (laneFlash.parentNode) laneFlash.parentNode.removeChild(laneFlash);
        if (scoreText.parentNode) scoreText.parentNode.removeChild(scoreText);
    }, 1000);
    
    // ========== HAPTIC FEEDBACK ==========
    if (navigator.vibrate) {
        navigator.vibrate([50, 50, 100]);
    }
};

// Add CSS animations if not present
if (!document.getElementById('epic-animations')) {
    const style = document.createElement('style');
    style.id = 'epic-animations';
    style.textContent = `
        @keyframes hitBlast {
            0% { transform: translate(-50%, 0) scale(0); opacity: 1; }
            50% { transform: translate(-50%, 0) scale(1.5); opacity: 1; }
            100% { transform: translate(-50%, 0) scale(2); opacity: 0; }
        }
        
        @keyframes laneFlash {
            0% { opacity: 0.8; }
            100% { opacity: 0; }
        }
        
        @keyframes scoreFloat {
            0% { transform: translate(-50%, 0) scale(1); opacity: 1; }
            100% { transform: translate(-50%, -50px) scale(1.2); opacity: 0; }
        }
        
        .touch-zone {
            transition: all 0.1s ease !important;
        }
        
        .touch-zone:active {
            background: rgba(255, 255, 255, 0.2) !important;
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
}

console.log('✨ Beautiful effects loaded!');
