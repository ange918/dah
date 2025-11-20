// ============================================
// Grand Maître Amayon - Script JavaScript
// ============================================

// Gestion du bouton WhatsApp sticky (apparition au scroll)
document.addEventListener('DOMContentLoaded', function() {
    const whatsappSticky = document.getElementById('whatsapp-sticky');
    const heroSection = document.getElementById('hero');
    
    // Fonction pour gérer la visibilité du bouton sticky
    function handleStickyButton() {
        if (!whatsappSticky || !heroSection) return;
        
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        // Afficher le bouton sticky après avoir scrollé 70% du hero
        if (scrollPosition > heroHeight * 0.7) {
            whatsappSticky.style.opacity = '1';
            whatsappSticky.style.transform = 'scale(1)';
        } else {
            whatsappSticky.style.opacity = '0';
            whatsappSticky.style.transform = 'scale(0.8)';
        }
    }
    
    // Initialiser le style du bouton sticky
    whatsappSticky.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    whatsappSticky.style.opacity = '0';
    whatsappSticky.style.transform = 'scale(0.8)';
    
    // Écouter le scroll
    window.addEventListener('scroll', handleStickyButton);
    
    // Vérifier au chargement
    handleStickyButton();
});

// Tracking des clics sur les boutons WhatsApp (console log)
document.addEventListener('DOMContentLoaded', function() {
    // Tous les liens WhatsApp
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(function(link, index) {
        link.addEventListener('click', function(e) {
            // Récupérer le texte du bouton ou son ID
            const buttonText = link.textContent.trim();
            const buttonId = link.id || `whatsapp-link-${index}`;
            
            // Log pour tracking
            console.log('=== WhatsApp Click Tracked ===');
            console.log('Button ID:', buttonId);
            console.log('Button Text:', buttonText);
            console.log('URL:', link.href);
            console.log('Timestamp:', new Date().toISOString());
            console.log('=============================');
            
            // Si vous souhaitez ajouter Google Analytics ou autre outil plus tard:
            // gtag('event', 'whatsapp_click', { button_id: buttonId });
            
            // Optionnel: Confirmation visuelle rapide
            const originalText = link.textContent;
            if (link.classList.contains('btn')) {
                link.style.transform = 'scale(0.95)';
                setTimeout(function() {
                    link.style.transform = '';
                }, 200);
            }
        });
    });
});

// Validation de l'intention utilisateur (optionnel - activé uniquement si nécessaire)
// Pour s'assurer que l'utilisateur veut vraiment ouvrir WhatsApp
function validateWhatsAppIntent(message) {
    // Cette fonction peut être utilisée pour ajouter une confirmation
    // avant d'ouvrir WhatsApp si vous le souhaitez plus tard
    return confirm('Vous allez être redirigé vers WhatsApp pour contacter Maître Amayon. Continuer ?');
}

// Animation au scroll pour les sections (fade-in progressif)
document.addEventListener('DOMContentLoaded', function() {
    // Observer pour les animations au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments avec classe .fade-on-scroll
    const fadeElements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .faq-item');
    
    fadeElements.forEach(function(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Smooth scroll pour les ancres (si vous ajoutez un menu de navigation)
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            
            // Ignorer les liens vides ou "#"
            if (href === '#' || href === '') {
                e.preventDefault();
                return;
            }
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Tracking du temps passé sur la page (pour analytics futurs)
let startTime = Date.now();

window.addEventListener('beforeunload', function() {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    console.log('=== Session Info ===');
    console.log('Time spent on page:', timeSpent, 'seconds');
    console.log('===================');
    
    // Pour Google Analytics plus tard:
    // gtag('event', 'page_time', { time_spent: timeSpent });
});

// Détection du device (mobile/desktop) pour analytics
document.addEventListener('DOMContentLoaded', function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const deviceType = isMobile ? 'mobile' : 'desktop';
    
    console.log('=== Device Info ===');
    console.log('Device type:', deviceType);
    console.log('Screen width:', window.innerWidth);
    console.log('Screen height:', window.innerHeight);
    console.log('User agent:', navigator.userAgent);
    console.log('==================');
    
    // Ajouter une classe au body pour CSS spécifique si nécessaire
    document.body.classList.add(deviceType);
});

// Protection contre le spam de clics (debounce)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = function() {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Fonction pour copier le numéro WhatsApp (optionnel - pour usage futur)
function copyWhatsAppNumber() {
    const phoneNumber = '+33780782681';
    navigator.clipboard.writeText(phoneNumber).then(function() {
        console.log('Numéro WhatsApp copié:', phoneNumber);
        // Vous pouvez ajouter une notification visuelle ici
    }).catch(function(err) {
        console.error('Erreur lors de la copie:', err);
    });
}

// Performance monitoring (optionnel)
window.addEventListener('load', function() {
    // Vérifier si Performance API est disponible
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        
        console.log('=== Performance Info ===');
        console.log('Page load time:', pageLoadTime, 'ms');
        console.log('DOM ready time:', perfData.domContentLoadedEventEnd - perfData.navigationStart, 'ms');
        console.log('======================');
    }
});

// Message de bienvenue dans la console (pour les développeurs curieux)
console.log('%c✨ Bienvenue sur le site de Maître Amayon ✨', 'font-size: 20px; font-weight: bold; color: #D4AF37;');
console.log('%cSite web développé avec soin | Version 1.0', 'font-size: 12px; color: #666;');
console.log('%cTracking des événements activé pour améliorer votre expérience', 'font-size: 11px; color: #999; font-style: italic;');
