// NEON BEAT STAGE - OPTIMIZACIONES K-POP VIRAL
// v2.0 - K-POP Social Media Revenue Optimization

// ========================================
// 1. VIRAL FEATURES ESPECÍFICAS PARA K-POP
// ========================================

// Captura automática de momentos épicos de baile para TikTok/Instagram
function captureKPopMoment() {
    const canvas = document.getElementById('gameCanvas');
    if (!canvas) return;
    
    const dataURL = canvas.toDataURL('image/png');
    
    // Crear elemento temporal para descarga
    const link = document.createElement('a');
    link.download = `neon-beat-kpop-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
    
    // Mostrar prompt de sharing específico para K-pop style
    showKPopSharePrompt();
}

// Prompt de sharing específico para K-pop style y baile
function showKPopSharePrompt() {
    const modal = document.createElement('div');
    modal.className = 'kpop-share-modal';
    modal.innerHTML = `
        <div class="kpop-share-content">
            <h3>🎤 ¡Momento K-POP Épico Capturado!</h3>
            <p>¡Comparte tu coreografía increíble en redes sociales!</p>
            <div class="kpop-social-buttons">
                <button onclick="shareToTikTokKPop()" class="kpop-social-btn tiktok">🎵 TikTok</button>
                <button onclick="shareToInstagramKPop()" class="kpop-social-btn instagram">📷 Instagram</button>
                <button onclick="shareToYouTubeKPop()" class="kpop-social-btn youtube">🎥 YouTube</button>
                <button onclick="shareToFacebookKPop()" class="kpop-social-btn facebook">📘 Facebook</button>
                <button onclick="shareToTwitterKPop()" class="kpop-social-btn twitter">🐦 X (Twitter)</button>
            </div>
            <div class="kpop-hashtag-suggestions">
                <h4>Hashtags K-POP sugeridos:</h4>
                <div class="kpop-hashtags">
                    <span class="kpop-hashtag">#NeonBeatStage</span>
                    <span class="kpop-hashtag">#RhythmGame</span>
                    <span class="kpop-hashtag">#RhythmGame</span>
                    <span class="kpop-hashtag">#DanceChallenge</span>
                    <span class="kpop-hashtag">#KPopViral</span>
                    <span class="kpop-hashtag">#DanceChallenge</span>
                    <span class="kpop-hashtag">#DanceBattle</span>
                    <span class="kpop-hashtag">#LIPAStudios</span>
                </div>
            </div>
            <div class="kpop-challenge-prompt">
                <h4>🎯 Challenge K-POP:</h4>
                <p>¿Puedes superar mi combo de ${gameState.combo || 0}? ¡Demuéstralo!</p>
            </div>
            <button onclick="closeKPopShareModal()" class="close-btn">✕</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

// Sharing específico para TikTok con temática K-pop style
function shareToTikTokKPop() {
    const combo = gameState.combo || 0;
    const score = gameState.score || 0;
    const text = `🎤 ¡Acabo de hacer un combo de ${combo} en Neon Beat Stage! ¿Puedes superar mi coreografía K-pop style? #NeonBeatStage #RhythmGame #DanceChallenge #DanceChallenge #TikTokGaming`;
    const url = window.location.href;
    
    // Abrir TikTok con el texto pre-formateado
    const shareUrl = `https://www.tiktok.com/upload?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
    
    // Tracking específico para K-pop style
    window.trackEvent('tiktok_kpop_share_attempt', {
        combo: combo,
        score: score,
        game_type: 'rhythm'
    });
    
    closeKPopShareModal();
}

// Sharing específico para Instagram con temática K-pop style
function shareToInstagramKPop() {
    const combo = gameState.combo || 0;
    const score = gameState.score || 0;
    
    // Crear imagen optimizada para Instagram Stories con temática K-pop style
    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        const dataURL = canvas.toDataURL('image/png');
        
        // Crear imagen con overlay para Instagram Stories
        const img = new Image();
        img.onload = function() {
            const canvas2 = document.createElement('canvas');
            const ctx2 = canvas2.getContext('2d');
            
            // Tamaño optimizado para Instagram Stories (1080x1920)
            canvas2.width = 1080;
            canvas2.height = 1920;
            
            // Dibujar el juego escalado
            ctx2.drawImage(img, 0, 0, 1080, 1920);
            
            // Añadir overlay con temática K-pop style
            ctx2.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx2.fillRect(0, 0, 1080, 1920);
            
            // Título K-pop style
            ctx2.fillStyle = '#FF0080';
            ctx2.font = 'bold 80px Arial';
            ctx2.textAlign = 'center';
            ctx2.fillText(`🎤 K-POP DANCE`, 540, 600);
            
            // Estadísticas
            ctx2.fillStyle = '#00FFFF';
            ctx2.font = 'bold 60px Arial';
            ctx2.fillText(`Combo: ${combo}`, 540, 800);
            ctx2.fillText(`Score: ${score}`, 540, 900);
            
            // Hashtags
            ctx2.fillStyle = '#FFD700';
            ctx2.font = 'bold 40px Arial';
            ctx2.fillText(`#NeonBeatStage`, 540, 1100);
            ctx2.fillText(`#RhythmGame`, 540, 1200);
            ctx2.fillText(`#DanceChallenge`, 540, 1300);
            
            // Descargar imagen optimizada
            const link = document.createElement('a');
            link.download = `neon-beat-kpop-instagram-${Date.now()}.png`;
            link.href = canvas2.toDataURL('image/png');
            link.click();
        };
        img.src = dataURL;
    }
    
    // Mostrar instrucciones para Instagram
    showKPopInstagramInstructions();
}

function showKPopInstagramInstructions() {
    const modal = document.createElement('div');
    modal.className = 'kpop-instagram-instructions-modal';
    modal.innerHTML = `
        <div class="kpop-instagram-instructions-content">
            <h3>📷 Compartir en Instagram</h3>
            <div class="kpop-steps">
                <div class="kpop-step">
                    <span class="kpop-step-number">1</span>
                    <p>La imagen K-pop style optimizada se ha descargado</p>
                </div>
                <div class="kpop-step">
                    <span class="kpop-step-number">2</span>
                    <p>Abre Instagram Stories</p>
                </div>
                <div class="kpop-step">
                    <span class="kpop-step-number">3</span>
                    <p>Sube la imagen descargada</p>
                </div>
                <div class="kpop-step">
                    <span class="kpop-step-number">4</span>
                    <p>Añade los hashtags: #NeonBeatStage #RhythmGame #DanceChallenge</p>
                </div>
                <div class="kpop-step">
                    <span class="kpop-step-number">5</span>
                    <p>¡Etiqueta a tus amigos para el challenge!</p>
                </div>
            </div>
            <button onclick="closeKPopInstagramInstructions()" class="btn">✅ Entendido</button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

// Sharing específico para YouTube con temática K-pop style
function shareToYouTubeKPop() {
    const combo = gameState.combo || 0;
    const score = gameState.score || 0;
    const text = `🎤 ¡Increíble coreografía K-pop style de ${combo} combo en Neon Beat Stage! ¿Puedes superar mi baile? #NeonBeatStage #RhythmGame #DanceChallenge #DanceChallenge #YouTubeGaming`;
    const url = window.location.href;
    
    // Abrir YouTube con el texto pre-formateado
    const shareUrl = `https://www.youtube.com/upload?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
    
    closeKPopShareModal();
}

// Sharing específico para Facebook con temática K-pop style
function shareToFacebookKPop() {
    const combo = gameState.combo || 0;
    const score = gameState.score || 0;
    const text = `🎤 ¡Acabo de hacer un combo de ${combo} en Neon Beat Stage! ¿Puedes superar mi coreografía K-pop style? ¡Únete al challenge!`;
    const url = window.location.href;
    
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
    
    closeKPopShareModal();
}

// Sharing específico para X (Twitter) con temática K-pop style
function shareToTwitterKPop() {
    const combo = gameState.combo || 0;
    const score = gameState.score || 0;
    const text = `🎤 ¡Combo de ${combo} en Neon Beat Stage! ¿Puedes superar mi coreografía K-pop style? #NeonBeatStage #RhythmGame #DanceChallenge #DanceChallenge #XGaming`;
    const url = window.location.href;
    
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
    
    closeKPopShareModal();
}

function closeKPopShareModal() {
    const modal = document.querySelector('.kpop-share-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

function closeKPopInstagramInstructions() {
    const modal = document.querySelector('.kpop-instagram-instructions-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// ========================================
// 2. RETENCIÓN & ENGAGEMENT ESPECÍFICO PARA K-POP
// ========================================

// Sistema de logros específico para rhythm game K-pop style
const kpopAchievements = {
    firstBeat: { unlocked: false, name: "Primer Beat", reward: 100, description: "Golpea tu primer beat" },
    fiveCombo: { unlocked: false, name: "Combo de 5", reward: 200, description: "Haz un combo de 5" },
    tenCombo: { unlocked: false, name: "Combo de 10", reward: 500, description: "Haz un combo de 10" },
    twentyCombo: { unlocked: false, name: "Combo de 20", reward: 1000, description: "Haz un combo de 20" },
    perfectTiming: { unlocked: false, name: "Timing Perfecto", reward: 800, description: "Haz 10 hits perfectos seguidos" },
    danceMaster: { unlocked: false, name: "Maestro del Baile", reward: 1200, description: "Completa una canción sin fallar" },
    kpopStar: { unlocked: false, name: "Estrella K-pop style", reward: 1500, description: "Alcanza 1000 puntos" },
    rhythmKing: { unlocked: false, name: "Rey del Ritmo", reward: 2000, description: "Alcanza 5000 puntos" }
};

// Sistema de power-ups específico para rhythm game K-pop style
const kpopPowerUps = {
    perfectMode: { name: "Modo Perfecto", cost: 300, duration: 15000, description: "Todos los hits son perfectos" },
    comboMultiplier: { name: "Multiplicador de Combo", cost: 250, duration: 20000, description: "Duplica los puntos del combo" },
    slowMotion: { name: "Cámara Lenta", cost: 200, duration: 12000, description: "Ralentiza el ritmo" },
    extraLife: { name: "Vida Extra", cost: 500, description: "Te da una segunda oportunidad" },
    perfectGuide: { name: "Guía Perfecta", cost: 400, duration: 25000, description: "Muestra la posición exacta" }
};

// Monedas del juego K-pop style
let kpopCoins = parseInt(localStorage.getItem('neonBeatKPopCoins') || '0');

// Mostrar notificación de logro K-pop style
function showKPopAchievement(achievement) {
    const notification = document.createElement('div');
    notification.className = 'kpop-achievement-notification';
    notification.innerHTML = `
        <div class="kpop-achievement-content">
            <div class="kpop-achievement-icon">🎤</div>
            <div class="kpop-achievement-text">
                <h4>¡Logro K-POP Desbloqueado!</h4>
                <p>${achievement.name}</p>
                <span class="kpop-reward">+${achievement.reward} monedas</span>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
    
    // Añadir monedas
    kpopCoins += achievement.reward;
    localStorage.setItem('neonBeatKPopCoins', kpopCoins.toString());
    updateKPopCoinsDisplay();
}

// Verificar logros específicos del rhythm game K-pop style
function checkKPopAchievements() {
    const combo = gameState.combo || 0;
    const score = gameState.score || 0;
    const perfectHits = gameState.perfectHits || 0;
    
    if (combo >= 1 && !kpopAchievements.firstBeat.unlocked) {
        kpopAchievements.firstBeat.unlocked = true;
        showKPopAchievement(kpopAchievements.firstBeat);
    }
    
    if (combo >= 5 && !kpopAchievements.fiveCombo.unlocked) {
        kpopAchievements.fiveCombo.unlocked = true;
        showKPopAchievement(kpopAchievements.fiveCombo);
    }
    
    if (combo >= 10 && !kpopAchievements.tenCombo.unlocked) {
        kpopAchievements.tenCombo.unlocked = true;
        showKPopAchievement(kpopAchievements.tenCombo);
    }
    
    if (combo >= 20 && !kpopAchievements.twentyCombo.unlocked) {
        kpopAchievements.twentyCombo.unlocked = true;
        showKPopAchievement(kpopAchievements.twentyCombo);
    }
    
    if (perfectHits >= 10 && !kpopAchievements.perfectTiming.unlocked) {
        kpopAchievements.perfectTiming.unlocked = true;
        showKPopAchievement(kpopAchievements.perfectTiming);
    }
    
    if (score >= 1000 && !kpopAchievements.kpopStar.unlocked) {
        kpopAchievements.kpopStar.unlocked = true;
        showKPopAchievement(kpopAchievements.kpopStar);
    }
    
    if (score >= 5000 && !kpopAchievements.rhythmKing.unlocked) {
        kpopAchievements.rhythmKing.unlocked = true;
        showKPopAchievement(kpopAchievements.rhythmKing);
    }
}

// ========================================
// 3. MONETIZACIÓN MEJORADA PARA K-POP VIRAL
// ========================================

// Reward ads más agresivos para usuarios de K-pop style
function showKPopRewardAd(powerUpType, callback) {
    const modal = document.createElement('div');
    modal.className = 'kpop-reward-ad-modal';
    modal.innerHTML = `
        <div class="kpop-reward-ad-content">
            <h3>🎬 Ver Anuncio para ${kpopPowerUps[powerUpType].name}</h3>
            <p>Mira un anuncio de 30 segundos para obtener este power-up K-pop style gratis</p>
            <div class="kpop-ad-simulation">
                <div class="kpop-ad-video">
                    <div class="kpop-ad-progress"></div>
                    <p>Anuncio en reproducción...</p>
                    <div class="kpop-ad-brand">LIPA Studios - K-POP Gaming</div>
                </div>
            </div>
            <button onclick="completeKPopRewardAd('${powerUpType}', ${callback})" class="btn">✅ Obtener Power-up</button>
            <button onclick="closeKPopRewardAd()" class="btn secondary">❌ Cancelar</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
    
    // Simular progreso del anuncio
    const progressBar = modal.querySelector('.kpop-ad-progress');
    let progress = 0;
    const interval = setInterval(() => {
        progress += 2;
        progressBar.style.width = progress + '%';
        if (progress >= 100) {
            clearInterval(interval);
            modal.querySelector('button').disabled = false;
        }
    }, 100);
}

function completeKPopRewardAd(powerUpType, callback) {
    if (callback) callback();
    
    const modal = document.querySelector('.kpop-reward-ad-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
    
    showKPopNotification(`¡${kpopPowerUps[powerUpType].name} activado!`, 'success');
}

function closeKPopRewardAd() {
    const modal = document.querySelector('.kpop-reward-ad-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// Interstitial ads más frecuentes para usuarios de K-pop style
function showKPopInterstitialAd() {
    const lastAdTime = parseInt(localStorage.getItem('lastKPopInterstitialAd') || '0');
    const currentTime = Date.now();
    const adInterval = 2 * 60 * 1000; // 2 minutos (muy agresivo para K-pop style)
    
    if (currentTime - lastAdTime > adInterval) {
        const modal = document.createElement('div');
        modal.className = 'kpop-interstitial-ad-modal';
        modal.innerHTML = `
            <div class="kpop-interstitial-ad-content">
                <h3>📺 Anuncio K-POP</h3>
                <div class="kpop-ad-banner">
                    <p>Anuncio de 30 segundos</p>
                    <div class="kpop-ad-timer">30</div>
                    <div class="kpop-ad-brand">LIPA Studios - K-POP Gaming</div>
                </div>
                <button onclick="closeKPopInterstitialAd()" class="btn">Continuar</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 100);
        
        // Timer del anuncio
        let timeLeft = 30;
        const timer = setInterval(() => {
            timeLeft--;
            modal.querySelector('.kpop-ad-timer').textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(timer);
                modal.querySelector('button').disabled = false;
            }
        }, 1000);
        
        localStorage.setItem('lastKPopInterstitialAd', currentTime.toString());
    }
}

function closeKPopInterstitialAd() {
    const modal = document.querySelector('.kpop-interstitial-ad-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// ========================================
// 4. UI MEJORADA PARA K-POP
// ========================================

// Actualizar display de monedas K-pop style
function updateKPopCoinsDisplay() {
    let coinsDisplay = document.getElementById('kpopCoinsDisplay');
    if (!coinsDisplay) {
        coinsDisplay = document.createElement('div');
        coinsDisplay.id = 'kpopCoinsDisplay';
        coinsDisplay.className = 'kpop-coins-display';
        document.querySelector('.ui').appendChild(coinsDisplay);
    }
    coinsDisplay.innerHTML = `🎤 ${kpopCoins}`;
}

// Mostrar notificación K-pop style
function showKPopNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `kpop-notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// 5. ESTILOS CSS ESPECÍFICOS PARA K-POP
// ========================================

const kpopStyles = `
<style>
/* Modales de sharing para K-pop style */
.kpop-share-modal, .kpop-instagram-instructions-modal, .kpop-reward-ad-modal, .kpop-interstitial-ad-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s;
}

.kpop-share-modal.show, .kpop-instagram-instructions-modal.show, .kpop-reward-ad-modal.show, .kpop-interstitial-ad-modal.show {
    opacity: 1;
}

.kpop-share-content, .kpop-instagram-instructions-content, .kpop-reward-ad-content, .kpop-interstitial-ad-content {
    background: linear-gradient(135deg, #FF0080, #00FFFF, #FFD700);
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    color: white;
    max-width: 600px;
    width: 90%;
    position: relative;
    animation: kpopPulse 2s infinite;
}

@keyframes kpopPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
}

.kpop-social-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1.5rem 0;
}

.kpop-social-btn {
    padding: 1rem;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.1rem;
    animation: kpopBounce 1s infinite;
}

@keyframes kpopBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
}

.kpop-social-btn:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
}

.kpop-social-btn.tiktok { background: #000; color: white; }
.kpop-social-btn.instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; }
.kpop-social-btn.youtube { background: #FF0000; color: white; }
.kpop-social-btn.facebook { background: #4267b2; color: white; }
.kpop-social-btn.twitter { background: #1da1f2; color: white; }

.kpop-hashtag-suggestions {
    margin: 1.5rem 0;
    text-align: left;
}

.kpop-hashtag-suggestions h4 {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #FFD700;
}

.kpop-hashtags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.kpop-hashtag {
    background: rgba(255, 255, 255, 0.2);
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.kpop-hashtag:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.kpop-challenge-prompt {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 15px;
    margin: 1.5rem 0;
    border: 2px solid #FFD700;
}

.kpop-challenge-prompt h4 {
    color: #FFD700;
    margin-bottom: 0.5rem;
}

.kpop-instructions .kpop-steps {
    text-align: left;
    margin: 1.5rem 0;
}

.kpop-step {
    display: flex;
    align-items: center;
    margin: 1rem 0;
    gap: 1rem;
}

.kpop-step-number {
    background: #FF0080;
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.2rem;
}

/* Display de monedas K-pop style */
.kpop-coins-display {
    position: fixed;
    top: 20px;
    left: 20px;
    background: linear-gradient(135deg, #FF0080, #00FFFF);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: bold;
    z-index: 100;
    font-size: 1.1rem;
    animation: kpopGlow 2s infinite;
}

@keyframes kpopGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(255, 0, 128, 0.5); }
    50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.8); }
}

/* Notificaciones de logros K-pop style */
.kpop-achievement-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #FF0080, #00FFFF, #FFD700);
    color: white;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s;
    max-width: 350px;
    animation: kpopSlideIn 0.5s ease-out;
}

@keyframes kpopSlideIn {
    0% { transform: translateX(100%) scale(0.8); }
    100% { transform: translateX(0) scale(1); }
}

.kpop-achievement-notification.show {
    transform: translateX(0);
}

.kpop-achievement-content {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.kpop-achievement-icon {
    font-size: 2.5rem;
    animation: kpopSpin 1s infinite;
}

@keyframes kpopSpin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.kpop-achievement-text h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
    color: #FFD700;
}

.kpop-achievement-text p {
    margin: 0 0 0.5rem 0;
    font-weight: bold;
    font-size: 1.1rem;
}

.kpop-reward {
    color: #FFD700;
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Anuncios simulados K-pop style */
.kpop-ad-simulation {
    background: #000;
    border-radius: 20px;
    padding: 2rem;
    margin: 1.5rem 0;
    border: 2px solid #FF0080;
}

.kpop-ad-progress {
    height: 8px;
    background: #333;
    border-radius: 4px;
    margin-bottom: 1rem;
    overflow: hidden;
}

.kpop-ad-progress::after {
    content: '';
    display: block;
    height: 100%;
    background: linear-gradient(90deg, #FF0080, #00FFFF, #FFD700);
    width: 0%;
    transition: width 0.1s;
    animation: kpopProgress 0.5s ease-in-out;
}

@keyframes kpopProgress {
    0% { width: 0%; }
    100% { width: 100%; }
}

.kpop-ad-brand {
    font-size: 1rem;
    opacity: 0.8;
    margin-top: 0.5rem;
    color: #FFD700;
    font-weight: bold;
}

.kpop-ad-banner {
    background: linear-gradient(135deg, #000, #333);
    color: white;
    padding: 2rem;
    border-radius: 20px;
    text-align: center;
    margin: 1.5rem 0;
    border: 2px solid #FF0080;
}

.kpop-ad-timer {
    font-size: 3rem;
    font-weight: bold;
    color: #FF0080;
    margin: 1rem 0;
    animation: kpopCountdown 1s infinite;
}

@keyframes kpopCountdown {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.3s;
}

.close-btn:hover {
    transform: scale(1.2);
    color: #FF0080;
}

/* Notificaciones generales K-pop style */
.kpop-notification {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 1rem 2rem;
    border-radius: 20px;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s;
    font-weight: bold;
    border: 2px solid #FF0080;
}

.kpop-notification.show {
    opacity: 1;
}

.kpop-notification.success { background: linear-gradient(135deg, #00FF00, #00CC00); }
.kpop-notification.error { background: linear-gradient(135deg, #FF0000, #CC0000); }
.kpop-notification.warning { background: linear-gradient(135deg, #FFD700, #FFA500); }
</style>
`;

// Inyectar estilos específicos para K-pop style
document.head.insertAdjacentHTML('beforeend', kpopStyles);
