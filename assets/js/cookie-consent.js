// cookie-consent.js

function initCookieConsent() {
    // Prevent duplicate banners
    if (document.querySelector('.cookie-consent')) return;
    if (document.cookie.split('; ').find(row => row.startsWith('lighton_consent='))) return;

    const banner = document.createElement('div');
    banner.className = 'cookie-consent';
    banner.innerHTML = `
        <p>We use cookies to enhance your experience, analyze traffic, and personalize content. Essential cookies are always active. Optional cookies (analytics, marketing) require your consent.</p>
        <div class="btn-group">
            <button class="btn-consent" id="acceptCookies">Accept Optional Cookies</button>
            <button class="btn-decline" id="declineCookies">Essential Only</button>
        </div>
    `;
    document.body.appendChild(banner);

    document.getElementById('acceptCookies').addEventListener('click', () => {
        document.cookie = "lighton_consent=accepted; path=/; max-age=" + (365 * 24 * 3600);
        banner.remove();
        location.reload();
    });

    document.getElementById('declineCookies').addEventListener('click', () => {
        document.cookie = "lighton_consent=declined; path=/; max-age=" + (365 * 24 * 3600);
        banner.remove();
    });
}

// Initial call on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}