/*======= menu brabo ============== */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*============= traçinho fera kkkk ============= */
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header navbar a');



window.onscroll = () => {

    section.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

/* ============ Sticky navbar =================*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/* ============ menu bão =================*/

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

/* ============ modo luz/escuro =================*/

let darkModeIcon = document.querySelector('#modoescuro-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/* ============ scroll reveal =================*/

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.inicio-content .heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img img, .servicos-container, .projetos-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.inicio-content h1, .sobre-img img', { origin: 'left' });
ScrollReveal().reveal('.inicio-content p, .sobre-content', { origin: 'right' });