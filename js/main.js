//* pour montrer le menu navigation*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* si il y a le menu */

if (navToggle) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })

}

/*le menu est caché */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* pour enlever le menu mobile */

const navLink = document.querySelectorAll('.nav_link')
    const linkAction=()=>{
        const navMenu = document.getElementById('nav-menu')
        // pour faire en sorte de quitter le menu des que l'on clique sur un des navlinks */
        navMenu.classList.remove('show-menu')
    }
navLink.forEach(n=> n.addEventListener('click',linkAction))

/* =======AJOUTER un blur header dans la zone du about =======*/

const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);


/* =======Scroll Up =======*/


const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    window.scrollY >= 250
        ? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll');
};

window.addEventListener('scroll', scrollUp);

/* =======Scroll Section active lien =======*/

const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href$=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link'); // Utilisez add au lieu de remove pour ajouter la classe
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

