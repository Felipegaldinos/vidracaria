// Mudança de fundo do Header ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#000';
        header.style.padding = '0.5rem 0';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '1rem 0';
    }
});

// Rolagem Suave (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});