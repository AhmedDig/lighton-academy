// ===== DATA =====
// Courses – 12 courses across 4 categories (3 each)
const coursesData = [
    // English
    { titleKey: "course_eng_conv_title", descKey: "course_eng_conv_desc", icon: "fa-language", category: "english" },
    { titleKey: "course_eng_bus_title", descKey: "course_eng_bus_desc", icon: "fa-language", category: "english" },
    { titleKey: "course_eng_tech_title", descKey: "course_eng_tech_desc", icon: "fa-language", category: "english" },
    // Media
    { titleKey: "course_med_content_title", descKey: "course_med_content_desc", icon: "fa-video", category: "media" },
    { titleKey: "course_med_edit_title", descKey: "course_med_edit_desc", icon: "fa-video", category: "media" },
    { titleKey: "course_med_motion_title", descKey: "course_med_motion_desc", icon: "fa-video", category: "media" },
    // Marketing
    { titleKey: "course_mkt_digital_title", descKey: "course_mkt_digital_desc", icon: "fa-chart-line", category: "marketing" },
    { titleKey: "course_mkt_social_title", descKey: "course_mkt_social_desc", icon: "fa-chart-line", category: "marketing" },
    { titleKey: "course_mkt_analytics_title", descKey: "course_mkt_analytics_desc", icon: "fa-chart-line", category: "marketing" },
    // Programming
    { titleKey: "course_prg_python_title", descKey: "course_prg_python_desc", icon: "fa-code", category: "programming" },
    { titleKey: "course_prg_web_title", descKey: "course_prg_web_desc", icon: "fa-code", category: "programming" },
    { titleKey: "course_prg_datasci_title", descKey: "course_prg_datasci_desc", icon: "fa-code", category: "programming" },
    // AI (Your new additions - icons are valid FA6!)
    { titleKey: "course_ai_prod_title", descKey: "course_ai_prod_desc", icon: "fa-workflow", category: "ai" },
    { titleKey: "course_ai_sys_title", descKey: "course_ai_sys_desc", icon: "fa-robot", category: "ai" },
    { titleKey: "course_ai_biz_title", descKey: "course_ai_biz_desc", icon: "fa-brain", category: "ai" },
];
function renderStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    const total = 5;

    for (let i = 0; i < total; i++) {
        if (i < full) {
            // Filled star (gold)
            html += '<i class="fas fa-star" style="color: var(--accent);"></i>';
        } else if (half && i === full) {
            // Half star (gold)
            html += '<i class="fas fa-star-half-alt" style="color: var(--accent);"></i>';
        } else {
            // Empty star (black/grey)
            html += '<i class="fas fa-star" style="color: var(--text-dark);"></i>';
        }
    }
    return html;
}

// Testimonials – 20 static ratings (consistent every load)
const testimonialsData = [
    { nameKey: "student1", textKey: "testimonial1", rating: 5 },
    { nameKey: "student2", textKey: "testimonial2", rating: 5 },
    { nameKey: "student3", textKey: "testimonial3", rating: 5 },
    { nameKey: "student4", textKey: "testimonial4", rating: 5 },
    { nameKey: "student5", textKey: "testimonial5", rating: 5 },
    { nameKey: "student6", textKey: "testimonial6", rating: 4.5 },
    { nameKey: "student7", textKey: "testimonial7", rating: 5 },
    { nameKey: "student8", textKey: "testimonial8", rating: 5 },
    { nameKey: "student9", textKey: "testimonial9", rating: 4 },
    { nameKey: "student10", textKey: "testimonial10", rating: 5 },
    { nameKey: "student11", textKey: "testimonial11", rating: 5 },
    { nameKey: "student12", textKey: "testimonial12", rating: 5 },
    { nameKey: "student13", textKey: "testimonial13", rating: 5 },
    { nameKey: "student14", textKey: "testimonial14", rating: 4 },
    { nameKey: "student15", textKey: "testimonial15", rating: 5 },
    { nameKey: "student16", textKey: "testimonial16", rating: 5 },
    { nameKey: "student17", textKey: "testimonial17", rating: 5 },
    { nameKey: "student18", textKey: "testimonial18", rating: 5 },
    { nameKey: "student19", textKey: "testimonial19", rating: 4.5 },
    { nameKey: "student20", textKey: "testimonial20", rating: 5 }
];

// ===== CAROUSEL (Homepage only) =====
let currentIndex = 0;
let autoSlideInterval;
let track, indicators;

function getLang() {
    return localStorage.getItem('lighton_lang') || 'en';
}

function renderCarousel() {
    const container = document.getElementById('testimonialCarousel');
    if (!container) return;
    track = container.querySelector('.carousel-track');
    indicators = container.querySelector('.carousel-indicators');
    if (!track || !indicators) return;

    const lang = getLang();
    track.innerHTML = '';
    indicators.innerHTML = '';

    // Show only first 6 testimonials on homepage
    const displayData = testimonialsData.slice(0, 6);

    displayData.forEach((t, index) => {
        const name = translations[lang][t.nameKey] || t.nameKey;
        const text = translations[lang][t.textKey] || t.textKey;
        const rating = t.rating;

        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="pointer-effect">
                <div class="name">${name}</div>
                <div class="stars">${renderStars(rating)}</div>
            </div>
            <p>${text}</p>
        `;
        track.appendChild(card);

        const dot = document.createElement('div');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.dataset.index = index;
        dot.addEventListener('click', () => goTo(index));
        indicators.appendChild(dot);
    });

    // Reset to first card
    currentIndex = 0;
    goTo(0);
    startAutoSlide();
}

function goTo(index) {
    const cards = track?.querySelectorAll('.testimonial-card');
    if (!cards || cards.length === 0) return;
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    currentIndex = index;

    const cardWidth = cards[0].offsetWidth + 24; // 24 = gap
    const isRTL = document.documentElement.dir === 'rtl';
    let translateValue = isRTL ? cardWidth * currentIndex : -(cardWidth * currentIndex);
    track.style.transform = `translateX(${translateValue}px)`;

    document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
    });
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => goTo(currentIndex + 1), 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

function initCarousel() {
    const container = document.getElementById('testimonialCarousel');
    if (!container) return;
    track = container.querySelector('.carousel-track');
    indicators = container.querySelector('.carousel-indicators');
    if (!track || !indicators) return;

    // Arrow buttons
    container.querySelector('.carousel-btn.prev')?.addEventListener('click', () => {
        goTo(currentIndex - 1);
        stopAutoSlide();
        startAutoSlide();
    });
    container.querySelector('.carousel-btn.next')?.addEventListener('click', () => {
        goTo(currentIndex + 1);
        stopAutoSlide();
        startAutoSlide();
    });

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoSlide);
    track.addEventListener('mouseleave', startAutoSlide);

    // Re-render on language change
    document.addEventListener('languageChanged', () => {
        renderCarousel();
        startAutoSlide();
    });

    renderCarousel();
}

// ===== RENDER COURSES (Courses page) =====
function renderCourses() {
    const container = document.getElementById('courseCards');
    if (!container) return;
    const lang = getLang();
    container.innerHTML = '';
    coursesData.forEach(course => {
        const title = translations[lang][course.titleKey] || course.titleKey;
        const desc = translations[lang][course.descKey] || course.descKey;
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-icon"><i class="fas ${course.icon}"></i></div>
            <h3 class="${course.titleKey}">${title}</h3>
            <p class="${course.descKey}">${desc}</p>
            <a href="contact.html" class="btn btn-primary" data-i18n="enquire">Enquire</a>
        `;
        container.appendChild(card);
    });
}

// ===== RENDER ALL TESTIMONIALS (Results page) =====

function renderAllTestimonials() {
    const container = document.getElementById('allTestimonials');
    if (!container) return;
    const lang = getLang();
    container.innerHTML = '';
    testimonialsData.forEach(t => {
        const name = translations[lang][t.nameKey] || t.nameKey;
        const text = translations[lang][t.textKey] || t.textKey;
        const rating = t.rating;
        const card = document.createElement('div');
        card.className = 'testimonial-card full';
        card.innerHTML = `
            <div class="name">${name}</div>
            <div class="stars">${renderStars(rating)}</div>
            <p>${text}</p>
        `;
        container.appendChild(card);
    });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function () {
    // Carousel on homepage
    if (document.getElementById('testimonialCarousel')) {
        initCarousel();
    }
    // Courses on courses page
    if (document.getElementById('courseCards')) {
        renderCourses();
        document.addEventListener('languageChanged', renderCourses);
    }
    // All testimonials on results page
    if (document.getElementById('allTestimonials')) {
        renderAllTestimonials();
        document.addEventListener('languageChanged', renderAllTestimonials);
    }
});