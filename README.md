# Lighton Academy — Static Website

**Lighton Static** is a fully static, bilingual (English/Arabic) educational platform built for Lighton Academy. It replaces a legacy PHP/MySQL backend with a modern, serverless frontend architecture. It features a dynamic adaptive placement test, bilingual support, and automated lead generation—all without managing a backend server.

### ✨ Key Features
- **Bilingual Engine:** Instant English/Arabic switching (RTL/LTR) using `i18n.js`.
- **Dynamic Content Loader:** Courses and testimonials load dynamically from `cardloader.js` and support infinite expansion.
- **Adaptive Placement Test:** A 60-question randomized test powered by a Google Sheets question bank. Handles A1–C2 levels with strict proportional distribution.
- **Lead Capture:** Automatically stores student results and contact info in a Google Sheet via a secure Cloudflare Worker proxy.
- **Modern UI:** Fully responsive desktop and mobile layouts with an animated bottom-navigation bar and a testimonial carousel.

### 🛠️ Tech Stack
- **Hosting:** Cloudflare Pages (Static edge hosting)
- **Serverless Proxy:** Cloudflare Workers (Routes `/questions` and `/lead`)
- **Backend / Database:** Google Apps Script & Google Sheets (Headless CMS + Lead storage)
- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)

### 🚀 Local Development
1. Clone the repository.
2. Open the root folder in your terminal.
3. Serve the static files using Python:
   ```bash
   python -m http.server 8000

lighton-static/
├── index.html
├── courses.html
├── results.html
├── about.html
├── contact.html
├── placement-test.html
├── placement-result.html
├── privacy.html
├── terms.html
├── .gitignore
├── README.md
├── assets/
│   ├── css/
│   │   └── main.css
│   ├── js/
│   │   ├── i18n.js
│   │   ├── load-components.js
│   │   ├── cardloader.js
│   │   ├── placement.js
│   │   ├── cookie-consent.js
│   │   └── testimonials.js (optional, if kept separate)
│   ├── img/
│   └── icon/
└── includes/
    ├── navigation.html
    └── footer.html

