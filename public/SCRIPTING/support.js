// Accordion functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });

  // JavaScript to toggle the visibility of resource details when 'Read More' is clicked
document.addEventListener('DOMContentLoaded', function () {
  const readMoreLinks = document.querySelectorAll('.read-more');

  readMoreLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default anchor click behavior
      const targetId = link.getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      
      // Toggle the visibility of the resource details
      if (targetContent.style.display === 'none' || targetContent.style.display === '') {
        targetContent.style.display = 'block';
        link.textContent = 'Read Less'; // Change link text to 'Read Less'
      } else {
        targetContent.style.display = 'none';
        link.textContent = 'Read More'; // Change link text back to 'Read More'
      }
    });
  });
});
