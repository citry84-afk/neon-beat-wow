// ========== TOUCH CONTROLS STANDALONE ==========

// FORCE IMMEDIATE EXECUTION
(function() {
    
    function forceTouchSetup() {
        
        // Update visual debug
        const setupStatus = document.getElementById('setup-status');
        if (setupStatus) {
            setupStatus.textContent = '✅ Setup called';
            setupStatus.style.color = '#00FF00';
        }
        
        // Find touch zones
        const touchZones = document.querySelectorAll('.touch-zone');
        
        // Update zones count
        const zonesFound = document.getElementById('zones-found');
        if (zonesFound) {
            zonesFound.textContent = '📱 Zones: ' + touchZones.length;
            zonesFound.style.color = touchZones.length > 0 ? '#00FF00' : '#FF0000';
        }
        
        // Check handleInput function
        const handleInputExists = typeof window.handleInput === 'function';
        
        const handleInputStatus = document.getElementById('handleinput-status');
        if (handleInputStatus) {
            handleInputStatus.textContent = '🎮 handleInput: ' + (handleInputExists ? '✅ Found' : '❌ Missing');
            handleInputStatus.style.color = handleInputExists ? '#00FF00' : '#FF0000';
        }
        
        // Setup each touch zone
        touchZones.forEach((zone, index) => {
            const lane = parseInt(zone.dataset.lane) || index;
            
            // Remove existing listeners
            zone.replaceWith(zone.cloneNode(true));
            const newZone = document.querySelectorAll('.touch-zone')[index];
            
            // Add touchstart
            newZone.addEventListener('touchstart', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Update visual debug
                const lastTouch = document.getElementById('last-touch');
                if (lastTouch) {
                    lastTouch.textContent = '👆 Touch: Lane ' + lane + ' (' + new Date().toLocaleTimeString() + ')';
                    lastTouch.style.color = '#00FF00';
                }
                
                // Call handleInput if exists
                if (typeof window.handleInput === 'function') {
                    window.handleInput(lane);
                } else {
                }
                
                // Visual feedback
                newZone.style.background = 'rgba(255, 255, 255, 0.5)';
                setTimeout(() => {
                    newZone.style.background = 'rgba(0, 255, 255, 0.1)';
                }, 200);
                
            }, { passive: false });
            
            // Add click for desktop
            newZone.addEventListener('click', function(e) {
                e.preventDefault();
                
                const lastTouch = document.getElementById('last-touch');
                if (lastTouch) {
                    lastTouch.textContent = '🖱️ Click: Lane ' + lane + ' (' + new Date().toLocaleTimeString() + ')';
                    lastTouch.style.color = '#00FF00';
                }
                
                if (typeof window.handleInput === 'function') {
                    window.handleInput(lane);
                }
            });
        });
        
    }
    
    // Execute multiple times to ensure it works
    setTimeout(forceTouchSetup, 100);
    
    // On DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(forceTouchSetup, 100);
        });
    } else {
        setTimeout(forceTouchSetup, 100);
    }
    
    // On window load
    window.addEventListener('load', function() {
        setTimeout(forceTouchSetup, 100);
    });
    
    // Expose globally
    window.forceTouchSetup = forceTouchSetup;
    
})();

