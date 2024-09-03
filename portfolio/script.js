// script.js
document.querySelectorAll('.showroom-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const overlay = item.querySelector('.overlay');
        overlay.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        const overlay = item.querySelector('.overlay');
        overlay.style.transform = 'scale(1)';
    });
});
