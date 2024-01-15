export function applyTheme(theme) {
    const htmlElement = document.documentElement;
    const themeToggleButton = document.querySelector('.header__btn');
    htmlElement.classList.toggle('dark-mode', theme === 'dark'); 
    themeToggleButton.classList.toggle('header__btn--dark-mode', theme === 'dark');
}

export function updateTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

document.addEventListener('DOMContentLoaded', () => {
    let currentTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(currentTheme);

    const themeToggleButton = document.querySelector('.header__btn');
    themeToggleButton.addEventListener('click', () => {
        currentTheme = document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark';
        updateTheme(currentTheme);
    });
});
