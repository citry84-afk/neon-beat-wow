// NEON BEAT STAGE - FIXES QUE FUNCIONAN v2.3
// Solo las optimizaciones que no rompen el juego

// ========================================
// 1. SHARING VIRAL SIMPLE
// ========================================

function shareNeonBeatNative() {
    const score = gameState.score || 0;
    const combo = gameState.combo || 0;
    const level = gameState.level || 1;
    
    // Capturar momento épico
    captureNeonBeatMoment();
    
    // Mostrar modal de sharing
    showNeonBeatShareModal(score, combo, level);
}

function captureNeonBeatMoment() {
    // Crear canvas temporal para captura
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 600;
    
    // Fondo degradado épico
    const gradient = ctx.createLinearGradient(0, 0, 0, 600);
    gradient.addColorStop(0, '#FF0080');
    gradient.addColorStop(0.5, '#00FFFF');
    gradient.addColorStop(1, '#8000FF');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 600);
    
    // Texto épico
    ctx.fillStyle = 'white';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('NEON BEAT STAGE', 200, 100);
    
    ctx.font = 'bold 48px Arial';
    ctx.fillText(`${gameState.score || 0} PUNTOS`, 200, 200);
    
    ctx.font = 'bold 24px Arial';
    ctx.fillText(`COMBO ${gameState.combo || 0}`, 200, 250);
    
    ctx.font = 'bold 20px Arial';
    ctx.fillText(`NIVEL ${gameState.level || 1}`, 200, 300);
    
    ctx.font = 'bold 18px Arial';
    ctx.fillText('¿Puedes superarme?', 200, 350);
    
    // Convertir a imagen
    const dataURL = canvas.toDataURL('image/png');
    
    // Descargar automáticamente
    const link = document.createElement('a');
    link.download = `neon-beat-epic-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
}

function showNeonBeatShareModal(score, combo, level) {
    const modal = document.createElement('div');
    modal.className = 'neon-beat-share-modal';
    modal.innerHTML = `
        <div class="neon-beat-share-content">
            <h3>🎵 ¡MOMENTO ÉPICO CAPTURADO!</h3>
            <div class="score-display">
                <div class="score-number">${score}</div>
                <div class="score-label">PUNTOS</div>
                <div class="combo-badge">COMBO ${combo}</div>
                <div class="level-badge">NIVEL ${level}</div>
            </div>
            <p>¡Comparte tu ritmo y desafía a tus amigos!</p>
            <div class="share-buttons">
                <button onclick="shareToTikTok(${score}, ${combo}, ${level})" class="share-btn tiktok">🎵 TikTok</button>
                <button onclick="shareToInstagram(${score}, ${combo}, ${level})" class="share-btn instagram">📷 Instagram</button>
                <button onclick="shareToTwitter(${score}, ${combo}, ${level})" class="share-btn twitter">🐦 Twitter</button>
                <button onclick="shareToFacebook(${score}, ${combo}, ${level})" class="share-btn facebook">📘 Facebook</button>
                <button onclick="shareToYouTube(${score}, ${combo}, ${level})" class="share-btn youtube">📺 YouTube</button>
                <button onclick="shareToWhatsApp(${score}, ${combo}, ${level})" class="share-btn whatsapp">💬 WhatsApp</button>
            </div>
            <button onclick="closeNeonBeatShareModal()" class="close-btn">✕</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

function shareToTikTok(score, combo, level) {
    const modal = document.createElement('div');
    modal.className = 'tiktok-modal';
    modal.innerHTML = `
        <div class="tiktok-content">
            <h3>🎵 Compartir en TikTok</h3>
            <p>1. La imagen épica se ha descargado</p>
            <p>2. Abre TikTok</p>
            <p>3. Crea un video con la imagen</p>
            <p>4. Añade el hashtag #NeonBeatStage</p>
            <p>5. Desafía a tus amigos: "¿Pueden superar mis ${score} puntos?"</p>
            <button onclick="closeTikTokModal()" class="btn">✅ Entendido</button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

function shareToInstagram(score, combo, level) {
    const modal = document.createElement('div');
    modal.className = 'instagram-modal';
    modal.innerHTML = `
        <div class="instagram-content">
            <h3>📷 Compartir en Instagram</h3>
            <p>1. La imagen épica se ha descargado</p>
            <p>2. Abre Instagram Stories</p>
            <p>3. Sube la imagen</p>
            <p>4. Añade el hashtag #NeonBeatStage</p>
            <p>5. Desafía a tus amigos: "¿Pueden superar mis ${score} puntos?"</p>
            <button onclick="closeInstagramModal()" class="btn">✅ Entendido</button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

function shareToTwitter(score, combo, level) {
    const text = `🎵 ¡Acabo de conseguir ${score} puntos y combo ${combo} en Neon Beat Stage! ¿Puedes superarme? #NeonBeatStage #RhythmGame #Gaming`;
    const url = window.location.href;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank');
    closeNeonBeatShareModal();
}

function shareToFacebook(score, combo, level) {
    const text = `🎵 ¡Mira mi ritmo de ${score} puntos en Neon Beat Stage!`;
    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
    closeNeonBeatShareModal();
}

function shareToYouTube(score, combo, level) {
    const modal = document.createElement('div');
    modal.className = 'youtube-modal';
    modal.innerHTML = `
        <div class="youtube-content">
            <h3>�� Compartir en YouTube</h3>
            <p>1. La imagen épica se ha descargado</p>
            <p>2. Crea un video corto con la imagen</p>
            <p>3. Añade el título: "Neon Beat Stage - ${score} Puntos"</p>
            <p>4. Añade el hashtag #NeonBeatStage</p>
            <p>5. Desafía a tus suscriptores</p>
            <button onclick="closeYouTubeModal()" class="btn">✅ Entendido</button>
        </div>
    `;
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);
}

function shareToWhatsApp(score, combo, level) {
    const text = `🎵 ¡Acabo de conseguir ${score} puntos en Neon Beat Stage! ¿Puedes superarme? Juega aquí: ${window.location.href}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
    closeNeonBeatShareModal();
}

// ========================================
// 3. FUNCIONES DE CIERRE
// ========================================

function closeNeonBeatShareModal() {
    const modal = document.querySelector('.neon-beat-share-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

function closeTikTokModal() {
    const modal = document.querySelector('.tiktok-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

function closeInstagramModal() {
    const modal = document.querySelector('.instagram-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

function closeYouTubeModal() {
    const modal = document.querySelector('.youtube-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    }
}

// ========================================
// 4. ESTILOS CSS VIRALES
// ========================================

const neonBeatStyles = `
<style>
/* Modal de sharing viral */
.neon-beat-share-modal, .tiktok-modal, .instagram-modal, .youtube-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s;
}

.neon-beat-share-modal.show, .tiktok-modal.show, .instagram-modal.show, .youtube-modal.show {
    opacity: 1;
}

.neon-beat-share-content, .tiktok-content, .instagram-content, .youtube-content {
    background: linear-gradient(135deg, #FF0080, #00FFFF, #8000FF);
    padding: 2rem;
    border-radius: 25px;
    text-align: center;
    color: white;
    max-width: 500px;
    width: 90%;
    position: relative;
    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
}

.score-display {
    background: rgba(0,0,0,0.3);
    padding: 2rem;
    border-radius: 20px;
    margin: 1.5rem 0;
    border: 3px solid white;
}

.score-number {
    font-size: 4rem;
    font-weight: bold;
    color: #00FFFF;
    text-shadow: 0 0 20px #00FFFF;
}

.score-label {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0.5rem 0;
}

.combo-badge, .level-badge {
    background: linear-gradient(45deg, #FF0080, #8000FF);
    padding: 0.5rem 1rem;
    border-radius: 25px;
    font-weight: bold;
    display: inline-block;
    margin: 0.5rem;
}

.share-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 2rem 0;
}

.share-btn {
    padding: 1.2rem;
    border: none;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 1.1rem;
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.share-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.4);
}

.share-btn.tiktok { background: linear-gradient(45deg, #ff0050, #ff4081); }
.share-btn.instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
.share-btn.twitter { background: #1da1f2; }
.share-btn.facebook { background: #4267b2; }
.share-btn.youtube { background: #ff0000; }
.share-btn.whatsapp { background: #25d366; }

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    opacity: 0.7;
}

.close-btn:hover {
    opacity: 1;
}
</style>
`;

// Inyectar estilos virales
document.head.insertAdjacentHTML('beforeend', neonBeatStyles);
