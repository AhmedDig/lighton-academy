// assets/js/load-components.js

document.addEventListener('DOMContentLoaded', function () {
    const lang = localStorage.getItem('lighton_lang') || 'en';

    // ===== Helper: Get the current page's base filename (without .html) =====
    function getCurrentPage() {
        let path = window.location.pathname.replace(/^\/|\/$/g, '');
        // If empty, it's the homepage
        if (path === '') return 'index';
        // Strip any trailing .html if present
        if (path.endsWith('.html')) path = path.slice(0, -5);
        return path;
    }

    // ===== Helper: Get a link's target filename (without .html) =====
    function getLinkPage(link) {
        let href = link.getAttribute('href');
        if (!href) return '';
        // Remove any query strings or hash
        href = href.split('?')[0].split('#')[0];
        if (href.endsWith('.html')) href = href.slice(0, -5);
        return href;
    }

    // ===== Load Navigation (desktop) =====
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        fetch('includes/navigation.html')
            .then(response => response.text())
            .then(html => {
                navPlaceholder.innerHTML = html;

                // ✅ Force Font Awesome to reprocess dynamically added icons
                if (typeof FontAwesome !== 'undefined') {
                    FontAwesome.dom.i2svg();
                }

                // ✅ Set active desktop navigation link
                const currentPage = getCurrentPage();
                document.querySelectorAll('.main-navigation .nav-link').forEach(link => {
                    const linkPage = getLinkPage(link);
                    link.classList.remove('active');
                    if (linkPage === currentPage) {
                        link.classList.add('active');
                    }
                });

                // Apply language to navigation
                applyLanguage(lang);
            })
            .catch(err => console.error('Navigation load error:', err));
    }

    // ===== Load Footer (includes the mobile bottom nav) =====
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = html;

                // ✅ Set active mobile navigation link
                const currentPage = getCurrentPage();
                document.querySelectorAll('#mobile-nav .nav-link').forEach(link => {
                    const linkPage = getLinkPage(link);
                    link.classList.remove('active');
                    if (linkPage === currentPage) {
                        link.classList.add('active');
                    }
                });

                applyLanguage(lang);
            })
            .catch(err => console.error('Footer load error:', err));
    }
});