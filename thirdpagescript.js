document.addEventListener('DOMContentLoaded', () => {
    const starsContainers = document.querySelectorAll('.stars');
    
    starsContainers.forEach(starsContainer => {
        const starRating = Math.floor(Math.random() * 5) + 1; // Generate a random rating between 1 and 5.
        starsContainer.textContent = '★'.repeat(starRating) + '☆'.repeat(5 - starRating);
    });
});