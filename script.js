// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Fade out loading screen after 2 seconds (or when fully loaded)
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
    }, 2000);
    
    // Ensure body is scrollable
    document.body.style.overflow = 'auto';
});

// ===== SCROLL REVEAL (IntersectionObserver) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

// Observe all elements with data-reveal
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    revealElements.forEach(el => observer.observe(el));
});

// ===== WHATSAPP FORM HANDLER =====
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const whatsappNumber = '5566999341695'; // Company WhatsApp
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const horario = document.getElementById('horario').value.trim();
        const servico = document.getElementById('servico').value.trim();
        
        // Validate required fields
        if (!name || !phone || !endereco || !horario || !servico) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Construct WhatsApp message (Brazil format)
        const whatsappMessage = `👋 *Nova solicitação de orçamento - Jardinagem Farias*

*👤 Nome:* ${name}
*📱 Telefone:* ${phone}
*📍 Endereço:* ${endereco}
*🕒 Horário disponível:* ${horario}
*🌿 Serviço solicitado:* ${servico}

---
*Status:* Solicitação automática via site premium.
*Empresa:* Jardinagem Farias`;
        
        // WhatsApp URL (opens in new tab)
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Optional: Reset form
        form.reset();
        
        // Optional: Success feedback
        alert('Mensagem enviada para WhatsApp! 🚀');
    });
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== PERFORMANCE: Preload critical resources =====
if ('loading' in HTMLImageElement.prototype) {
    // Native lazy loading supported
} else {
    // Fallback for older browsers
    document.addEventListener('DOMContentLoaded', () => {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.addEventListener('load', () => {
                img.classList.add('loaded');
            });
        });
    });
}

// ===== MOBILE MENU (Future enhancement - if needed) =====
// Add hamburger menu logic here if navigation is added

