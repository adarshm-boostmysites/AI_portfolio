// Adarsh M - AI & Development Specialist - FIXED Dark Theme Interactive Features

// Global WhatsApp functions - defined immediately for single-click functionality
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

    // Enhanced validation with dark theme notifications
    if (!name || !email) {
        showDarkNotification('Please fill in your name and email', 'error');
        return;
    }

    if (!service) {
        showDarkNotification('Please select a service', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showDarkNotification('Please enter a valid email address', 'error');
        return;
    }

    // Construct WhatsApp message
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

    // Clear form and show success with dark theme styling
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('user-company').value = '';
    document.getElementById('service-select').value = '';
    document.getElementById('project-description').value = '';

    showDarkNotification('Message sent via WhatsApp! Adarsh will respond shortly.', 'success');
};

// Dark theme notification system
function showDarkNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.dark-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'dark-notification';
    
    let bgGradient, icon, glowColor;
    switch(type) {
        case 'success':
            bgGradient = 'linear-gradient(135deg, #00ffff, #ff00ff)';
            glowColor = '#00ffff';
            icon = '✅';
            break;
        case 'error':
            bgGradient = 'linear-gradient(135deg, #ff00ff, #ffff00)';
            glowColor = '#ff00ff';
            icon = '❌';
            break;
        default:
            bgGradient = 'linear-gradient(135deg, #ffff00, #00ffff)';
            glowColor = '#ffff00';
            icon = 'ℹ️';
    }

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        padding: 20px 24px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${glowColor}33;
        z-index: 10000;
        animation: slideInNeon 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        max-width: 350px;
        display: flex;
        align-items: center;
        gap: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 14px;
        border-left: 4px solid ${glowColor};
    `;
    
    notification.innerHTML = `
        <span style="font-size: 20px; filter: drop-shadow(0 0 10px ${glowColor});">${icon}</span>
        <span style="text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);">${message}</span>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutNeon 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 500);
        }
    }, 5000);
}

// FIXED Main Dark Theme Landing Page Class
class DarkThemeAILanding {
    constructor() {
        this.whatsappNumber = '+91 8197098847';
        this.email = 'adarshm.boostmysites@gmail.com';
        this.portfolioUrl = 'https://services.boostmysites.in/adarshm/ai-development';
        this.currentTestimonial = 0;
        this.testimonialInterval = null;
        this.init();
    }

    init() {
        this.setupDarkNavigation();
        this.setupDarkServiceCards();
        this.setupDarkTestimonials();
        this.setupDarkScrollEffects();
        this.setupDarkMobileMenu();
        this.setupDarkHeroButtons();
        this.setupDarkFormValidation();
        this.setupDarkAnimations();
        this.setupDarkParallax();
        this.setupDarkCounters();
        this.addDarkThemeStyles();
        
        // ADDED: Force Services section visibility
        this.ensureServicesVisibility();
    }

    // ADDED: Ensure Services section is always visible
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

        console.log('Services section visibility ensured');
    }

    // FIXED Enhanced dark theme navigation with improved smooth scrolling
    setupDarkNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');

        // Enhanced smooth scroll with FIXED dark theme effects
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // IMPROVED: Calculate proper offset accounting for fixed navbar with increased gap
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offset = navbarHeight + 60; // Increased offset for better visibility
                    const targetPosition = targetSection.offsetTop - offset;
                    
                    // Enhanced smooth scroll
                    this.smoothDarkScroll(targetPosition);
                    
                    // Add neon glow effect to clicked nav item
                    this.addNavGlow(link);
                    
                    // Update active state immediately for better UX
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    link.classList.add('active');

                    // ADDED: Special handling for services section
                    if (targetId === '#services') {
                        setTimeout(() => {
                            this.ensureServicesVisibility();
                        }, 500);
                    }
                }

                this.closeDarkMobileMenu();
            });
        });

        // Update active navigation with neon effects
        window.addEventListener('scroll', this.debounce(() => {
            this.updateDarkActiveNav(sections, navLinks);
        }, 50), { passive: true });
    }

    addNavGlow(link) {
        link.style.textShadow = '0 0 20px #00ffff, 0 0 30px #00ffff';
        setTimeout(() => {
            link.style.textShadow = '';
        }, 1000);
    }

    // IMPROVED smooth scrolling function
    smoothDarkScroll(targetPosition, duration = 1000) {
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function darkAnimation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(darkAnimation);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(darkAnimation);
    }

    // IMPROVED navigation active state detection
    updateDarkActiveNav(sections, navLinks) {
        const scrollPosition = window.scrollY + 150; // Adjusted for better accuracy

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

    // Enhanced dark service cards with single-click navigation
    setupDarkServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        // ADDED: Ensure cards are visible first
        serviceCards.forEach(card => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
            card.style.opacity = '1';
        });
        
        serviceCards.forEach((card, index) => {
            // Single-click WhatsApp integration (no double opening)
            let clickTimeout = null;
            
            card.addEventListener('click', (e) => {
                // Don't interfere with button clicks
                if (e.target.closest('.service-btn')) {
                    return;
                }
                
                // Prevent multiple rapid clicks
                if (clickTimeout) return;
                
                clickTimeout = setTimeout(() => {
                    clickTimeout = null;
                }, 1000);
                
                const serviceType = card.dataset.service;
                if (serviceType) {
                    this.addServiceClickEffect(card);
                    setTimeout(() => {
                        openWhatsApp(serviceType);
                    }, 200);
                }
            });

            // Enhanced hover effects with neon glow
            card.addEventListener('mouseenter', () => {
                this.addServiceHoverEffect(card, index);
            });

            card.addEventListener('mouseleave', () => {
                this.removeServiceHoverEffect(card);
            });

            // Add floating animation to service icons
            const icon = card.querySelector('.service-icon');
            if (icon) {
                icon.style.animation = `floating ${8 + index}s ease-in-out infinite`;
                icon.style.animationDelay = `${index * 0.5}s`;
            }
        });
    }

    addServiceClickEffect(card) {
        card.style.transform = 'translateY(-5px) scale(0.98)';
        card.style.boxShadow = '0 25px 50px rgba(0, 255, 255, 0.3), 0 0 40px rgba(0, 255, 255, 0.2)';
        
        setTimeout(() => {
            card.style.transform = '';
            card.style.boxShadow = '';
        }, 300);
    }

    addServiceHoverEffect(card, index) {
        const colors = ['#00ffff', '#ff00ff', '#ffff00'];
        const color = colors[index % 3];
        
        card.style.borderColor = `${color}80`;
        card.style.boxShadow = `0 20px 40px ${color}20, 0 0 30px ${color}30`;
        
        const serviceGlow = card.querySelector('.service-glow');
        if (serviceGlow) {
            serviceGlow.style.background = `linear-gradient(135deg, ${color}20, transparent)`;
            serviceGlow.style.opacity = '1';
        }
    }

    removeServiceHoverEffect(card) {
        card.style.borderColor = '';
        card.style.boxShadow = '';
        
        const serviceGlow = card.querySelector('.service-glow');
        if (serviceGlow) {
            serviceGlow.style.opacity = '0';
        }
    }

    // Dark theme testimonials with enhanced animations
    setupDarkTestimonials() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.dot');
        
        if (testimonialCards.length === 0 || dots.length === 0) return;

        let isUserInteracting = false;

        // Dot navigation with neon effects
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showDarkTestimonial(index, testimonialCards, dots);
                this.currentTestimonial = index;
                isUserInteracting = true;
                this.restartTestimonialInterval();
                
                // Add click glow effect
                dot.style.boxShadow = '0 0 20px #00ffff';
                setTimeout(() => {
                    dot.style.boxShadow = '';
                }, 500);
                
                setTimeout(() => { isUserInteracting = false; }, 8000);
            });
        });

        // Auto-slide with dark theme transitions
        this.testimonialInterval = setInterval(() => {
            if (!isUserInteracting) {
                this.currentTestimonial = (this.currentTestimonial + 1) % testimonialCards.length;
                this.showDarkTestimonial(this.currentTestimonial, testimonialCards, dots);
            }
        }, 6000);

        // Touch/swipe support
        this.setupDarkSwipeGestures(testimonialCards, dots);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.target.closest('.testimonials-container')) {
                if (e.key === 'ArrowLeft') {
                    this.currentTestimonial = this.currentTestimonial === 0 ? testimonialCards.length - 1 : this.currentTestimonial - 1;
                    this.showDarkTestimonial(this.currentTestimonial, testimonialCards, dots);
                    isUserInteracting = true;
                    this.restartTestimonialInterval();
                } else if (e.key === 'ArrowRight') {
                    this.currentTestimonial = (this.currentTestimonial + 1) % testimonialCards.length;
                    this.showDarkTestimonial(this.currentTestimonial, testimonialCards, dots);
                    isUserInteracting = true;
                    this.restartTestimonialInterval();
                }
            }
        });
    }

    showDarkTestimonial(index, cards, dots) {
        // Hide all cards with fade effect
        cards.forEach(card => {
            card.classList.remove('active');
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.95)';
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
            dot.style.boxShadow = '';
        });

        // Show selected card with enhanced animation
        setTimeout(() => {
            if (cards[index] && dots[index]) {
                cards[index].classList.add('active');
                cards[index].style.opacity = '1';
                cards[index].style.transform = 'translateY(0) scale(1)';
                dots[index].classList.add('active');
                dots[index].style.boxShadow = '0 0 15px #00ffff';
            }
        }, 200);
    }

    setupDarkSwipeGestures(cards, dots) {
        let startX = 0;
        let endX = 0;
        let startTime = 0;

        const container = document.querySelector('.testimonials-container');
        
        if (container) {
            container.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startTime = Date.now();
            }, { passive: true });

            container.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                const timeDiff = Date.now() - startTime;
                
                if (timeDiff < 500) {
                    const threshold = 50;
                    const diff = startX - endX;

                    if (Math.abs(diff) > threshold) {
                        if (diff > 0) {
                            this.currentTestimonial = (this.currentTestimonial + 1) % cards.length;
                        } else {
                            this.currentTestimonial = this.currentTestimonial === 0 ? cards.length - 1 : this.currentTestimonial - 1;
                        }
                        this.showDarkTestimonial(this.currentTestimonial, cards, dots);
                        this.restartTestimonialInterval();
                    }
                }
            }, { passive: true });
        }
    }

    restartTestimonialInterval() {
        clearInterval(this.testimonialInterval);
        this.testimonialInterval = setInterval(() => {
            const cards = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.dot');
            this.currentTestimonial = (this.currentTestimonial + 1) % cards.length;
            this.showDarkTestimonial(this.currentTestimonial, cards, dots);
        }, 6000);
    }

    // IMPROVED Dark theme scroll effects with navbar glassmorphism
    setupDarkScrollEffects() {
        let lastScrollY = window.scrollY;
        let ticking = false;
        
        const handleDarkScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const navbar = document.getElementById('navbar');
                    const currentScrollY = window.scrollY;

                    if (navbar) {
                        // Enhanced navbar effects - keep navbar visible for better UX
                        if (currentScrollY > 50) {
                            navbar.classList.add('scrolled');
                        } else {
                            navbar.classList.remove('scrolled');
                        }

                        // Ensure navbar stays in position for navigation
                        navbar.style.transform = 'translateX(-50%) translateY(0)';
                    }

                    // ADDED: Force services visibility on scroll
                    if (currentScrollY > 100) {
                        this.ensureServicesVisibility();
                    }

                    lastScrollY = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleDarkScroll, { passive: true });
    }

    // Dark theme mobile menu
    setupDarkMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleDarkMobileMenu();
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                    this.closeDarkMobileMenu();
                }
            });

            // Close menu on escape
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeDarkMobileMenu();
                }
            });

            // Close on window resize
            window.addEventListener('resize', this.debounce(() => {
                if (window.innerWidth > 768) {
                    this.closeDarkMobileMenu();
                }
            }, 250));
        }
    }

    toggleDarkMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
                navMenu.style.animation = 'fadeInNeon 0.3s ease';
            } else {
                document.body.style.overflow = '';
                navMenu.style.animation = 'fadeOutNeon 0.3s ease';
            }
        }
    }

    closeDarkMobileMenu() {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // IMPROVED Dark theme hero buttons with proper navigation
    setupDarkHeroButtons() {
        const exploreBtn = document.querySelector('.cta-primary');
        const portfolioBtn = document.querySelector('.cta-secondary');

        if (exploreBtn) {
            exploreBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add neon pulse effect
                exploreBtn.style.animation = 'neonPulse 0.6s ease';
                setTimeout(() => {
                    exploreBtn.style.animation = '';
                }, 600);

                const servicesSection = document.querySelector('#services');
                if (servicesSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offset = navbarHeight + 60; // Increased offset
                    const targetPosition = servicesSection.offsetTop - offset;
                    this.smoothDarkScroll(targetPosition);
                    
                    // Ensure services are visible after scroll
                    setTimeout(() => {
                        this.ensureServicesVisibility();
                    }, 1000);
                }
            });
        }

        if (portfolioBtn) {
            portfolioBtn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Add neon glow effect
                portfolioBtn.style.boxShadow = '0 0 30px #00ffff, 0 10px 20px rgba(0, 0, 0, 0.3)';
                setTimeout(() => {
                    portfolioBtn.style.boxShadow = '';
                }, 600);

                const portfolioSection = document.querySelector('#portfolio');
                if (portfolioSection) {
                    const navbar = document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 80;
                    const offset = navbarHeight + 60; // Increased offset
                    const targetPosition = portfolioSection.offsetTop - offset;
                    this.smoothDarkScroll(targetPosition);
                }
            });
        }
    }

    // Dark theme form validation
    setupDarkFormValidation() {
        const inputs = document.querySelectorAll('#user-name, #user-email, #service-select');
        const textarea = document.getElementById('project-description');

        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateDarkField(input);
            });

            input.addEventListener('input', () => {
                this.clearDarkFieldError(input);
            });

            // Dark theme focus effects
            input.addEventListener('focus', () => {
                input.style.borderColor = '#00ffff';
                input.style.boxShadow = '0 0 0 3px rgba(0, 255, 255, 0.2)';
                input.style.background = 'rgba(255, 255, 255, 0.08)';
            });

            input.addEventListener('blur', () => {
                if (!input.classList.contains('error')) {
                    input.style.borderColor = '';
                    input.style.boxShadow = '';
                    input.style.background = 'rgba(255, 255, 255, 0.05)';
                }
            });
        });

        // Add character counter for textarea
        if (textarea) {
            this.addDarkCharacterCounter(textarea);
        }
    }

    validateDarkField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        this.clearDarkFieldError(field);

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        if (field.id === 'user-name' && value) {
            if (value.length < 2) {
                isValid = false;
                errorMessage = 'Name must be at least 2 characters long';
            }
        }

        if (!isValid) {
            this.showDarkFieldError(field, errorMessage);
        }

        return isValid;
    }

    showDarkFieldError(field, message) {
        field.classList.add('error');
        field.style.borderColor = '#ff00ff';
        field.style.boxShadow = '0 0 0 3px rgba(255, 0, 255, 0.2)';
        field.style.background = 'rgba(255, 0, 255, 0.05)';
        
        const errorElement = document.createElement('div');
        errorElement.className = 'dark-field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: #ff00ff;
            font-size: 12px;
            margin-top: 8px;
            animation: neonGlow 0.3s ease-in-out;
            text-shadow: 0 0 10px #ff00ff;
            font-weight: 500;
        `;
        
        field.parentElement.appendChild(errorElement);
    }

    clearDarkFieldError(field) {
        field.classList.remove('error');
        field.style.borderColor = '';
        field.style.boxShadow = '';
        field.style.background = 'rgba(255, 255, 255, 0.05)';
        
        const existingError = field.parentElement.querySelector('.dark-field-error');
        if (existingError) {
            existingError.remove();
        }
    }

    addDarkCharacterCounter(textarea) {
        const maxLength = 500;
        const counter = document.createElement('div');
        counter.className = 'dark-character-counter';
        counter.style.cssText = `
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
            text-align: right;
            margin-top: 8px;
            font-weight: 500;
        `;
        
        textarea.parentElement.appendChild(counter);

        const updateCounter = () => {
            const remaining = maxLength - textarea.value.length;
            counter.textContent = `${remaining} characters remaining`;
            
            if (remaining < 50) {
                counter.style.color = '#ffff00';
                counter.style.textShadow = '0 0 5px #ffff00';
            } else if (remaining < 0) {
                counter.style.color = '#ff00ff';
                counter.style.textShadow = '0 0 5px #ff00ff';
            } else {
                counter.style.color = 'rgba(255, 255, 255, 0.5)';
                counter.style.textShadow = '';
            }
        };

        textarea.addEventListener('input', updateCounter);
        textarea.setAttribute('maxlength', maxLength);
        updateCounter();
    }

    // Dark theme animations and parallax
    setupDarkAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateDarkElement(entry.target);
                    
                    // Add stagger effect
                    if (entry.target.parentElement && 
                        (entry.target.parentElement.classList.contains('services-grid') ||
                         entry.target.parentElement.classList.contains('portfolio-grid'))) {
                        const siblings = Array.from(entry.target.parentElement.children);
                        const index = siblings.indexOf(entry.target);
                        entry.target.style.transitionDelay = `${index * 100}ms`;
                    }

                    // ADDED: Special handling for service cards
                    if (entry.target.classList.contains('service-card')) {
                        entry.target.style.display = 'block';
                        entry.target.style.visibility = 'visible';
                        entry.target.style.opacity = '1';
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        const elementsToAnimate = document.querySelectorAll('.service-card, .portfolio-item, .stat-card');
        elementsToAnimate.forEach(element => {
            this.prepareDarkElementForAnimation(element);
            observer.observe(element);
        });
    }

    prepareDarkElementForAnimation(element) {
        // Don't hide service cards completely
        if (element.classList.contains('service-card')) {
            element.style.opacity = '0.8';
            element.style.visibility = 'visible';
            element.style.display = 'block';
        } else {
            element.style.opacity = '0';
        }
        element.style.transform = 'translateY(50px) scale(0.9)';
        element.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    }

    animateDarkElement(element) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0) scale(1)';
        
        // Add neon glow effect on animation
        setTimeout(() => {
            element.style.boxShadow = '0 10px 30px rgba(0, 255, 255, 0.1)';
            setTimeout(() => {
                element.style.boxShadow = '';
            }, 1000);
        }, 400);
    }

    setupDarkParallax() {
        let ticking = false;

        const handleDarkParallax = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.pageYOffset;
                    
                    // Floating shapes parallax
                    const shapes = document.querySelectorAll('.floating-shape');
                    shapes.forEach((shape, index) => {
                        const speed = 0.2 + (index * 0.1);
                        const yPos = -(scrolled * speed);
                        const rotation = scrolled * 0.02 + (index * 45);
                        shape.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
                    });

                    // Neon orbs parallax
                    const orbs = document.querySelectorAll('.neon-orb');
                    orbs.forEach((orb, index) => {
                        const speed = 0.1 + (index * 0.05);
                        const yPos = -(scrolled * speed);
                        orb.style.transform = `translateY(${yPos}px) scale(${1 + scrolled * 0.0001})`;
                    });

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleDarkParallax, { passive: true });
    }

    // Dark theme counters with neon effects
    setupDarkCounters() {
        const statNumbers = document.querySelectorAll('.stat-number');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateDarkCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.8 });

        statNumbers.forEach(number => {
            counterObserver.observe(number);
        });
    }

    animateDarkCounter(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const isTime = text.includes('/');
        
        if (isTime) return;

        const finalValue = parseInt(text.replace(/[^\d]/g, ''));
        if (isNaN(finalValue)) return;

        const duration = 2000;
        const steps = 60;
        const stepValue = finalValue / steps;
        const stepDuration = duration / steps;

        let currentValue = 0;
        const timer = setInterval(() => {
            currentValue += stepValue;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
                
                // Add final neon glow effect
                element.style.textShadow = '0 0 20px currentColor, 0 0 30px currentColor';
                setTimeout(() => {
                    element.style.textShadow = '';
                }, 2000);
            }
            
            let displayValue = Math.floor(currentValue);
            if (hasPlus) displayValue += '+';
            if (hasPercent) displayValue += '%';
            
            element.textContent = displayValue;
        }, stepDuration);
    }

    // Add dynamic dark theme CSS animations
    addDarkThemeStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInNeon {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOutNeon {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }

            @keyframes neonGlow {
                0%, 100% { text-shadow: 0 0 5px currentColor; }
                50% { text-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
            }

            @keyframes neonPulse {
                0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); }
                50% { box-shadow: 0 0 40px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.4); }
            }

            @keyframes fadeInNeon {
                from {
                    opacity: 0;
                    backdrop-filter: blur(0px);
                }
                to {
                    opacity: 1;
                    backdrop-filter: blur(20px);
                }
            }

            @keyframes fadeOutNeon {
                from {
                    opacity: 1;
                    backdrop-filter: blur(20px);
                }
                to {
                    opacity: 0;
                    backdrop-filter: blur(0px);
                }
            }

            /* Enhanced scrollbar */
            ::-webkit-scrollbar-thumb:active {
                background: linear-gradient(135deg, #ffff00, #ff00ff);
            }

            /* Dark theme focus enhancements */
            .btn:focus-visible {
                outline: 2px solid #00ffff;
                outline-offset: 3px;
                box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
            }

            /* Mobile menu dark enhancements */
            @media (max-width: 768px) {
                .nav-menu.active {
                    border: 1px solid rgba(0, 255, 255, 0.3);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 50px rgba(0, 255, 255, 0.05);
                }
            }

            /* Enhanced navbar positioning */
            .navbar {
                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
            }

            /* FORCED Services Section Visibility */
            #services {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            #services .services-grid {
                display: grid !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            #services .service-card {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Utility functions
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
    
    // ADDED: Additional fallback to ensure services visibility
    setTimeout(() => {
        landing.ensureServicesVisibility();
    }, 1000);
    
    // ADDED: Periodic check for services visibility
    setInterval(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection && (servicesSection.style.display === 'none' || 
            servicesSection.style.visibility === 'hidden' || 
            servicesSection.style.opacity === '0')) {
            landing.ensureServicesVisibility();
        }
    }, 5000);
});

// Fallback for immediate execution
if (document.readyState === 'complete') {
    const landing = new DarkThemeAILanding();
    setTimeout(() => {
        landing.ensureServicesVisibility();
    }, 500);
}