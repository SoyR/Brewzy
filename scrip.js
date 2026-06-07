document.addEventListener("DOMContentLoaded", function () {
    const menuCategories = document.querySelectorAll('.menu-category');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    menuCategories.forEach(category => {
        observer.observe(category);
    });
});
