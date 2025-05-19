document.addEventListener('DOMContentLoaded', function() {
    // Navigation item click handler
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update header title based on selected nav
            const headerTitle = document.querySelector('.header h1');
            headerTitle.textContent = this.querySelector('span').textContent;
        });
    });

    // Refresh button functionality
    const refreshBtn = document.querySelector('.btn-primary');
    refreshBtn.addEventListener('click', function() {
        // Simulate loading
        this.textContent = 'Loading...';
        
        // Simulate API call delay
        setTimeout(() => {
            this.textContent = 'Refresh';
            
            // Update some random stats to simulate refresh
            const statNumbers = document.querySelectorAll('.stat-info h3');
            statNumbers.forEach(stat => {
                const currentNum = parseInt(stat.textContent);
                const newNum = currentNum + Math.floor(Math.random() * 5) - 2; // Random change
                stat.textContent = Math.max(0, newNum);
            });
            
            // Show a temporary success message
            const header = document.querySelector('.header');
            const alert = document.createElement('div');
            alert.style.backgroundColor = 'var(--success)';
            alert.style.color = 'white';
            alert.style.padding = '10px';
            alert.style.borderRadius = '4px';
            alert.style.marginBottom = '10px';
            alert.textContent = 'Data refreshed successfully!';
            
            header.insertAdjacentElement('afterend', alert);
            
            // Remove the alert after 3 seconds
            setTimeout(() => {
                alert.remove();
            }, 3000);
        }, 1000);
    });
    
    // Responsive sidebar toggle functionality
    const addResponsiveToggle = () => {
        // Add toggle button if on mobile
        if (window.innerWidth <= 768) {
            // Check if toggle already exists
            if (!document.querySelector('.sidebar-toggle')) {
                const toggle = document.createElement('button');
                toggle.className = 'sidebar-toggle';
                toggle.innerHTML = '<i class="fas fa-bars"></i>';
                toggle.style.position = 'fixed';
                toggle.style.top = '10px';
                toggle.style.left = '10px';
                toggle.style.zIndex = '1000';
                toggle.style.background = 'var(--primary)';
                toggle.style.color = 'white';
                toggle.style.border = 'none';
                toggle.style.borderRadius = '4px';
                toggle.style.padding = '10px';
                toggle.style.cursor = 'pointer';
                
                document.body.appendChild(toggle);
                
                toggle.addEventListener('click', () => {
                    const sidebar = document.querySelector('.sidebar');
                    sidebar.classList.toggle('active');
                });
            }
        }
    };
    
    // Call on load
    addResponsiveToggle();
    
    // Call on window resize
    window.addEventListener('resize', addResponsiveToggle);
});