
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.logo-area, .motto, .btn');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 * index);
    });
});
