// assets/js/load-components.js

document.addEventListener('DOMContentLoaded', function () {
    const lang = localStorage.getItem('lighton_lang') || 'en';

    // --- Load Navigation (desktop) ---
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

                // ✅ Set active navigation link based on current URL (desktop)
                const currentPage = window.location.pathname.split('/').pop();
                document.querySelectorAll('.nav-link').forEach(link => {
                    const linkPage = link.getAttribute('href');
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

    // --- Load Footer (includes the mobile bottom nav) ---
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch('includes/footer.html')
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = html;

                // ✅ Set active navigation link for the bottom mobile nav
                const currentPage = window.location.pathname.split('/').pop();
                document.querySelectorAll('#mobile-nav .nav-link').forEach(link => {
                    const linkPage = link.getAttribute('href');
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