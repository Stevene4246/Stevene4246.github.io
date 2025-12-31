document.addEventListener('DOMContentLoaded', () => {
    
    // --- [NEW] PENCIL TRACKER LOGIC ---
    const pencilTracker = document.getElementById('pencil-tracker');
    
    if (pencilTracker) {
        window.addEventListener('scroll', () => {
            // Calculate how far down the user has scrolled (0% to 100%)
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            // Adjust the 'top' position of the pencil
            // We map 0-100% scroll to roughly 0-90% of screen height so it doesn't go off screen
            const trackerPosition = (scrollPercent * 0.9); 
            
            pencilTracker.style.top = trackerPosition + "%";
        });
    }

    // --- STANDARD LOGIC ---
    const menuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const checkbox = document.getElementById('theme-checkbox');
    const modeLabel = document.getElementById('mode-label');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        if(checkbox) checkbox.checked = true;
        if(modeLabel) modeLabel.textContent = "Night Mode";
    }

    if(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if(modeLabel) modeLabel.textContent = "Night Mode";
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if(modeLabel) modeLabel.textContent = "Light Mode";
            }
        });
    }
});
