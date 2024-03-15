document.addEventListener('DOMContentLoaded', function () {
    var themeToggleButton = document.getElementById('theme-toggle');

    // Set the initial theme based on localStorage or default to 'dark'
    var currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);

    themeToggleButton.addEventListener('click', function () {
        // Toggle the theme
        var newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);
        
        // Save the new theme to localStorage
        localStorage.setItem('theme', newTheme);
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

