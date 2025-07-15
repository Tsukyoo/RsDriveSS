/* scroll.js */

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Une seule animation par élément
            }
        });
    }, { threshold: 0.2 }); // Ajustez le seuil (0.2 = 20% de l'élément visible)

    // Sélection des éléments à animer
    const fadeIns = document.querySelectorAll('.fade-in');
    fadeIns.forEach(element => {
        observer.observe(element);
    });

    const slideUps = document.querySelectorAll('.slide-up');
    slideUps.forEach(element => {
        observer.observe(element);
    });

    const zoomIns = document.querySelectorAll('.zoom-in');
    zoomIns.forEach(element => {
        observer.observe(element);
    });

    // Animations spécifiques aux sections (si nécessaire)
    const reservationTitle = document.querySelector('.reservation-title');
    if (reservationTitle) observer.observe(reservationTitle);

    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) observer.observe(reservationForm);

    const callbackSectionForm = document.querySelector('.callback-section-form');
    if (callbackSectionForm) observer.observe(callbackSectionForm);

    const vehiclesTitle = document.querySelector('.vehicles-title');
    if (vehiclesTitle) observer.observe(vehiclesTitle);

    const filterButtons = document.querySelector('.filter-buttons');
    if (filterButtons) observer.observe(filterButtons);

    const vehiclesGrid = document.querySelector('.vehicles-grid');
    if (vehiclesGrid) observer.observe(vehiclesGrid);

    const contactTitle = document.querySelector('.contact-title');
    if (contactTitle) observer.observe(contactTitle);

    const contactGrid = document.querySelector('.contact-grid');
    if (contactGrid) observer.observe(contactGrid);

    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) observer.observe(mapContainer);

    const callbackSectionContact = document.querySelector('.callback-section-contact');
    if (callbackSectionContact) observer.observe(callbackSectionContact);
});