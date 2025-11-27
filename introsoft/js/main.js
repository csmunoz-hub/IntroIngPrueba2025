// ES6 Modules y funcionalidad moderna
class IntrosoftApp {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.setActiveNavLink();
    }

    bindEvents() {
        const ctaButton = document.getElementById('ctaButton');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => this.handleCTAClick());
        }
    }

    setActiveNavLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            }
        });
    }

    handleCTAClick() {
        // Animación de scroll suave o efecto hover extendido
        const button = document.getElementById('ctaButton');
        button.style.transform = 'scale(0.95)';
        
        setTimeout(() => {
            button.style.transform = '';
            // Aquí puedes agregar lógica adicional como mostrar modal
            console.log('¡Iniciando proyecto!');
        }, 150);
    }
}

// Inicializar aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new IntrosoftApp();
});

// Smooth scroll para enlaces internos
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
