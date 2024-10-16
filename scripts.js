// FAQ Toggle Functionality with Icon Rotation
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
        item.classList.toggle('active');
    });
});