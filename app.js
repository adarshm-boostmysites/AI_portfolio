// Adarsh M - AI & Development Specialist - DARK THEME FIXED

// Global WhatsApp functions
window.openWhatsApp = function(serviceType = 'general') {
    let message = 'Hi Adarsh, ';

    switch(serviceType) {
        case 'web-apps':
            message += "I'm interested in Web Applications services";
            break;
        case 'mobile-apps':
            message += "I'm interested in Mobile Applications services";
            break;
        case 'ai-calling':
            message += "I'm interested in AI Calling Solutions services";
            break;
        case 'chatbot':
            message += "I'm interested in Chatbot Development services";
            break;
        case 'saas':
            message += "I'm interested in SaaS Solutions services";
            break;
        case 'ai-automation':
            message += "I'm interested in AI Automation services";
            break;
        case 'ai-development':
            message += "I'm interested in AI Development services";
            break;
        default:
            message += "I'm interested in your AI & Development services";
    }

    message += ". Let's discuss how you can help transform my business!";
    const whatsappUrl = `https://wa.me/918197098847?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
};

window.sendWhatsAppMessage = function() {
    const name = document.getElementById('user-name').value.trim();
    const email = document.getElementById('user-email').value.trim();
    const company = document.getElementById('user-company').value.trim();
    const service = document.getElementById('service-select').value;
    const description = document.getElementById('project-description').value.trim();

    if (!name || !email) {
        alert('Please fill in your name and email');
        return;
    }

    if (!service) {
        alert('Please select a service');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    let message = `Hi Adarsh, I'm ${name}`;
    if (company) {
        message += ` from ${company}`;
    }
    message += `.\n\n`;
    message += `📧 Email: ${email}\n`;
    message += `🔧 Service Interest: ${service}\n`;
    if (description) {
        message += `📝 Project Details: ${description}\n`;
    }
    message += `\nI'm interested in ${service} services and would love to discuss how your AI & Development expertise can help transform my business. When would be a good time to connect?`;

    const whatsappUrl = `https://wa.me/918197098847?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Clear form
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-company').value = '';
    document.getElementById('service-select').value = '';
    document.getElementById('project-description').value = '';

    alert('Message sent via WhatsApp! Adarsh will respond shortly.');
};

// Dark Theme Landing Page Class
class DarkThemeAILanding {
    constructor() {
        this.currentTestimonial = 0;
        this.testimonialInterval = null;
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupServiceCards();
        this.setupTestimonials();
        this.setupScrollEffects();
        this.setupMobileMenu();
        this.setupHeroButtons();
        this.ensureServicesVisibility();
    }

    ensureServicesVisibility() {
        const servicesSection = document.getElementById('services');
        const servicesGrid = document.querySelector('.services-grid');
        const serviceCards = document.querySelectorAll('.service-card');

        if (servicesSection) {
            servicesSection.style.display = 'block';
            servicesSection.style.visibility = 'visible';
            servicesSection.style.opacity = '1';
        }

        if (servicesGrid) {
            servicesGrid.style.display = 'grid';
            servicesGrid.style.visibility = 'visible';
        }

        serviceCards.forEach(card => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offset = navbarHeight + 60;
                    const targetPosition = targetSection.offsetTop - offset;

                    this.smoothScroll(targetPosition);

                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    link.classList.add('active');

                    if (targetId === '#services') {
                        setTimeout(() => {
                            this.ensureServicesVisibility();
                        }, 500);
                    }
                }

                this.closeMobileMenu();
            });
        });

        window.addEventListener('scroll', this.debounce(() => {
            this.updateActiveNav(sections, navLinks);
        }, 50), { passive: true });
    }

    smoothScroll(targetPosition, duration = 1000) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }

    updateActiveNav(sections, navLinks) {
        const scrollPosition = window.scrollY + 150;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    setupServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');

        serviceCards.forEach(card => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
        });

        serviceCards.forEach((card, index) => {
            let clickTimeout = null;

            card.addEventListener('click', (e) => {
                if (e.target.closest('.service-btn')) {
                    return;
                }

                if (clickTimeout) return;

                clickTimeout = setTimeout(() => {
                    clickTimeout = null;
                }, 1000);

                const serviceType = card.dataset.service;
                if (serviceType) {
                    setTimeout(() => {
                        openWhatsApp(serviceType);
                    }, 200);
                }
            });

            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.animation = `floating ${8 + index}s ease-in-out infinite`;
                icon.style.animationDelay = `${index * 0.5}s`;
            }
        });
    }

    setupTestimonials() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.dot');

        if (testimonialCards.length === 0 || dots.length === 0) return;

        let isUserInteracting = false;

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showTestimonial(index, testimonialCards, dots);
                this.currentTestimonial = index;
                isUserInteracting = true;
                this.restartTestimonialInterval();
                setTimeout(() => { isUserInteracting = false; }, 8000);
            });
        });

        this.testimonialInterval = setInterval(() => {
            if (!isUserInteracting) {
                this.currentTestimonial = (this.currentTestimonial + 1) % testimonialCards.length;
                this.showTestimonial(this.currentTestimonial, testimonialCards, dots);
            }
        }, 6000);
    }

    showTestimonial(index, cards, dots) {
        cards.forEach(card => {
            card.classList.remove('active');
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        setTimeout(() => {
            if (cards[index] && dots[index]) {
                cards[index].classList.add('active');
                cards[index].style.opacity = '1';
                cards[index].style.transform = 'translateY(0) scale(1)';
                dots[index].classList.add('active');
            }
        }, 200);
    }

    restartTestimonialInterval() {
        clearInterval(this.testimonialInterval);
        this.testimonialInterval = setInterval(() => {
            const cards = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.dot');
            this.currentTestimonial = (this.currentTestimonial + 1) % cards.length;
            this.showTestimonial(this.currentTestimonial, cards, dots);
        }, 6000);
    }

    setupScrollEffects() {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const navbar = document.getElementById('navbar');
                    const currentScrollY = window.scrollY;

                    if (navbar) {
                        if (currentScrollY > 50) {
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }
                    }

                    if (currentScrollY > 100) {
                        this.ensureServicesVisibility();
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    setupMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMobileMenu();
            });

            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeMobileMenu();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMobileMenu();
                }
            });

            window.addEventListener('resize', this.debounce(() => {
                if (window.innerWidth > 768) {
                    this.closeMobileMenu();
                }
            }, 250));
        }
    }

    toggleMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');

            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    }

    closeMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    setupHeroButtons() {
        const exploreBtn = document.querySelector('.cta-primary');
        const portfolioBtn = document.querySelector('.cta-secondary');

        if (exploreBtn) {
            exploreBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offset = navbarHeight + 60;
                    const targetPosition = servicesSection.offsetTop - offset;
                    this.smoothScroll(targetPosition);

                    setTimeout(() => {
                        this.ensureServicesVisibility();
                    }, 1000);
                }
            });
        }

        if (portfolioBtn) {
            portfolioBtn.addEventListener('click', (e) => {
                e.preventDefault();

                const portfolioSection = document.querySelector('#portfolio');
                if (portfolioSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offset = navbarHeight + 60;
                    const targetPosition = portfolioSection.offsetTop - offset;
                    this.smoothScroll(targetPosition);
                }
            });
        }
    }

    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
}

// Initialize the dark theme landing page
document.addEventListener('DOMContentLoaded', () => {
    const landing = new DarkThemeAILanding();

    setTimeout(() => {
        landing.ensureServicesVisibility();
    }, 1000);

    setInterval(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection && (servicesSection.style.display === 'none' || 
            servicesSection.style.visibility === 'hidden' || 
            servicesSection.style.opacity === '0')) {
            landing.ensureServicesVisibility();
        }
    }, 5000);
});

if (document.readyState === 'complete') {
    const landing = new DarkThemeAILanding();
    setTimeout(() => {
        landing.ensureServicesVisibility();
    }, 500);
}
