// Словарь с переводами
const translations = {
    ru: {
        about: "Веб / дизайн / монтаж",
        order_text: "Заказать сайт, превью или монтаж можно ниже 👇",
        tiktok: "📱 TikTok",
        order_btn: "🚀 Заказать проект",
        portfolio_video: "Портфолио Монтаж",
        portfolio_web: "Портфолио Веб-сайты",
        portfolio_design: "Портфолио дизайн-превью"
    },
    uk: {
        about: "Веб / дизайн / монтаж",
        order_text: "Замовити сайт, прев'ю або монтаж можна нижче 👇",
        tiktok: "📱 TikTok",
        order_btn: "🚀 Замовити проєкт",
        portfolio_video: "Портфоліо Монтаж",
        portfolio_web: "Портфоліо Веб-сайти",
        portfolio_design: "Портфоліо дизайн-прев'ю"
    },
    en: {
        about: "Web / Design / Video Editing",
        order_text: "Order a website, thumbnail, or editing below 👇",
        tiktok: "📱 TikTok",
        order_btn: "🚀 Order a Project",
        portfolio_video: "Video Editing Portfolio",
        portfolio_web: "Websites Portfolio",
        portfolio_design: "Design & Thumbnails Portfolio"
    }
};

// Получаем кнопки и элементы для перевода
const langButtons = document.querySelectorAll('.lang-btn');
const elementsToTranslate = document.querySelectorAll('[data-i18n]');

// Функция для установки языка
function setLanguage(lang) {
    // Меняем текст во всех элементах с атрибутом data-i18n
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновляем активный класс для кнопок
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Сохраняем выбор пользователя в браузере
    localStorage.setItem('selectedLang', lang);
}

// Прикрепляем события клика на кнопки языков
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
    });
});

// Проверяем, был ли ранее выбран язык, иначе ставим по умолчанию RU
const savedLang = localStorage.getItem('selectedLang') || 'ru';
setLanguage(savedLang);