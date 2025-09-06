// ========== CLEAN TOUCH SYSTEM ==========
(function() {
    function setupCleanTouch() {
        const touchZones = document.querySelectorAll('.touch-zone');
        
        touchZones.forEach((zone, index) => {
            const lane = parseInt(zone.dataset.lane) || index;
            
            // Remove existing listeners
            zone.replaceWith(zone.cloneNode(true));
            const newZone = document.querySelectorAll('.touch-zone')[index];
            
            // Add clean touch
            newZone.addEventListener('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                if (typeof window.handleInput === 'function') {
                    window.handleInput(lane);
                }
                
                // Visual feedback
                newZone.style.background = 'rgba(255, 255, 255, 0.3)';
                setTimeout(() => {
                    newZone.style.background = 'rgba(0, 255, 255, 0.05)';
                }, 150);
                
            }, { passive: false });
            
            // Add click for desktop
            newZone.addEventListener('click', function(e) {
                e.preventDefault();
                if (typeof window.handleInput === 'function') {
                    window.handleInput(lane);
                }
            });
        });
    }
    
    // Execute setup
    setTimeout(setupCleanTouch, 100);
    
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(setupCleanTouch, 100);
    });
    
    window.addEventListener('load', () => {
        setTimeout(setupCleanTouch, 100);
    });
})();
