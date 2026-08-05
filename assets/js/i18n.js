// i18n.js – Language switching functionality

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_courses: "Courses",
        nav_results: "Results",
        nav_about: "About",
        nav_contact: "Contact",
        nav_start: "Start Learning",
        nav_language: "Language",

        // Home page
        home_title: "Learn Skills That Actually Matter",
        home_desc: "4‑Month Programs in English, Content Creation & Marketing",
        home_arabic: "مهارات حقيقية لسوق العمل",
        start_learning: "Start Learning",
        view_courses: "View Courses",
        view_more_results: "View More",
        rating: "4.8 rating",
        students: "2,000+ students",
        certified: "Certified programs",
        certified_badge: "CERTIFIED",
        sarah_success: "Sarah's Success",
        what_our_students_say: "What Our Students Say",

        choose_path: "Choose Your Path. Commit for 4 Months. Change Your Direction.",
        start_with: "Start With What Matters Most",

        tech_english_title: "Tech English Program",
        tech_english_sub: "Speak English With Confidence in Real Work Situations",
        tech_english_desc: "Not grammar. Not theory. Real communication skills.",
        what_you_learn: "What You'll Learn:",
        tech_feat1: "Speak confidently in meetings",
        tech_feat2: "Understand technical discussions",
        tech_feat3: "Write clear emails",
        tech_feat4: "Present ideas without hesitation",
        start_this_program: "Start This Program",

        multimedia_title: "Multimedia & Content Creation Program",
        multimedia_sub: "Create Content That Actually Gets Attention",
        multimedia_desc: "From zero to producing real, publishable content",
        media_feat1: "Shoot and edit videos",
        media_feat2: "Design social media content",
        media_feat3: "Storytelling and hooks",
        media_feat4: "Build a content portfolio",
        explore_content: "Explore Content Program",

        marketing_title: "Marketing Program",
        marketing_sub: "Learn Marketing by Doing — Not Just Watching",
        marketing_desc: "Practical execution, not theory overload",
        mark_feat1: "Launch real campaigns",
        mark_feat2: "Understand audience targeting",
        mark_feat3: "Write converting content",
        mark_feat4: "Analyze performance",
        join_marketing: "Join Marketing Program",

        ai_diploma_title: "Applied Artificial Intelligence Diploma",
        ai_diploma_sub: "Enhance your productivity using AI",
        ai_diploma_desc: "Build real AI projects using Python, machine learning, and deep learning.",
        ai_diploma_feat1: "Practical AI Implementation",
        ai_diploma_feat2: "Build ML models with Python",
        ai_diploma_feat3: "Create deep learning applications",
        ai_diploma_feat4: "Deploy real-world AI solutions",
        join_ai_diploma: "Join AI Diploma",

        real_progress: "Real Progress You Can See",
        // --- Testimonials (English) ---
        all_testimonials_title: "What Our Students Say",
        student1: "Sahar",
        testimonial1: "One of the best courses I've ever taken.<br>I always had great feedback to give to my family after each class, telling them what we talked about and what we did.<br>The classes were fun and easy, and the teachers' treatment was very nice.",
        student2: "Abdullah",
        testimonial2: "The English program transformed my career. I now lead international meetings confidently.",
        student3: "Samer",
        testimonial3: "I built my entire portfolio in 4 months. Landed a job before graduation.",
        student4: "Fahd",
        testimonial4: "Marketing program gave me real campaign experience. I now manage social media for a startup.",
        student5: "Muath",
        testimonial5: "The teachers are amazing. I went from A2 to B2 in 3 months.",
        student6: "Rami",
        testimonial6: "The teachers are amazing, very professional, helpful, patient, and supportive.",
        student7: "Lina",
        testimonial7: "The AI automation course changed how our team works. We are saving over 15 hours a week.<br>I highly recommend it to anyone looking to scale their business.",
        student8: "Omar",
        testimonial8: "I was completely new to web development. The instructor broke everything down so clearly that I built my own portfolio website in 6 weeks.",
        student9: "Nora",
        testimonial9: "The business English classes helped me finally negotiate contracts with international clients without fear.<br>It was a game changer for my salary.",
        student10: "Youssef",
        testimonial10: "Motion graphics design felt like magic to me. The practical projects we did in class helped me get hired as a junior animator right away.",
        student11: "Huda",
        testimonial11: "The best investment I made this year. The social media management course gave me the exact tools I needed to grow my side business.",
        student12: "Karim",
        testimonial12: "The Python for Data Science course was rigorous but incredibly rewarding.<br>I am now able to automate reports and analyze trends for my team.",
        student13: "Layla",
        testimonial13: "The interactive exercises and real-life simulations made learning English feel natural and fun. I am finally comfortable speaking up in meetings.",
        student14: "Zaid",
        testimonial14: "I took the Marketing Analytics course to better understand my e-commerce store's performance.<br>Six months later, my conversion rate has doubled.",
        student15: "Salma",
        testimonial15: "Video editing used to intimidate me. Now, I have a YouTube channel with over 5,000 subscribers thanks to the professional editing techniques I learned here.",
        student16: "Tarek",
        testimonial16: "The supportive environment and the mentorship from the instructors are unparalleled.<br>I truly felt like I was part of a community, not just a student.",
        student17: "Maya",
        testimonial17: "I went from having zero coding knowledge to building a functional web app for my startup.<br>The programming track is super practical and hands-on.",
        student18: "Hassan",
        testimonial18: "The AI systems and automation course prepared me for the future of work.<br>I feel completely prepared to implement AI solutions in our workflow.",
        student19: "Reem",
        testimonial19: "The course content is very up-to-date with industry trends. The teachers know exactly what skills are needed in the current job market.",
        student20: "Khalid",
        testimonial20: "If you are looking for a place that actually bridges the gap between theory and practice, this is it.<br>I would recommend it to anyone serious about their career.",

        see_more_results: "See more results",

        institutions_served: "Institutions Served",
        teachers_trained: "Teachers Trained",
        success_rate: "Success Rate",
        support_hours: "Support Hours",

        cta_title: "Ready to Transform Your Institution?",
        cta_desc: "Join hundreds of educational institutions that trust Lighton Academy.",
        schedule_demo: "Schedule a Demo",
        call_us: "Call Us Now",

        // Footer
        footer_desc: "Practical, step-by-step programs designed to help you start earning, not just learning.",
        quick_links: "Quick Links",
        home: "Home",
        courses: "Courses",
        results: "Results",
        about: "About",
        contact: "Contact",
        support: "Support",
        help_desk: "Help Desk",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact_us: "Contact",
        footer_copyright: "© 2026 Lighton Academy. All rights reserved.",
        developed_by: "Developed and Managed by MENA Digital, L.L.C.",

        // Contact page
        contact_title: "Contact Us",
        contact_sub: "We're here to help",
        address: "Bethlehem - West Bank - Palestine",
        phone: "+970 59 883 1661",
        opening_hours: "Opening Hours",
        opening_hours_desc_1: "Saturday to Wednesday: 5:00PM - 11:00PM",
        opening_hours_desc_2: "Thursday: 5:00PM - 9:00PM",
        opening_hours_desc_3: "Friday: Closed",
        email: "Email",
        message: "Message",
        send_message: "Send Message",
        get_in_touch: "Get in Touch",

        // Results page
        results_title: "Student Success Stories",
        results_sub: "Real results from our graduates",
        result1: "Web Development Graduate – now working at a top agency.",
        result2: "Digital Marketing – increased business revenue by 40%.",
        result3: "Business English – promoted to international manager.",

        // About page
        about_title: "About Lighton Academy",
        about_sub: "Empowering the common man to compete at the highest level.",
        our_story: "Our Story",
        story_text: "In 2023, Ahmed Hammad – a software engineer who studied in the United States and returned to the West Bank in 2018 – saw a glaring gap: talented, hardworking individuals lacked the practical skills needed for high‑level employment. Determined to change that, he founded Lighton Academy. What started as a small training initiative has grown into a beacon of hope for hundreds of students, proving that with the right skills, anyone can rise.",
        story_text2: "We don’t just teach theory. We build real‑world capabilities in English, marketing, content creation, and technology. Our students don’t just learn – they earn.",
        success_rate_label: "Success Rate",
        success_rate_desc: "of graduates find employment or advance their careers.",
        core_programs_label: "Core Programs",
        core_programs_desc: "English, Marketing, Multimedia & Content Creation.",
        founded_label: "Founded",
        founded_desc: "By Ahmed Hammad, with the support of Mena Digital L.L.C.",
        our_team: "Our Team",
        team_intro: "We are a group of highly trained professionals dedicated to your success:",
        team_marketing: "Marketing experts – Crafting real‑world campaigns.",
        team_teachers: "Teachers & Academic Advisors – Guiding your learning journey.",
        team_cs: "Customer Service – Always ready to assist.",
        team_management: "Management – Ensuring quality and innovation.",
        our_partners: "Our Partners",
        partners_text: "Lighton Academy is proudly supported by Mena Digital L.L.C., our holding company and technology & marketing partner. Together, we deliver cutting‑edge solutions and unmatched training.",

        // Terms page
        terms_title: "Terms of Service",
        terms_effective: "Effective: April 2026",
        terms_1: "1. Acceptance of Terms",
        terms_1_text: "By using Lighton Academy’s website and services, you agree to these Terms of Service. If you do not agree, please do not use our services.",
        terms_2: "2. Account Registration",
        terms_2_text: "You must provide accurate information. You are responsible for maintaining the confidentiality of your password and for all activities under your account.",
        terms_3: "3. Payments and Refunds",
        terms_3_text: "Accepted currencies: USD, ILS, JOD. Payment method: bank transfer.",
        terms_3_refund: "Refund policy: Full refund within 14 days of purchase, provided no course progress has been made. After the course starts, no refunds are issued unless the failure is our fault (to be proven by the student). In such cases, a partial refund may be granted.",
        terms_3_installment: "Installment plans: Available upon request. Students remain legally obligated to pay the full amount even if they drop out, unless the failure is our fault (e.g., course discontinued). In that case, remaining installments may be waived.",
        terms_4: "4. Course Content and Intellectual Property",
        terms_4_text: "All course materials (videos, notes, recordings) are owned by Lighton Academy. You may keep downloaded materials for personal use only. You may not publish, distribute, or share them with third parties.",
        terms_4_work: "Any work submitted by students (assignments, projects) becomes the property of Lighton Academy, which may use it for promotional or educational purposes without compensation to the student.",
        terms_5: "5. User Conduct and Warnings",
        terms_5_text: "You agree not to misuse the platform. Violations of rules will result in a three‑warning system. After the third warning, the student will face an internal review, which may lead to indefinite suspension or a final monitored grace period.",
        terms_5_fraud: "Fraud or any illegal activity will result in immediate, permanent suspension and may lead to legal action.",
        terms_6: "6. Account Suspension and Termination",
        terms_6_text: "We may suspend or terminate your account for:",
        terms_6_1: "Non‑payment (you remain legally obligated to settle the full amount).",
        terms_6_2: "Repeated violation of rules (as per the warning system).",
        terms_6_3: "Fraud or illegal conduct (immediate termination).",
        terms_7: "7. Limitation of Liability",
        terms_7_text: "Lighton Academy is not liable for any indirect damages arising from the use of our services. Our total liability is limited to the amount you paid for the course.",
        terms_8: "8. Governing Law",
        terms_8_text: "These terms are governed by the laws of Palestine. Any disputes shall be resolved in the courts of Bethlehem.",
        terms_9: "9. Changes to Terms",
        terms_9_text: "We may modify these terms at any time. Continued use constitutes acceptance.",
        terms_10: "10. Contact",
        terms_10_text: "For questions, contact Mena Digital L.L.C. at menadigital.digital@gmail.com.",

        // Privacy page
        privacy_title: "Privacy Policy",
        privacy_updated: "Last updated: April 2026",
        privacy_1: "1. Information We Collect",
        privacy_1_text: "Lighton Academy LTD. (operated by Mena Digital L.L.C.) collects the following personal information:",
        privacy_1_1: "Name, email address, phone number, and password (for account creation).",
        privacy_1_2: "Test scores, course progress, and payment information.",
        privacy_1_3: "Usage data via cookies (session management, analytics, and marketing).",
        privacy_2: "2. How We Use Your Information",
        privacy_2_text: "We use your data to:",
        privacy_2_1: "Provide and improve our educational services.",
        privacy_2_2: "Process payments and manage enrollments.",
        privacy_2_3: "Communicate with you about your account and course updates.",
        privacy_2_4: "Analyze usage and improve our website via third-party services (Google Analytics, Facebook Pixel).",
        privacy_3: "3. Sharing of Information",
        privacy_3_text: "We share your data only with:",
        privacy_3_1: "Payment processors (to complete transactions).",
        privacy_3_2: "Legal authorities if required by law.",
        privacy_3_nosell: "We do not sell or rent your personal data to third parties.",
        privacy_4: "4. Cookies",
        privacy_4_text: "We use cookies for session management, analytics (Google Analytics), and marketing (Facebook Pixel). You can disable cookies in your browser settings, but some features may not function properly.",
        privacy_4_consent: "Cookie Consent",
        privacy_4_consent_text: "We use essential cookies for website functionality. With your consent, we also use optional cookies for analytics (Google Analytics, Facebook Pixel) and to improve your experience. You can accept or decline optional cookies via the banner. Declining will not affect essential features.",
        privacy_5: "5. Data Security",
        privacy_5_text: "We implement industry-standard security measures to protect your data. However, no online transmission is 100% secure.",
        privacy_6: "6. Your Rights",
        privacy_6_text: "You have the right to access, correct, or delete your personal data. For requests, contact our Data Protection Officer: ahmedkhaledhammad@gmail.com.",
        privacy_7: "7. Children’s Privacy",
        privacy_7_text: "Our services are not directed to individuals under 18. If we become aware of a user under 18, we will require written parental consent. Without such consent, we will delete the account.",
        privacy_8: "8. Changes to This Policy",
        privacy_8_text: "We may update this policy from time to time. Continued use of our services constitutes acceptance of the revised policy.",
        privacy_9: "9. Contact Us",
        privacy_9_text: "For privacy inquiries, contact Mena Digital L.L.C.: Email: menadigital.digital@gmail.com. Address: Hebron St., Bethlehem, Palestine",

        // Placement test
        placement_title: "Placement Assessment",
        placement_intro: "Welcome! Please enter your details before starting the test.",
        full_name: "Full Name",
        phone: "Phone Number",
        start_test: "Start Test",
        next_section: "Next Section",
        your_result: "Your Placement Result",
        teacher_contact: "A teacher will contact you soon for a short speaking confirmation.",
        go_home: "Return to Home",

        //our courses
        all_courses_title: "All Courses",

        courses_hero_title: "Explore Our Programs",
        courses_hero_desc: "Practical skills for real‑world success.",
        courses_title: "Our Courses",
        courses_sub: "Practical programs designed by industry experts",
        tech_english_card_desc: "Speak English confidently in real work situations. Not grammar, not theory – real communication.",
        multimedia_card_desc: "Shoot, edit, design, and build a portfolio that gets attention.",
        marketing_card_desc: "Launch real campaigns, understand audience targeting, write converting content.",
        enquire: "Enquire",

        //single courses
        // English Translations (inside translations.en)
        course_eng_conv_title: "English Conversational",
        course_eng_conv_desc: "Improve your spoken English for everyday and professional communication.",
        course_eng_bus_title: "English Business",
        course_eng_bus_desc: "Master business vocabulary, presentations, and workplace communication.",
        course_eng_tech_title: "English Technical",
        course_eng_tech_desc: "Enhance technical vocabulary and communication for IT and engineering professionals.",

        course_med_content_title: "Media Content Creation",
        course_med_content_desc: "Create engaging videos, graphics, and social media content.",
        course_med_edit_title: "Advanced Video Editing",
        course_med_edit_desc: "Master professional video editing tools and storytelling techniques.",
        course_med_motion_title: "Motion Graphics Design",
        course_med_motion_desc: "Bring visuals to life with dynamic motion graphics and animations.",

        course_mkt_digital_title: "Digital Marketing Strategy",
        course_mkt_digital_desc: "Plan and execute data-driven marketing campaigns across platforms.",
        course_mkt_social_title: "Social Media Management",
        course_mkt_social_desc: "Grow audiences with engaging social media content and community management.",
        course_mkt_analytics_title: "Marketing Analytics & Data-Driven Decisions",
        course_mkt_analytics_desc: "Analyze campaign performance and make data-backed marketing decisions.",

        course_prg_python_title: "Introduction to Python Programming",
        course_prg_python_desc: "Master the fundamentals of Python, one of the most in-demand programming languages.",
        course_prg_web_title: "Web Development",
        course_prg_web_desc: "Build modern websites and web applications with HTML, CSS, JavaScript, and frameworks.",
        course_prg_datasci_title: "Data Science with Python",
        course_prg_datasci_desc: "Unlock the power of data using Python, machine learning, and data analysis techniques.",

        course_ai_prod_title: "Productivity & Workflow Design",
        course_ai_prod_desc: "Design workflows that leverage AI to streamline tasks and boost your productivity.",
        course_ai_sys_title: "AI Systems & Automation",
        course_ai_sys_desc: "Build and deploy AI systems that automate complex processes.",
        course_ai_biz_title: "Advanced AI Business Operations",
        course_ai_biz_desc: "Leverage AI for business operations, data-driven decisions, and advanced automation.",
    },

    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_courses: "الدورات",
        nav_results: "النتائج",
        nav_about: "عن الأكاديمية",
        nav_contact: "اتصل بنا",
        nav_start: "ابدأ التعلم",
        nav_language: "اللغة",

        // Home page
        home_title: "تعلم مهارات تهم حقًا",
        home_desc: "برامج مدتها 4 أشهر في اللغة الإنجليزية وإنشاء المحتوى والتسويق",
        home_arabic: "مهارات حقيقية لسوق العمل",
        start_learning: "ابدأ التعلم",
        view_courses: "استعرض الدورات",
        view_more_results: "عرض المزيد",
        rating: "تقييم 4.8",
        students: "أكثر من 2000 طالب",
        certified: "برامج معتمدة",
        certified_badge: "معتمد",
        sarah_success: "نجاح سارة",
        what_our_students_say: "ما يقوله طلابنا",

        choose_path: "اختر مسارك. التزم لمدة 4 أشهر. غير اتجاهك.",
        start_with: "ابدأ بما هو أكثر أهمية",

        // Courses page
        courses_hero_title: "استكشف برامجنا",
        courses_hero_desc: "مهارات عملية لنجاح في العالم الواقعي.",

        all_courses_title: "جميع الدورات",

        tech_english_title: "برنامج اللغة الإنجليزية التقنية",
        tech_english_sub: "تحدث الإنجليزية بثقة في مواقف العمل الحقيقية",
        tech_english_desc: "ليس قواعد. ليس نظريات. مهارات تواصل حقيقية.",
        what_you_learn: "ماذا ستتعلم:",
        tech_feat1: "تحدث بثقة في الاجتماعات",
        tech_feat2: "فهم النقاشات التقنية",
        tech_feat3: "كتابة رسائل بريد إلكتروني واضحة",
        tech_feat4: "تقديم أفكار دون تردد",
        start_this_program: "ابدأ هذا البرنامج",

        multimedia_title: "برنامج الوسائط المتعددة وإنشاء المحتوى",
        multimedia_sub: "أنشئ محتوى يحظى بالاهتمام حقًا",
        multimedia_desc: "من الصفر إلى إنتاج محتوى حقيقي قابل للنشر",
        media_feat1: "تصوير وتحرير الفيديو",
        media_feat2: "تصميم محتوى وسائل التواصل الاجتماعي",
        media_feat3: "سرد القصص والخُطَّافات",
        media_feat4: "بناء حقيبة محتوى",
        explore_content: "استكشف برنامج المحتوى",

        marketing_title: "برنامج التسويق",
        marketing_sub: "تعلم التسويق بالممارسة – لا مجرد المشاهدة",
        marketing_desc: "تنفيذ عملي، لا نظرية مفرطة",
        mark_feat1: "إطلاق حملات حقيقية",
        mark_feat2: "فهم استهداف الجمهور",
        mark_feat3: "كتابة محتوى يعود بنتائج حقيقية",
        mark_feat4: "تحليل الأداء",
        join_marketing: "انضم لبرنامج التسويق",


        ai_diploma_title: "دبلوم الذكاء الاصطناعي التطبيقي",
        ai_diploma_sub: "ارتقِ بإنتاجيتك باستخدام الذكاء الاصطناعي",
        ai_diploma_desc: "ابني مشاريع ذكاء اصطناعي حقيقية باستخدام Python والتعلم الآلي والتعلم العميق.",
        ai_diploma_feat1: "التطبيق العملي للذكاء الاصطناعي",
        ai_diploma_feat2: "بناء نماذج تعلم الآلة باستخدام Python",
        ai_diploma_feat3: "إنشاء تطبيقات التعلم العميق",
        ai_diploma_feat4: "نشر حلول الذكاء الاصطناعي في العالم الحقيقي",
        join_ai_diploma: "انضم لدبلوم الذكاء الاصطناعي",

        // Results page
        all_testimonials_title: "ماذا يقول طلابنا عنا",
        real_progress: "تقدم حقيقي يمكنك رؤيته",
        // --- Testimonials (Arabic) ---
        student1: "سحر",
        testimonial1: "من أجمل الكورسات الي أخذتها.<br>دائمًا كان عندي فيدباك حلو أعطيه لأهلي بعد كل حصة، أحكيلهم شو حكينا وشو عملنا.<br>الحصص كانت ممتعو وسهلة وتعامل المعلمات كان كثير حلو.",
        student2: "عبد الله",
        testimonial2: "برنامج اللغة الإنجليزية غير مسار حياتي المهنية. الآن أقود اجتماعات دولية بثقة.",
        student3: "سامر",
        testimonial3: "بنيت حقيبتي المهنية بالكامل في 4 أشهر. وحصلت على وظيفة قبل التخرج.",
        student4: "فهد",
        testimonial4: "برنامج التسويق أعطاني خبرة حقيقية في إدارة الحملات. الآن أدير وسائل التواصل لشركة ناشئة.",
        student5: "معاذ",
        testimonial5: "المعلمون رائعون. انتقلت من مستوى A2 إلى B2 في 3 أشهر فقط.",
        student6: "رامي",
        testimonial6: "المعلمون مذهلون، ومحترفون جدًا، وصبورون، وداعمون.",
        student7: "لينا",
        testimonial7: "دورة الأتمتة بالذكاء الاصطناعي غيرت طريقة عمل فريقنا. نوفر الآن أكثر من 15 ساعة أسبوعيًا.<br>أنصح بها بشدة أي شخص يريد تطوير أعماله.",
        student8: "عمر",
        testimonial8: "كنت جديدًا تمامًا في عالم تطوير الويب. شرح المدرب كل شيء بوضوح تام حتى بنيت موقعي الشخصي في 6 أسابيع.",
        student9: "نورا",
        testimonial9: "ساعدتني دروس الإنجليزية للأعمال أخيرًا في التفاوض على عقود مع عملاء دوليين دون خوف.<br>لقد كانت نقلة نوعية في راتبي.",
        student10: "يوسف",
        testimonial10: "تصميم الرسوم المتحركة بدا لي كالسحر. المشاريع العملية التي قمنا بها ساعدتني في الحصول على وظيفة كرسام متحرك مبتدئ فورًا.",
        student11: "هدى",
        testimonial11: "أفضل استثمار قمت به هذا العام. دورة إدارة وسائل التواصل الاجتماعي أعطتني الأدوات الدقيقة لنمو مشروعي الجانبي.",
        student12: "كريم",
        testimonial12: "دورة بايثون لعلوم البيانات كانت مكثفة ولكنها مجزية للغاية.<br>أنا الآن قادر على أتمتة التقارير وتحليل الاتجاهات لفريقي.",
        student13: "ليلى",
        testimonial13: "التمارين التفاعلية والمحاكاة الواقعية جعلت تعلم الإنجليزية أمرًا طبيعيًا وممتعًا. أنا مرتاحة أخيرًا في التحدث خلال الاجتماعات.",
        student14: "زيد",
        testimonial14: "أخذت دورة تحليلات التسويق لفهم أداء متجري الإلكتروني بشكل أفضل.<br>بعد ستة أشهر، تضاعف معدل التحويل لدي.",
        student15: "سلمى",
        testimonial15: "تحرير الفيديو كان يخيفني سابقًا. الآن لدي قناة على يوتيوب تضم أكثر من 5000 مشترك بفضل تقنيات التحرير الاحترافية التي تعلمتها هنا.",
        student16: "طارق",
        testimonial16: "البيئة الداعمة والإرشاد من المدربين لا يُضاهى.<br>شعرت حقًا أنني جزء من مجتمع وليس مجرد طالب.",
        student17: "مايا",
        testimonial17: "انتقلت من عدم وجود أي معرفة بالبرمجة إلى بناء تطبيق ويب فعال لشركتي الناشئة.<br>مسار البرمجة عملي وتطبيقي جدًا.",
        student18: "حسن",
        testimonial18: "دورة أنظمة الذكاء الاصطناعي والأتمتة أعدتني لمستقبل العمل.<br>أشعر أني مستعد تمامًا لتطبيق حلول الذكاء الاصطناعي في سير عملنا.",
        student19: "ريم",
        testimonial19: "محتوى الدورة حديث جدًا ومواكب لاتجاهات الصناعة. المعلمون يعرفون بالضبط المهارات المطلوبة في سوق العمل الحالي.",
        student20: "خالد",
        testimonial20: "إذا كنت تبحث عن مكان يسد الفجوة بين النظرية والتطبيق، فهذا هو المكان الصحيح.<br>أوصي به لأي شخص يأخذ مساره المهني على محمل الجد.",
        see_more_results: "رؤية المزيد من النتائج",

        // About page
        institutions_served: "المؤسسات التي خدمت",
        teachers_trained: "المعلمون المدربون",
        success_rate: "نسبة النجاح",
        support_hours: "ساعات الدعم",

        // CTA
        cta_title: "هل أنت مستعد لتحويل مؤسستك؟",
        cta_desc: "انضم إلى مئات المؤسسات التعليمية التي تثق في Lighton Academy.",
        schedule_demo: "حدد موعدًا تجريبيًا",
        call_us: "اتصل بنا الآن",

        // Footer
        footer_desc: "برامج عملية خطوة بخطوة مصممة لمساعدتك على البدء في الكسب، وليس التعلم فقط.",
        quick_links: "روابط سريعة",
        home: "الرئيسية",
        courses: "الدورات",
        results: "النتائج",
        about: "عن الأكاديمية",
        contact: "اتصل بنا",
        support: "الدعم",
        help_desk: "مكتب المساعدة",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        contact_us: "اتصل بنا",
        footer_copyright: "© 2026 Lighton Academy. جميع الحقوق محفوظة.",
        developed_by: "تطوير و إدارة MENA Digital, L.L.C.",

        // Contact page
        contact_title: "اتصل بنا",
        contact_sub: "نحن هنا للمساعدة",
        address: "بيت لحم - الضفة الغربية - فلسطين",
        opening_hours: "ساعات العمل",
        opening_hours_desc_1: "من السبت إلى الأربعاء: 5:00 مساءً - 11:00 مساءً",
        opening_hours_desc_2: "الخميس: 5:00 مساءً - 9:00 مساءً",
        opening_hours_desc_3: "الجمعة: مغلق",
        get_in_touch: "تواصل معنا",
        placement_test: "اختبار التسجيل",

        // Results page
        results_title: "قصص نجاح الطلاب",
        results_sub: "نتائج حقيقية من خريجينا",
        result1: "خريج تطوير الويب – يعمل الآن في وكالة كبرى.",
        result2: "التسويق الرقمي – زاد إيرادات الأعمال بنسبة 40٪.",
        result3: "اللغة الإنجليزية للأعمال – ترقى إلى مدير دولي.",

        // About page
        about_title: "عن Lighton Academy",
        about_sub: "تمكين الشخص العادي للمنافسة على أعلى مستوى.",
        our_story: "قصتنا",
        story_text: "في عام 2023، رأى أحمد حماد – مهندس برمجيات درس في الولايات المتحدة وعاد إلى الضفة الغربية في 2018 – فجوة واضحة: الأفراد الموهوبون والمجتهدون يفتقرون إلى المهارات العملية اللازمة للعمل على مستوى عالٍ. عازمًا على تغيير ذلك، أسس Lighton Academy. ما بدأ كمبادرة تدريبية صغيرة تحول إلى منارة أمل لمئات الطلاب، مما يثبت أنه بالمهارات الصحيحة يمكن لأي شخص أن يرتقي.",
        story_text2: "نحن لا ندرس النظرية فقط. نحن نبني قدرات حقيقية في اللغة الإنجليزية والتسويق وإنشاء المحتوى والتكنولوجيا. طلابنا لا يتعلمون فقط – بل يكسبون.",
        success_rate_label: "نسبة النجاح",
        success_rate_desc: "من الخريجين يجدون عملًا أو يتقدمون في حياتهم المهنية.",
        core_programs_label: "البرامج الأساسية",
        core_programs_desc: "اللغة الإنجليزية، التسويق، الوسائط المتعددة وإنشاء المحتوى.",
        founded_label: "تأسست",
        founded_desc: "بواسطة أحمد حماد، بدعم من Mena Digital L.L.C.",
        our_team: "فريقنا",
        team_intro: "نحن مجموعة من المحترفين المدربين تدريبًا عاليًا المكرسين لنجاحك:",
        team_marketing: "خبراء التسويق – صياغة حملات حقيقية.",
        team_teachers: "المعلمون والمستشارون الأكاديميون – توجيه رحلتك التعليمية.",
        team_cs: "خدمة العملاء – مستعدون دائمًا للمساعدة.",
        team_management: "الإدارة – ضمان الجودة والابتكار.",
        our_partners: "شركاؤنا",
        partners_text: "Lighton Academy مدعومة بفخر من Mena Digital L.L.C.، شركتنا القابضة وشريك التكنولوجيا والتسويق. معًا، نقدم حلولًا متطورة وتدريبًا لا مثيل له.",

        // Terms page
        terms_title: "شروط الخدمة",
        terms_effective: "سارية المفعول: أبريل 2026",
        terms_1: "1. قبول الشروط",
        terms_1_text: "باستخدامك لموقع وخدمات Lighton Academy، فإنك توافق على شروط الخدمة هذه. إذا لم توافق، يرجى عدم استخدام خدماتنا.",
        terms_2: "2. تسجيل الحساب",
        terms_2_text: "يجب عليك تقديم معلومات دقيقة. أنت مسؤول عن الحفاظ على سرية كلمة المرور الخاصة بك وعن جميع الأنشطة التي تتم تحت حسابك.",
        terms_3: "3. المدفوعات والاسترداد",
        terms_3_text: "العملات المقبولة: USD, ILS, JOD. طريقة الدفع: تحويل بنكي.",
        terms_3_refund: "سياسة الاسترداد: استرداد كامل في غضون 14 يومًا من الشراء، بشرط عدم إحراز تقدم في الدورة. بعد بدء الدورة، لا يتم إصدار أي استرداد إلا إذا كان الفشل خطأ من جانبنا (يجب إثباته من قبل الطالب). في هذه الحالات، قد يتم منح استرداد جزئي.",
        terms_3_installment: "خطط التقسيط: متاحة عند الطلب. يظل الطلاب ملزمين قانونًا بدفع المبلغ كاملاً حتى لو انسحبوا، ما لم يكن الفشل خطأ من جانبنا (مثل إيقاف الدورة). في هذه الحالة، قد يتم إعفاء الأقساط المتبقية.",
        terms_4: "4. محتوى الدورة والملكية الفكرية",
        terms_4_text: "جميع مواد الدورة (فيديوهات، ملاحظات، تسجيلات) مملوكة لـ Lighton Academy. يمكنك الاحتفاظ بالمواد المحملة للاستخدام الشخصي فقط. لا يجوز لك نشرها أو توزيعها أو مشاركتها مع أطراف ثالثة.",
        terms_4_work: "أي عمل يقدمه الطلاب (واجبات، مشاريع) يصبح ملكًا لـ Lighton Academy، والذي قد يستخدمه لأغراض ترويجية أو تعليمية دون تعويض الطالب.",
        terms_5: "5. سلوك المستخدم والتحذيرات",
        terms_5_text: "أنت توافق على عدم إساءة استخدام المنصة. ستؤدي مخالفات القواعد إلى نظام تحذير ثلاثي. بعد التحذير الثالث، سيواجه الطالب مراجعة داخلية قد تؤدي إلى تعليق غير محدد أو فترة مراقبة نهائية.",
        terms_5_fraud: "الاحتيال أو أي نشاط غير قانوني سيؤدي إلى تعليق فوري ودائم وقد يؤدي إلى إجراء قانوني.",
        terms_6: "6. تعليق الحساب وإنهاؤه",
        terms_6_text: "يجوز لنا تعليق أو إنهاء حسابك للأسباب التالية:",
        terms_6_1: "عدم الدفع (تظل ملزمًا قانونًا بتسوية المبلغ كاملاً).",
        terms_6_2: "المخالفة المتكررة للقواعد (حسب نظام التحذير).",
        terms_6_3: "الاحتيال أو السلوك غير القانوني (إنهاء فوري).",
        terms_7: "7. تحديد المسؤولية",
        terms_7_text: "Lighton Academy ليست مسؤولة عن أي أضرار غير مباشرة ناتجة عن استخدام خدماتنا. مسؤوليتنا الإجمالية محدودة بالمبلغ الذي دفعته مقابل الدورة.",
        terms_8: "8. القانون الحاكم",
        terms_8_text: "تخضع هذه الشروط لقوانين فلسطين. سيتم حل أي نزاعات في محاكم بيت لحم.",
        terms_9: "9. التغييرات على الشروط",
        terms_9_text: "يجوز لنا تعديل هذه الشروط في أي وقت. الاستخدام المستمر يشكل قبولًا.",
        terms_10: "10. الاتصال",
        terms_10_text: "لأي أسئلة، اتصل بـ Mena Digital L.L.C. على menadigital.digital@gmail.com.",


        // Privacy page
        terms_title: "الشروط والأحكام",
        privacy_title: "سياسة الخصوصية",
        privacy_updated: "آخر تحديث: أبريل 2026",
        privacy_1: "1. المعلومات التي نجمعها",
        privacy_1_text: "تجمع Lighton Academy LTD. (التي تديرها Mena Digital L.L.C.) المعلومات الشخصية التالية:",
        privacy_1_1: "الاسم، عنوان البريد الإلكتروني، رقم الهاتف، وكلمة المرور (لإنشاء الحساب).",
        privacy_1_2: "نتائج الاختبارات، تقدم الدورة، ومعلومات الدفع.",
        privacy_1_3: "بيانات الاستخدام عبر ملفات تعريف الارتباط (إدارة الجلسة، التحليلات، والتسويق).",
        privacy_2: "2. كيف نستخدم معلوماتك",
        privacy_2_text: "نستخدم بياناتك لـ:",
        privacy_2_1: "تقديم وتحسين خدماتنا التعليمية.",
        privacy_2_2: "معالجة المدفوعات وإدارة التسجيلات.",
        privacy_2_3: "التواصل معك بشأن حسابك وتحديثات الدورة.",
        privacy_2_4: "تحليل الاستخدام وتحسين موقعنا عبر خدمات الطرف الثالث (Google Analytics، Facebook Pixel).",
        privacy_3: "3. مشاركة المعلومات",
        privacy_3_text: "نشارك بياناتك فقط مع:",
        privacy_3_1: "معالجي الدفع (لإتمام المعاملات).",
        privacy_3_2: "السلطات القانونية إذا طلب القانون ذلك.",
        privacy_3_nosell: "لا نبيع أو نؤجر بياناتك الشخصية لأطراف ثالثة.",
        privacy_4: "4. ملفات تعريف الارتباط",
        privacy_4_text: "نستخدم ملفات تعريف الارتباط لإدارة الجلسة والتحليلات (Google Analytics) والتسويق (Facebook Pixel). يمكنك تعطيل ملفات تعريف الارتباط في إعدادات المتصفح، لكن قد لا تعمل بعض الميزات بشكل صحيح.",
        privacy_4_consent: "الموافقة على ملفات تعريف الارتباط",
        privacy_4_consent_text: "نستخدم ملفات تعريف الارتباط الأساسية لوظائف الموقع. بموافقتك، نستخدم أيضًا ملفات تعريف الارتباط الاختيارية للتحليلات (Google Analytics، Facebook Pixel) ولتحسين تجربتك. يمكنك قبول أو رفض ملفات تعريف الارتباط الاختيارية عبر الشريط. الرفض لن يؤثر على الميزات الأساسية.",
        privacy_5: "5. أمان البيانات",
        privacy_5_text: "نطبق تدابير أمان قياسية لحماية بياناتك. ومع ذلك، لا يوجد نقل عبر الإنترنت آمن بنسبة 100٪.",
        privacy_6: "6. حقوقك",
        privacy_6_text: "لديك الحق في الوصول إلى بياناتك الشخصية أو تصحيحها أو حذفها. للطلبات، اتصل بمسؤول حماية البيانات لدينا: ahmedkhaledhammad@gmail.com.",
        privacy_7: "7. خصوصية الأطفال",
        privacy_7_text: "خدماتنا ليست موجهة للأفراد تحت سن 18. إذا علمنا بوجود مستخدم تحت سن 18، سنطلب موافقة خطية من الوالدين. بدون هذه الموافقة، سنحذف الحساب.",
        privacy_8: "8. التغييرات على هذه السياسة",
        privacy_8_text: "قد نقوم بتحديث هذه السياسة من وقت لآخر. الاستخدام المستمر لخدماتنا يشكل قبولًا للسياسة المعدلة.",
        privacy_9: "9. اتصل بنا",
        privacy_9_text: "للاستفسارات حول الخصوصية، اتصل بـ Mena Digital L.L.C.: البريد الإلكتروني: menadigital.digital@gmail.com. العنوان: شارع الخليل، بيت لحم، فلسطين",


        // Placement test
        placement_title: "تقييم المستوى",
        placement_intro: "مرحبًا! يرجى إدخال تفاصيلك قبل بدء الاختبار.",
        full_name: "الاسم الكامل",
        phone: "رقم الهاتف",
        start_test: "ابدأ الاختبار",
        next_section: "القسم التالي",
        your_result: "نتيجة تقييمك",
        teacher_contact: "سيتواصل معك معلم قريبًا لتأكيد مستوى التحدث.",
        go_home: "العودة إلى الصفحة الرئيسية",

        // ... our courses...
        courses_title: "دوراتنا",
        courses_sub: "برامج عملية مصممة من قبل خبراء الصناعة",
        tech_english_card_desc: "تحدث الإنجليزية بثقة في مواقف العمل الحقيقية. ليس قواعد، لا نظرية – تواصل حقيقي.",
        multimedia_card_desc: "صور، حرر، صمم، وابني حقيبة تحصل على الاهتمام.",
        marketing_card_desc: "أطلق حملات حقيقية، افهم استهداف الجمهور، اكتب محتوى يحول.",
        enquire: "استفسر",
        // ... rest ...

        //single courses
        // English
        // Arabic Translations (inside translations.ar)
        course_eng_conv_title: "المحادثة الإنجليزية",
        course_eng_conv_desc: "حسّن لغتك الإنجليزية المنطوقة للتواصل اليومي والمهني.",
        course_eng_bus_title: "الإنجليزية للأعمال",
        course_eng_bus_desc: "إتقان مفردات الأعمال، والعروض التقديمية، والتواصل في بيئة العمل.",
        course_eng_tech_title: "الإنجليزية التقنية",
        course_eng_tech_desc: "تعزيز المفردات التقنية ومهارات التواصل لمحترفي تكنولوجيا المعلومات والهندسة.",

        course_med_content_title: "إنشاء محتوى الوسائط",
        course_med_content_desc: "أنشئ فيديوهات ورسومات ومحتوى جذاب لوسائل التواصل الاجتماعي.",
        course_med_edit_title: "تحرير الفيديو المتقدم",
        course_med_edit_desc: "إتقان أدوات التحرير الاحترافية وتقنيات سرد القصص المرئية.",
        course_med_motion_title: "تصميم الرسوم المتحركة",
        course_med_motion_desc: "أضف الحياة إلى العناصر البصرية من خلال الرسوم المتحركة الديناميكية.",

        course_mkt_digital_title: "استراتيجية التسويق الرقمي",
        course_mkt_digital_desc: "خطط ونفذ حملات تسويقية تعتمد على البيانات عبر منصات متعددة.",
        course_mkt_social_title: "إدارة وسائل التواصل الاجتماعي",
        course_mkt_social_desc: "أنمِ جماهيرك من خلال محتوى جذاب وإدارة مجتمعية فعالة.",
        course_mkt_analytics_title: "تحليلات التسويق واتخاذ القرارات المبنية على البيانات",
        course_mkt_analytics_desc: "تحليل أداء الحملات واتخاذ قرارات تسويقية مدعومة بالبيانات.",

        course_prg_python_title: "مقدمة في برمجة بايثون",
        course_prg_python_desc: "إتقان أساسيات بايثون، إحدى أكثر لغات البرمجة طلباً في السوق.",
        course_prg_web_title: "تطوير الويب",
        course_prg_web_desc: "بناء مواقع وتطبيقات ويب حديثة باستخدام HTML و CSS و JavaScript والأطر.",
        course_prg_datasci_title: "علوم البيانات مع بايثون",
        course_prg_datasci_desc: "استخدم بايثون، وتعلم الآلة، وتقنيات تحليل البيانات لاستخراج قوة البيانات.",

        course_ai_prod_title: "تصميم الإنتاجية وسير العمل",
        course_ai_prod_desc: "صمم سير عمل يستفيد من الذكاء الاصطناعي لتبسيط المهام وتعزيز إنتاجيتك.",
        course_ai_sys_title: "أنظمة الذكاء الاصطناعي والأتمتة",
        course_ai_sys_desc: "بناء ونشر أنظمة ذكاء اصطناعي تعمل على أتمتة العمليات المعقدة.",
        course_ai_biz_title: "عمليات الأعمال المتقدمة باستخدام الذكاء الاصطناعي",
        course_ai_biz_desc: "استخدام الذكاء الاصطناعي في عمليات الأعمال، واتخاذ القرارات المبنية على البيانات، والأتمتة المتقدمة.",

    }
};

// ===== LANGUAGE DETECTION =====
function getLanguage() {
    let lang = localStorage.getItem('lighton_lang');
    if (lang) return lang;
    const systemLang = navigator.language || navigator.languages?.[0] || 'en';
    return systemLang.startsWith('ar') ? 'ar' : 'en';
}

// ===== APPLY LANGUAGE =====
function applyLanguage(lang) {
    console.log(`🌐 Applying language: ${lang}`);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });
    updateLangDisplay();
}

// ===== UPDATE THE ACTIVE LANGUAGE DISPLAY =====
function updateLangDisplay() {
    const lang = getLanguage();
    const el = document.getElementById('lang-active');
    if (el) {
        el.textContent = lang;
    }
}

// ===== SWITCH LANGUAGE =====
function switchLanguage(lang) {
    localStorage.setItem('lighton_lang', lang);
    console.log(`✅ Language saved to localStorage: ${lang}`);
    applyLanguage(lang);
    document.dispatchEvent(new Event('languageChanged'));
    window.location.reload();
}

// ===== INITIALIZE ON LOAD =====
(function () {
    const lang = getLanguage();
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            applyLanguage(lang);
        });
    } else {
        applyLanguage(lang);
    }
})();

// ===== LANGUAGE LINK CLICK (desktop & mobile) =====
document.addEventListener('click', function (e) {
    const link = e.target.closest('.lang-bar a');
    if (link) {
        e.preventDefault();
        const lang = link.getAttribute('data-lang');
        switchLanguage(lang);
        // Do NOT try to update #lang-active here – page reload will reset it.
    }
});

// ===== MOBILE DROPDOWN TOGGLE =====
document.addEventListener('click', function (e) {
    const switcher = e.target.closest('.mobile-lang-switcher');
    const langBar = document.getElementById('lang-bar');
    if (!switcher) {
        // Click outside – close dropdown
        langBar.classList.remove('active');
        return;
    }
    // Only toggle if clicking on the switcher container, not on a language link
    if (!e.target.closest('.lang-bar a')) {
        e.preventDefault();
        langBar.classList.toggle('active');
    }
});