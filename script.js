document.addEventListener('DOMContentLoaded', function () {
    // Set the initial theme to 'light-mode'
    document.body.classList.add('light-mode');
    
    var themeToggleButton = document.getElementById('theme-toggle');
    
    themeToggleButton.addEventListener('click', function () {
        // Toggle the 'light-mode' and 'dark-mode' classes
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.replace('light-mode', 'dark-mode');
        } else {
            document.body.classList.replace('dark-mode', 'light-mode');
        }
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

