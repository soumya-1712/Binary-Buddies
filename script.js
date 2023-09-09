const accordionButtons = document.querySelectorAll('.accordion-button');

// Add click event listeners to toggle accordion content
accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const expanded = button.getAttribute('aria-expanded') === 'true';

        // Toggle aria-expanded attribute
        button.setAttribute('aria-expanded', !expanded);

        // Toggle accordion content visibility
        content.style.display = expanded ? 'none' : 'block';
    });
});





// ________________________________________________________________________ smooth scrolling _________________


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});