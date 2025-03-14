document.addEventListener('DOMContentLoaded', function () {
    var themeToggleButton = document.getElementById('theme-toggle');
    var menuToggleButton = document.getElementById('menu-toggle');
    var navbarLinks = document.getElementById('navbar-links');
    var circImage = document.querySelector('.circImage');

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

    menuToggleButton.addEventListener('click', function () {
        // Toggle the dropdown menu
        if (navbarLinks.classList.contains('show')) {
            navbarLinks.classList.remove('show');
            navbarLinks.classList.add('hide');
        } else {
            navbarLinks.classList.remove('hide');
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
                navbarLinks.classList.add('hide');
            }
        });
    });

});
