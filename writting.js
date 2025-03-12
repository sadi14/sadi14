document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('writingThemeButton');
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // Theme Toggle
    themeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeButton.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeButton.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
});