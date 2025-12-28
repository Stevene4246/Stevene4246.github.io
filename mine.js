document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('theme-checkbox');
    const modeLabel = document.getElementById('mode-label');
    const root = document.documentElement;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
        if(checkbox) checkbox.checked = true;
        if (modeLabel) modeLabel.textContent = "Dark";
    }

    if(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (modeLabel) modeLabel.textContent = "Dark";
            } else {
                root.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                if (modeLabel) modeLabel.textContent = "Light";
            }
        });
    }

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-hidden');
    
    if (revealElements.length > 0) {
        revealElements.forEach(el => observer.observe(el));
    } else {

        console.warn("No reveal-hidden elements found. Check your HTML classes.");
    }


const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); 
        
        const formData = new FormData(this);
        const button = this.querySelector('button');
        button.innerText = "Sending...";
        button.disabled = true;

        const response = await fetch(this.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            alert("Thanks! Your message has been sent.");
            contactForm.reset();
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
        
        button.innerText = "Send Message";
        button.disabled = false;
    });
}
});
