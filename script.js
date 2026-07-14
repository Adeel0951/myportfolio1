/**
 * ==========================================================================
 * Muhammad Adeel - Hacker Amber HUD Portfolio Application Engine
 * ==========================================================================
 */

// Global configuration object for easy updates
const APP_CONFIG = {
    profile: {
        name: "Muhammad Adeel",
        headline: "Front-End Web Developer • BSCS Student",
        email: "malikadeelawan1212@gmail.com",
        phone: "0327-1494095",
        location: "Lahore, Pakistan",
        githubUsername: "Adeel0951",
        linkedin: "https://www.linkedin.com/in/muhammad-adeel-b2009b414",
        whatsapp: "https://wa.me/923271494095",
        resumeUrl: "assets/resume.pdf"
    },
    
    // Skill Categories: programming, ai, web, marketing
    skills: [
        { name: "HTML5", category: "programming", icon: "fa-brands fa-html5", tech: "html" },
        { name: "CSS3", category: "programming", icon: "fa-brands fa-css3-alt", tech: "css" },
        { name: "JavaScript", category: "programming", icon: "fa-brands fa-square-js", tech: "javascript" },
        { name: "C++", category: "programming", icon: "fa-solid fa-code", tech: "cpp" },
        { name: "Python", category: "programming", icon: "fa-brands fa-python", tech: "python" },
        { name: "SQL", category: "programming", icon: "fa-solid fa-database", tech: "sql" },

        { name: "Python", category: "ai", icon: "fa-brands fa-python", tech: "python" },
        { name: "AI Automation", category: "ai", icon: "fa-solid fa-robot", tech: "ai-automation" },
        { name: "n8n", category: "ai", icon: "fa-solid fa-gears", tech: "n8n" },
        { name: "REST APIs", category: "ai", icon: "fa-solid fa-plug", tech: "rest-api" },

        { name: "Git", category: "web", icon: "fa-brands fa-git-alt", tech: "git" },
        { name: "GitHub", category: "web", icon: "fa-brands fa-github", tech: "github" },
        { name: "Netlify", category: "web", icon: "fa-solid fa-server", tech: "netlify" },
        { name: "VS Code", category: "web", icon: "fa-solid fa-laptop-code", tech: "vscode" },
        { name: "Responsive Design", category: "web", icon: "fa-solid fa-mobile-screen", tech: "responsive" },
        { name: "Basic SEO", category: "web", icon: "fa-solid fa-magnifying-glass-chart", tech: "seo" },

        { name: "SQL Queries", category: "marketing", icon: "fa-solid fa-database", tech: "sql-queries" },
        { name: "ERD Design", category: "marketing", icon: "fa-solid fa-diagram-project", tech: "erd" },
        { name: "OOP", category: "marketing", icon: "fa-solid fa-cubes", tech: "oop" },
        { name: "Data Structures & Algorithms", category: "marketing", icon: "fa-solid fa-sitemap", tech: "dsa" },
        { name: "Computer Networks", category: "marketing", icon: "fa-solid fa-network-wired", tech: "networks" }
    ],
    
    experience: [
        {
            role: "Front-End Website Developer",
            company: "Freelance",
            period: "2024 - Present",
            description: "Designing and building responsive, mobile-friendly business websites with HTML, CSS, and JavaScript. Deploying and maintaining live sites on Netlify using Git and GitHub for version control."
        },
        {
            role: "Database Designer & Developer",
            company: "University of Lahore (Course Project)",
            period: "2025",
            description: "Designed a relational database for an Online Food Management System, building ER diagrams, normalized tables, and optimized SQL queries."
        }
    ],
    
    education: [
        {
            degree: "BS Computer Science (BSCS)",
            school: "University of Lahore",
            period: "2024 - 2028",
            description: "Coursework spanning web development, database management, object-oriented programming, data structures & algorithms, and computer networks."
        },
        {
            degree: "Intermediate (ICS)",
            school: "Superior Group of Colleges, Jaurabad Campus",
            period: "2022 - 2024",
            description: "Studied Computer Science with a focus on programming fundamentals and mathematics, laying the groundwork for a degree in Computer Science."
        },
        {
            degree: "Matriculation",
            school: "Fauji Foundation Higher Secondary School",
            period: "2020 - 2022",
            description: "Completed secondary education with a strong foundation in science and mathematics."
        }
    ],
    
    services: [
        {
            title: "Responsive Website Design",
            description: "Building modern, mobile-friendly business websites with clean layouts using HTML5, CSS3, and JavaScript that look great on any device.",
            icon: "fa-solid fa-mobile-screen"
        },
        {
            title: "Landing Page Development",
            description: "Fast, conversion-focused landing pages with clear structure, engaging visuals, and cross-browser compatibility.",
            icon: "fa-solid fa-laptop-code"
        },
        {
            title: "Website Deployment & Hosting",
            description: "Deploying and maintaining live websites on Netlify, with Git and GitHub used for version control and smooth updates.",
            icon: "fa-solid fa-server"
        },
        {
            title: "UI/UX Implementation",
            description: "Translating designs into clean, user-friendly interfaces with attention to navigation, accessibility, and overall user experience.",
            icon: "fa-solid fa-pen-ruler"
        },
        {
            title: "Basic SEO & Performance",
            description: "Optimizing page structure and load speed for better visibility and a smoother browsing experience.",
            icon: "fa-solid fa-magnifying-glass-chart"
        },
        {
            title: "Automation Scripting (Learning)",
            description: "Currently expanding into Python and n8n to build simple automations and connect apps via REST APIs.",
            icon: "fa-solid fa-gears"
        }
    ],
    
    projects: [
        {
            name: "AM Agency Portfolio",
            description: "A responsive portfolio website built to showcase business website projects, with a clean layout and smooth navigation.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            category: "portfolio",
            github: "https://github.com/Adeel0951",
            live: "https://amagency1.netlify.app/",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%2312100d%22/><circle cx=%22200%22 cy=%22100%22 r=%2250%22 fill=%22%23ffb000%22 opacity=%220.2%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2214%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>AM Agency Portfolio</text></svg>"
        },
        {
            name: "Dental Clinic Website",
            description: "A responsive business website with a modern UI, WhatsApp integration, a contact form, and a fully mobile-friendly layout, hosted on Netlify.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            category: "business",
            github: "https://github.com/Adeel0951",
            live: "https://demodentalclinic0.netlify.app",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%2312100d%22/><rect x=%22120%22 y=%2270%22 width=%22160%22 height=%2260%22 rx=%2210%22 fill=%22%23ff8f00%22 opacity=%220.2%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2214%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Dental Clinic Website</text></svg>"
        },
        {
            name: "Apex Tutor Website",
            description: "A responsive educational website for a tutoring service, featuring a modern multi-page interface optimized for desktop, tablet, and mobile.",
            tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            category: "education",
            github: "https://github.com/Adeel0951",
            live: "https://adeel0951.github.io/apextutor/",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%2312100d%22/><path d=%22M150 130 L200 70 L250 130 Z%22 fill=%22%23ffd54f%22 opacity=%220.2%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2214%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Apex Tutor Website</text></svg>"
        },
        {
            name: "Rent A Car Demo Website",
            description: "A modern demo website for a car rental business with responsive Home, Fleet, Services, and Contact pages, built for fast loading and mobile-friendliness.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "demo",
            github: "https://github.com/Adeel0951",
            live: "https://adeel0951.github.io/rentacardemo/",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%2312100d%22/><circle cx=%22200%22 cy=%22100%22 r=%2260%22 fill=%22%23306998%22 opacity=%220.2%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2214%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Rent A Car Demo</text></svg>"
        },
        {
            name: "Force Gym Website",
            description: "A modern, responsive website for a gym and fitness business, featuring a bold layout, clean navigation, and mobile-friendly design.",
            tags: ["HTML", "CSS", "JavaScript"],
            category: "business",
            github: "https://github.com/Adeel0951",
            live: "https://force-gym-beta.vercel.app/",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%2312100d%22/><rect x=%22140%22 y=%2260%22 width=%22120%22 height=%2280%22 rx=%228%22 fill=%22%23ffb000%22 opacity=%220.2%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2214%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Force Gym Website</text></svg>"
        }
    ],
    
    achievements: [
        {
            title: "6 Live Business Websites",
            description: "Designed, built, and deployed four responsive business and demo websites, from portfolios to a full-stack tutoring platform.",
            icon: "fa-solid fa-circle-check"
        },
        {
            title: "Full-Stack Tutor Platform",
            description: "Built the Apex Tutor Website end-to-end with a PHP and MySQL backend alongside a responsive front-end.",
            icon: "fa-solid fa-graduation-cap"
        },
        {
            title: "Git & Deployment Workflow",
            description: "Adopted a Git and GitHub workflow for version control, with every project deployed and hosted live on Netlify.",
            icon: "fa-solid fa-bolt"
        }
    ],
    
    blog: [
        {
            title: "Building My First Responsive Business Website",
            excerpt: "Lessons learned while designing and deploying the Dental Clinic Website, from layout planning to WhatsApp integration and mobile testing.",
            date: "May 12, 2026",
            readTime: "5 min read",
            category: "Web Development",
            link: "#",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%230a0907%22/><circle cx=%22200%22 cy=%22100%22 r=%2230%22 fill=%22%23ffb000%22 opacity=%220.3%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2212%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Web Dev Article</text></svg>"
        },
        {
            title: "Why I'm Learning Python and AI Automation",
            excerpt: "A look at how I'm expanding beyond front-end development into Python, n8n, and REST APIs to build simple automations.",
            date: "April 28, 2026",
            readTime: "4 min read",
            category: "Learning",
            link: "#",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%230a0907%22/><rect x=%22150%22 y=%2280%22 width=%22100%22 height=%2240%22 fill=%22%23ffd54f%22 opacity=%220.3%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2212%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Learning Article</text></svg>"
        },
        {
            title: "Git & GitHub Workflow for Small Projects",
            excerpt: "How I use Git and GitHub to version control and deploy my websites to Netlify, and why it matters even for small projects.",
            date: "March 15, 2026",
            readTime: "4 min read",
            category: "Tools & Workflow",
            link: "#",
            image: "data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 200%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%230a0907%22/><circle cx=%22200%22 cy=%22100%22 r=%2240%22 fill=%22%23ff8f00%22 opacity=%220.3%22/><text x=%2250%25%22 y=%2255%25%22 font-family=%22Space Grotesk%22 font-size=%2212%22 fill=%22%23fffdf0%22 text-anchor=%22middle%22>Workflow Article</text></svg>"
        }
    ]
};;

// Application State Variables
const state = {
    activeSkillCategory: 'all',
    activeProjectFilter: 'all',
    particles: [],
    mouse: { x: null, y: null, radius: 120 }
};

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Loader Simulation
    initLoader();
    
    // 2. Custom Cursor Tracking Setup
    initCustomCursor();

    // 3. Navigation Controls Init
    initNavigation();

    // 4. Typing Animation Carousel
    initTypingCarousel();

    // 5. Dynamic Data Rendering Engine
    renderAllComponents();

    // 6. Interactive Element Events (Tilted cards, Filters, Tabs)
    initInteractiveEvents();

    // 7. Interactive Matrix Rain Background Engine
    initParticleEngine();

    // 8. Contact Form Validator Hook
    initContactForm();

    // 9. Scroll Animation Triggers & Reveal Observers
    initScrollObservers();
    
    // Set Year
    document.getElementById('current-year').textContent = new Date().getFullYear();
});

/* ==========================================================================
   1. LOADER OVERLAY ENGINE
   ========================================================================== */
function initLoader() {
    const loader = document.getElementById("loader");
    const loaderBar = document.getElementById("loader-bar");
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            setTimeout(() => {
                loader.classList.add("loaded");
                document.body.style.overflow = "visible";
            }, 500);
        }
        loaderBar.style.width = `${progress}%`;
    }, 40);
}

/* ==========================================================================
   2. CUSTOM PREMIUM CURSOR CONTROLLER
   ========================================================================== */
function initCustomCursor() {
    const cursor = document.getElementById("custom-cursor");
    const glow = document.getElementById("custom-cursor-glow");
    
    if (!cursor || !glow) return;

    const sections = document.querySelectorAll("section");

    window.addEventListener("mousemove", (e) => {
        state.mouse.x = e.clientX;
        state.mouse.y = e.clientY;
        
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        
        // Slight lag tracking on the glow circle for dynamic premium feel
        glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;

        // Detect which section the cursor is currently hovering over
        let currentSection = "hero";
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
                currentSection = sec.getAttribute("id");
            }
        });
        document.body.setAttribute("data-cursor-section", currentSection);
    });

    // Attach hover listener for interactive states
    const interactiveElements = document.querySelectorAll("a, button, input, textarea, .tab-btn, .filter-btn, .project-card, .social-icon");
    interactiveElements.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}

/* ==========================================================================
   3. NAVIGATION & MENU CONTROLLER
   ========================================================================== */
function initNavigation() {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll Sticky Bar Adjustments
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        // Active Navigation Link Highlight Logic
        let currentSection = "";
        const sections = document.querySelectorAll("section");
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) {
                currentSection = sec.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });

    // Mobile Hamburger Menu Click Toggle
    navToggle.addEventListener("click", () => {
        const isOpen = navToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen);
    });

    // Dismiss Menu Drawer on Link Click
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.classList.remove("open");
            navMenu.classList.remove("open");
            navToggle.setAttribute("aria-expanded", false);
        });
    });
}

/* ==========================================================================
   4. TYPING CAROUSEL ENGINE
   ========================================================================== */
function initTypingCarousel() {
    const element = document.getElementById("typing-element");
    if (!element) return;
    
    const phrases = ["Front-End Developer", "Web Designer", "BSCS Student", "Problem Solver", "Quick Learner"];
    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIdx];
        
        if (isDeleting) {
            element.textContent = currentPhrase.substring(0, charIdx - 1);
            charIdx--;
            typingSpeed = 50;
        } else {
            element.textContent = currentPhrase.substring(0, charIdx + 1);
            charIdx++;
            typingSpeed = 120;
        }

        if (!isDeleting && charIdx === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Hold phrase visible
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1000);
}

/* ==========================================================================
   5. DYNAMIC DOM COMPONENT RENDERING
   ========================================================================== */
function renderAllComponents() {
    renderSkills();
    renderExperience();
    renderEducation();
    renderServices();
    renderProjects();
    renderAchievements();
    renderBlog();
}

function renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    const filtered = state.activeSkillCategory === 'all' 
        ? APP_CONFIG.skills 
        : APP_CONFIG.skills.filter(s => s.category === state.activeSkillCategory);
        
    filtered.forEach(skill => {
        const card = document.createElement("div");
        card.className = "skill-card animate-on-scroll";
        card.setAttribute("data-tech", skill.tech);
        card.innerHTML = `
            <div class="skill-icon"><i class="${skill.icon}"></i></div>
            <span class="skill-name">${skill.name}</span>
        `;
        container.appendChild(card);
    });
}

function renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;
    
    container.innerHTML = "";
    APP_CONFIG.experience.forEach(exp => {
        const item = document.createElement("div");
        item.className = "timeline-item animate-on-scroll";
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${exp.period}</div>
            <div class="timeline-content">
                <h3 class="timeline-title">${exp.role}</h3>
                <span class="timeline-company">${exp.company}</span>
                <p class="timeline-text">${exp.description}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;
    
    container.innerHTML = "";
    APP_CONFIG.education.forEach(edu => {
        const item = document.createElement("div");
        item.className = "timeline-item animate-on-scroll";
        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${edu.period}</div>
            <div class="timeline-content">
                <h3 class="timeline-title">${edu.degree}</h3>
                <span class="timeline-company">${edu.school}</span>
                <p class="timeline-text">${edu.description}</p>
            </div>
        `;
        container.appendChild(item);
    });
}

function renderServices() {
    const container = document.getElementById("services-container");
    if (!container) return;
    
    container.innerHTML = "";
    APP_CONFIG.services.forEach(serv => {
        const card = document.createElement("div");
        card.className = "service-card animate-on-scroll";
        card.innerHTML = `
            <div class="service-icon-box"><i class="${serv.icon}"></i></div>
            <h3 class="service-title">${serv.title}</h3>
            <p class="service-desc">${serv.description}</p>
        `;
        container.appendChild(card);
    });
}

function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;
    
    container.innerHTML = "";
    
    const filtered = state.activeProjectFilter === 'all'
        ? APP_CONFIG.projects
        : APP_CONFIG.projects.filter(p => p.category === state.activeProjectFilter);
        
    filtered.forEach(proj => {
        const card = document.createElement("div");
        card.className = "project-card animate-on-scroll";
        
        let tagsHtml = proj.tags.map(t => `<span class="tech-tag">${t}</span>`).join("");
        
        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${proj.image}" alt="${proj.name}" class="project-img" loading="lazy">
                <div class="project-overlay">
                    <a href="${proj.github}" target="_blank" rel="noopener" aria-label="Github Code link" class="project-link-icon"><i class="fa-brands fa-github"></i></a>
                    <a href="${proj.live}" target="_blank" rel="noopener" aria-label="Live Demo Link" class="project-link-icon"><i class="fa-solid fa-up-right-from-square"></i></a>
                </div>
            </div>
            <div class="project-info">
                <div class="project-tech">${tagsHtml}</div>
                <h3 class="project-name">${proj.name}</h3>
                <p class="project-desc">${proj.description}</p>
                <div class="project-links">
                    <a href="${proj.github}" target="_blank" rel="noopener" class="project-btn"><i class="fa-brands fa-github"></i> Source</a>
                    <a href="${proj.live}" target="_blank" rel="noopener" class="project-btn"><i class="fa-solid fa-laptop"></i> Live Demo</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderAchievements() {
    const container = document.getElementById("achievements-container");
    if (!container) return;
    
    container.innerHTML = "";
    APP_CONFIG.achievements.forEach(ach => {
        const card = document.createElement("div");
        card.className = "achievement-card animate-on-scroll";
        card.innerHTML = `
            <div class="achievement-icon"><i class="${ach.icon}"></i></div>
            <h3 class="achievement-title">${ach.title}</h3>
            <p class="achievement-desc">${ach.description}</p>
        `;
        container.appendChild(card);
    });
}

function renderBlog() {
    const container = document.getElementById("blog-container");
    if (!container) return;
    
    container.innerHTML = "";
    APP_CONFIG.blog.forEach(post => {
        const card = document.createElement("div");
        card.className = "blog-card animate-on-scroll";
        card.innerHTML = `
            <div class="blog-img-wrapper">
                <img src="${post.image}" alt="${post.title}" class="blog-img" loading="lazy">
            </div>
            <div class="blog-info">
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <span>•</span>
                    <span>${post.readTime}</span>
                </div>
                <h3 class="blog-title"><a href="${post.link}">${post.title}</a></h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${post.link}" class="blog-read-more">Read Article <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        `;
        container.appendChild(card);
    });
}

/* ==========================================================================
   6. INTERACTIVE EVENTS (TILT CARDS & TABS ENGINE)
   ========================================================================== */
function initInteractiveEvents() {
    // Skills Tabs Click Handling
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.activeSkillCategory = btn.getAttribute("data-category");
            renderSkills();
            initCustomCursor(); // Re-bind mouse listeners to new elements
            initCardGlowEffects();
            triggerScrollReveal();
        });
    });

    // Projects Category Click Handling
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.activeProjectFilter = btn.getAttribute("data-filter");
            renderProjects();
            initCustomCursor(); // Re-bind mouse listeners to new elements
            triggerScrollReveal();
        });
    });

    // Initialize Card Hover coordinates
    initCardGlowEffects();
    initMagneticButtons();
}

function initCardGlowEffects() {
    const cards = document.querySelectorAll(".skill-card, .service-card, .project-card, .blog-card");
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });
}

function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll(".magnetic-btn");
    if (window.innerWidth <= 768) return;

    magneticBtns.forEach(btn => {
        btn.addEventListener("mousemove", (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            btn.style.transform = `translate3d(${x * 0.35}px, ${y * 0.35}px, 0)`;
            btn.style.boxShadow = `0 15px 30px rgba(255, 176, 0, 0.3)`;
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = `translate3d(0px, 0px, 0)`;
            btn.style.boxShadow = "";
        });
    });
}

/* ==========================================================================
   7. INTERACTIVE MATRIX AMBER RAIN ENGINE
   ========================================================================== */
function initParticleEngine() {
    const canvas = document.getElementById("bg-particles");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters: Binary, hex digits, and programming tokens
    const alphabet = "0101010101ABCDEF{}[];<>+=-&*|XYZ";
    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    
    let rainDrops = [];
    let speeds = [];
    
    function initDrops() {
        columns = Math.floor(canvas.width / fontSize);
        rainDrops = [];
        speeds = [];
        for (let x = 0; x < columns; x++) {
            rainDrops[x] = Math.random() * -canvas.height;
            speeds[x] = Math.random() * 1.5 + 0.5;
        }
    }
    
    initDrops();
    window.addEventListener("resize", initDrops);

    function draw() {
        ctx.fillStyle = "rgba(10, 9, 7, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.font = fontSize + "px 'Space Grotesk', monospace";
        
        for (let i = 0; i < rainDrops.length; i++) {
            const char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            const x = i * fontSize;
            const y = rainDrops[i];
            
            // Check distance to mouse
            let isNearMouse = false;
            if (state.mouse.x !== null && state.mouse.y !== null) {
                const dx = state.mouse.x - x;
                const dy = state.mouse.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 120) {
                    isNearMouse = true;
                }
            }
            
            // Subtle amber HUD color mapping (not over)
            if (isNearMouse) {
                ctx.fillStyle = "rgba(255, 213, 79, 0.85)"; // Lighter gold glow near mouse
                ctx.shadowColor = "rgba(255, 176, 0, 0.8)";
                ctx.shadowBlur = 6;
            } else {
                const opacity = Math.max(0.08, 1 - (y / canvas.height));
                ctx.fillStyle = `rgba(255, 176, 0, ${opacity * 0.12})`; // Highly subtle amber drops
                ctx.shadowBlur = 0;
            }
            
            ctx.fillText(char, x, y);
            
            // Fall speed
            rainDrops[i] += speeds[i] * fontSize * 0.4;
            
            // Loop back
            if (rainDrops[i] > canvas.height) {
                rainDrops[i] = 0;
                speeds[i] = Math.random() * 1.5 + 0.5;
            }
        }
    }
    
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;
    
    function animate(time) {
        requestAnimationFrame(animate);
        
        const delta = time - lastTime;
        if (delta > interval) {
            lastTime = time - (delta % interval);
            draw();
        }
    }
    
    requestAnimationFrame(animate);
}

/* ==========================================================================
   8. CONTACT FORM VALIDATOR HOOK
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("form-name");
        const email = document.getElementById("form-email");
        const subject = document.getElementById("form-subject");
        const message = document.getElementById("form-message");
        
        let isValid = true;
        
        // Name Validation
        if (!name.value.trim()) {
            name.parentElement.classList.add("invalid");
            isValid = false;
        } else {
            name.parentElement.classList.remove("invalid");
        }
        
        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            email.parentElement.classList.add("invalid");
            isValid = false;
        } else {
            email.parentElement.classList.remove("invalid");
        }

        // Subject Validation
        if (!subject.value.trim()) {
            subject.parentElement.classList.add("invalid");
            isValid = false;
        } else {
            subject.parentElement.classList.remove("invalid");
        }
        
        // Message Validation
        if (!message.value.trim()) {
            message.parentElement.classList.add("invalid");
            isValid = false;
        } else {
            message.parentElement.classList.remove("invalid");
        }
        
        if (isValid) {
            status.className = "form-status";
            status.textContent = "Establishing connection link...";
            
            setTimeout(() => {
                status.className = "form-status success";
                status.textContent = "Data packet dispatched! Connection established.";
                form.reset();
            }, 1800);
        }
    });
}

/* ==========================================================================
   9. SCROLL OBSERVERS & VISUAL REVEALS
   ========================================================================== */
let observer;

function initScrollObservers() {
    const progressBar = document.getElementById("scroll-progress-bar");
    const backToTop = document.getElementById("back-to-top");
    
    window.addEventListener("scroll", () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
        
        if (window.scrollY > 500) {
            backToTop.style.transform = "scale(1)";
        } else {
            backToTop.style.transform = "scale(0)";
        }
    });
    
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                if (entry.target.classList.contains("about-stats")) {
                    animateCounters();
                }
            }
        });
    }, {
        threshold: 0.12
    });
    
    triggerScrollReveal();
}

function triggerScrollReveal() {
    const revealElements = document.querySelectorAll(".animate-on-scroll");
    revealElements.forEach(el => observer.observe(el));
}

function animateCounters() {
    const statNums = document.querySelectorAll(".stat-num");
    statNums.forEach(num => {
        const target = parseInt(num.getAttribute("data-count"), 10);
        const duration = 1500;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            if (current >= target) {
                num.textContent = target;
            } else {
                num.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            }
        };
        
        updateCount();
    });
}
