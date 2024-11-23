document.addEventListener('DOMContentLoaded', function() {
    // Toggle visibility of troubleshooting steps
    const issues = document.querySelectorAll('.issue h2');
    
    issues.forEach(issue => {
        issue.addEventListener('click', function() {
            const content = issue.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
});
