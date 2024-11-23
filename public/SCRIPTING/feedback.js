document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Simple form validation
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const feedback = document.querySelector('#feedback').value;

        if (name && email && feedback) {
            alert("Thank you for your feedback!");
            form.reset(); // Reset form after submission
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
