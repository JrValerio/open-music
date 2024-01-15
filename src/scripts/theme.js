document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.header__btn');
    const htmlElement = document.documentElement; 

    function applyTheme(theme) {
        htmlElement.classList.toggle('dark-mode', theme === 'dark'); 
        themeToggleButton.classList.toggle('header__btn--dark-mode', theme === 'dark');
    }

    function updateTheme(theme) {
        localStorage.setItem('theme', theme);
        applyTheme(theme);
    }

    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        currentTheme = htmlElement.classList.contains('dark-mode') ? 'light' : 'dark';
        updateTheme(currentTheme);
    });
});

