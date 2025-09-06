// ========== SIMPLE TOUCH SETUP ==========
function setupTouchControls() {
    console.log('🔧 Setting up touch controls...');
    
    const touchZones = document.querySelectorAll('.touch-zone');
    console.log('📱 Found touch zones:', touchZones.length);
    
    touchZones.forEach((zone, index) => {
        const lane = parseInt(zone.dataset.lane);
        console.log('➕ Setting up zone', lane);
        
        zone.addEventListener('touchstart', (e) => {
            e.preventDefault();
            console.log('🎵 TOUCH on lane', lane);
            if (typeof handleInput === 'function') {
                handleInput(lane);
            } else {
                console.log('❌ handleInput not found');
            }
        }, { passive: false });
        
        zone.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🖱️ CLICK on lane', lane);
            if (typeof handleInput === 'function') {
                handleInput(lane);
            } else {
                console.log('❌ handleInput not found');
            }
        });
    });
}

// Execute immediately
console.log('🚀 Executing setupTouchControls immediately!');
setupTouchControls();

// Execute on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM ready - executing setupTouchControls!');
    setupTouchControls();
});

// Execute on window load
window.addEventListener('load', () => {
    console.log('🪟 Window load - executing setupTouchControls!');
    setupTouchControls();
});
