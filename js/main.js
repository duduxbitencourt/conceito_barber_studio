/**
 * Script Principal - Conceito Barber Studio
 */

document.addEventListener("DOMContentLoaded", () => {
    // Lógica para o menu mobile (Hamburger)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Impede rolagem do corpo quando o menu está aberto
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });

        // Fechar menu ao clicar em um link (mobile)
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // =========================================
    // Hero Vignette — Scroll-driven effect
    // =========================================
    const heroSection = document.querySelector('.hero');
    const heroVignette = document.querySelector('.hero-vignette');

    if (heroSection && heroVignette) {
        let ticking = false;

        const updateVignette = () => {
            const scrollY = window.scrollY;
            const heroHeight = heroSection.offsetHeight;

            // Progresso do scroll dentro do hero (0 = topo, 1 = saiu do hero)
            const progress = Math.min(scrollY / (heroHeight * 0.7), 1);

            // Intensidade da vinheta: de 0 a 0.85
            const vignetteIntensity = (progress * 0.85).toFixed(3);

            // Escurecimento geral: de 0 a 0.5
            const darkenOpacity = (progress * 0.5).toFixed(3);

            heroVignette.style.setProperty('--vignette-intensity', vignetteIntensity);
            heroVignette.style.setProperty('--darken-opacity', darkenOpacity);

            // Atualiza o background dinâmico (CSS custom props não interpolam em radial-gradient)
            heroVignette.style.background = `radial-gradient(
                ellipse at center,
                transparent 0%,
                transparent ${30 - progress * 15}%,
                rgba(0, 0, 0, ${vignetteIntensity}) ${70 - progress * 20}%,
                rgba(0, 0, 0, ${vignetteIntensity}) 100%
            )`;
            heroVignette.style.boxShadow = `inset 0 0 ${150 + progress * 100}px rgba(0, 0, 0, ${vignetteIntensity})`;

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateVignette);
                ticking = true;
            }
        }, { passive: true });

        // Estado inicial
        updateVignette();
    }

    // =========================================
    // Scroll Reveal — Service Cards
    // =========================================
    const revealCards = document.querySelectorAll('.servico-card');

    if (revealCards.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        revealCards.forEach(card => revealObserver.observe(card));
    }

    // =========================================
    // Back to Top Button
    // =========================================
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
