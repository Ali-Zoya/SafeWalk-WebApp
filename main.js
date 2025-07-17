// Shared functions
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            // Initialize sidebar toggle
            document.getElementById('menuBtn').addEventListener('click', function() {
                document.getElementById('sidebar').classList.toggle('active');
            });
        });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load header on all pages that have #header element
    if (document.getElementById('header')) {
        loadHeader();
    }
    
    // Page-specific initializations
    if (document.getElementById('signupForm')) {
        // Signup page initialization
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Account created successfully! Redirecting to dashboard...');
            window.location.href = 'home.html';
        });
    }
    
    if (document.getElementById('loginForm')) {
        // Login page initialization
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful! Redirecting to dashboard...');
            window.location.href = 'home.html';
        });
    }
});