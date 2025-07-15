/* script.js */

document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments nécessaires
    const header = document.querySelector('.header');
    const burgerMenu = document.querySelector('.burger-menu'); // Si vous ajoutez un burger menu HTML
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');
    const recallButtons = document.querySelectorAll('.btn-callback, .btn-callback-form, .btn-callback-contact');
    const contactForm = document.querySelector('.contact-form form'); // Sélectionne le formulaire de contact
    const reservationForm = document.querySelector('.reservation-form'); // Sélectionne le formulaire de réservation

    // Gestion du menu responsive (burger menu)
    if (burgerMenu && mainNav) {
        burgerMenu.addEventListener('click', function() {
            mainNav.classList.toggle('open'); // Ajoutez/supprimez une classe 'open' pour afficher/masquer le menu
            burgerMenu.classList.toggle('open'); // Optionnel : animer l'icône du burger
        });

        // Fermer le menu si un lien est cliqué (sur mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    if (burgerMenu.classList.contains('open')) {
                        burgerMenu.classList.remove('open');
                    }
                }
            });
        });

        // Fermer le menu au redimensionnement de la fenêtre (optionnel)
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mainNav.classList.contains('open')) {
                mainNav.classList.remove('open');
                if (burgerMenu.classList.contains('open')) {
                    burgerMenu.classList.remove('open');
                }
            }
        });
    }

    // Soumission de formulaire simulée (pour le formulaire de contact)
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche la soumission réelle du formulaire
            alert('Votre message a été envoyé avec succès ! (Ceci est une simulation)');
            this.reset(); // Réinitialise le formulaire après la simulation
        });
    }

    // Soumission de formulaire simulée (pour le formulaire de réservation)
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Empêche la soumission réelle du formulaire
            alert('Votre demande de réservation a été envoyée ! Nous vous contacterons rapidement. (Ceci est une simulation)');
            this.reset(); // Réinitialise le formulaire après la simulation
        });
    }

    // Défilement fluide des ancres (si vous avez des liens d'ancres dans votre HTML)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (header ? header.offsetHeight : 0), // Ajuster pour la hauteur du header fixe
                    behavior: 'smooth'
                });

                // Fermer le menu mobile après avoir cliqué sur une ancre
                if (window.innerWidth <= 768 && mainNav.classList.contains('open')) {
                    mainNav.classList.remove('open');
                    if (burgerMenu && burgerMenu.classList.contains('open')) {
                        burgerMenu.classList.remove('open');
                    }
                }
            }
        });
    });

    // Boutons “Être rappelé” interactifs (simplement afficher une alerte)
    recallButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Votre demande de rappel a été enregistrée. Nous vous contacterons dans les plus brefs délais ! (Ceci est une simulation)');
        });
    });

    // Effet sticky header au scroll (si ce n'est pas déjà géré uniquement en CSS)
    window.addEventListener('scroll', function() {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // Animation au scroll (observer les éléments avec la classe 'animate')
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Une seule animation par élément
            }
        });
    }, { threshold: 0.2 });

    const animatedElements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in, .reservation-title, .reservation-form, .callback-section-form, .vehicles-title, .filter-buttons, .vehicles-grid, .contact-title, .contact-grid, .map-container, .callback-section-contact');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});