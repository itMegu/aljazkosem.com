document.addEventListener('DOMContentLoaded', function () {
    var themeToggleButton = document.getElementById('theme-toggle');
    var menuToggleButton = document.getElementById('menu-toggle');
    var navbarLinks = document.getElementById('navbar-links');

    // Set the initial theme based on localStorage or default to 'dark'
    var currentTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);

    themeToggleButton.addEventListener('click', function () {
        // Toggle the theme
        var newTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', newTheme);

        // Save the new theme to localStorage
        localStorage.setItem('theme', newTheme);

        // Update the navbar theme
        updateNavbarTheme(newTheme);
    });

    menuToggleButton.addEventListener('click', function () {
        // Toggle the dropdown menu
        if (navbarLinks.classList.contains('show')) {
            navbarLinks.classList.remove('show');
        } else {
            navbarLinks.classList.add('show');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Hide the navbar on small screens after clicking a link
            if (window.innerWidth <= 768) {
                navbarLinks.classList.remove('show');
            }
        });
    });

    // Function to update navbar theme
    function updateNavbarTheme(theme) {
        if (theme === 'light') {
            navbarLinks.style.backgroundColor = 'rgba(248, 248, 248, 0.5)'; /* Light theme background */
            navbarLinks.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-light');
        } else {
            navbarLinks.style.backgroundColor = 'rgba(51, 51, 51, 0.5)'; /* Dark theme background */
            navbarLinks.style.color = getComputedStyle(document.documentElement).getPropertyValue('--text-dark');
        }
    }

    // Initialize the navbar theme
    updateNavbarTheme(currentTheme);
});
