// script.js - Core functionality for the portfolio

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Theme Management ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;
    
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        htmlElement.classList.add('dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        htmlElement.classList.remove('dark');
    }

    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        if (htmlElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            localStorage.theme = 'light';
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const typedTextSpan = document.querySelector(".typed-text");
    const textArray = ["Web Developer", "UI/UX Designer", "Software Engineer"];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    const renderSkills = (category, containerId) => {
        const container = document.getElementById(containerId);
        if(container && portfolioData.skills[category]) {
            portfolioData.skills[category].forEach(skill => {
                const skillHTML = `
                    <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow">
                        <i class="${skill.icon} text-4xl mb-2 ${skill.color}"></i>
                        <span class="font-medium text-gray-800 dark:text-gray-200">${skill.name}</span>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', skillHTML);
            });
        }
    };
    renderSkills('frontend', 'frontend-skills');
    renderSkills('backend', 'backend-skills');
    renderSkills('tools', 'tools-skills');

    // Inject Projects
const projectsContainer = document.getElementById('projects-container');

if(projectsContainer) {
    let allProjectsHTML = ''; // Create a placeholder string to hold all the cards
    
    portfolioData.projects.forEach(project => {
        const techHTML = project.tech.map(t => `<span class="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs rounded-full">${t}</span>`).join('');
        
        // Conditional Check: Only create HTML if the link exists
        const liveLinkHTML = project.liveLink 
            ? `<a href="${project.liveLink}" class="text-[#522b5b] dark:text-[#dfb6b2] hover:underline font-medium"><i class="fas fa-external-link-alt mr-1"></i> Live Demo</a>` 
            : '';

        const githubLinkHTML = project.githubLink 
            ? `<a href="${project.githubLink}" class="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white font-medium"><i class="fab fa-github mr-1"></i> Code</a>` 
            : '';

        const projectHTML = `
            <div class="project-card bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col justify-between">
                <div>
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${project.title}</h3>
                        <p class="text-gray-600 dark:text-gray-300 mb-4 h-16 overflow-hidden">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${techHTML}
                        </div>
                    </div>
                </div>
                <div class="p-6 pt-0 flex justify-between items-center mt-auto">
                    ${liveLinkHTML}
                    ${githubLinkHTML}
                </div>
            </div>
        `;
        
        allProjectsHTML += projectHTML;
    });

    // Inject everything into the DOM at once
    projectsContainer.innerHTML = allProjectsHTML;
}

    // Inject Services
    const servicesContainer = document.getElementById('services-container');
    if(servicesContainer) {
        portfolioData.services.forEach(service => {
            const serviceHTML = `
                <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-2 transition-transform duration-300">
                    <div class="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                        <i class="${service.icon} text-2xl text-[#522b5b] dark:text-[#dfb6b2]"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${service.title}</h3>
                    <p class="text-gray-600 dark:text-gray-400">${service.description}</p>
                </div>
            `;
            servicesContainer.insertAdjacentHTML('beforeend', serviceHTML);
        });
    }

    // Inject Testimonials & Slider Logic
    const testimonialContainer = document.getElementById('testimonial-slider');
    let currentSlide = 0;
    
    if (testimonialContainer && portfolioData.testimonials.length > 0) {
        portfolioData.testimonials.forEach((testimonial, index) => {
            const display = index === 0 ? 'block' : 'hidden';
            const slideHTML = `
                <div class="testimonial-slide ${display} w-full text-center px-4 md:px-12" data-index="${index}">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-blue-500">
                    <p class="text-lg italic text-gray-600 dark:text-gray-300 mb-6">"${testimonial.text}"</p>
                    <h4 class="font-bold text-gray-900 dark:text-white text-xl">${testimonial.name}</h4>
                    <span class="text-[#854f5c] dark:text-[#dfb6b2] font-medium">${testimonial.role}</span>
                </div>
            `;
            testimonialContainer.insertAdjacentHTML('beforeend', slideHTML);
        });

        const slides = document.querySelectorAll('.testimonial-slide');
        
        document.getElementById('prev-testimonial').addEventListener('click', () => {
            slides[currentSlide].classList.replace('block', 'hidden');
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slides[currentSlide].classList.replace('hidden', 'block');
        });

        document.getElementById('next-testimonial').addEventListener('click', () => {
            slides[currentSlide].classList.replace('block', 'hidden');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.replace('hidden', 'block');
        });
    }

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Back to Top & Active Nav Link ---
    const backToTopBtn = document.getElementById('back-to-top');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- Simple Counter and Palette Button ---
    const countBtn = document.getElementById('count-btn');
    const countValue = document.getElementById('count-value');
    const colorBtn = document.getElementById('color-btn');
    let count = 0;
    const palette = ['#190019', '#2b124c', '#522b5b', '#854f5c', '#dfb6b2', '#fbe4d8'];
    let paletteIndex = 0;

    if (countBtn && countValue) {
        countBtn.addEventListener('click', () => {
            count += 1;
            countValue.textContent = count;
        });
    }

    if (colorBtn) {
        colorBtn.addEventListener('click', () => {
            paletteIndex = (paletteIndex + 1) % palette.length;
            const current = palette[paletteIndex];
            const next = palette[(paletteIndex + 1) % palette.length];
            document.documentElement.style.setProperty('--theme-bg', current);
            document.documentElement.style.setProperty('--theme-soft', next);
            document.documentElement.style.setProperty('--theme-accent', palette[(paletteIndex + 2) % palette.length]);
            document.documentElement.style.setProperty('--theme-text', palette[(paletteIndex + 4) % palette.length]);
            document.documentElement.style.setProperty('--theme-panel', palette[(paletteIndex + 5) % palette.length]);
        });
    }

    window.addEventListener('scroll', () => {
        // Back to top button visibility
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('hidden');
            backToTopBtn.classList.add('flex');
        } else {
            backToTopBtn.classList.add('hidden');
            backToTopBtn.classList.remove('flex');
        }

        // Active Nav Link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active', 'text-[#522b5b]', 'dark:text-[#dfb6b2]');
            if (link.getAttribute('href').includes(current) && current !== '') {
                link.classList.add('active', 'text-[#522b5b]', 'dark:text-[#dfb6b2]');
            }
        });
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
