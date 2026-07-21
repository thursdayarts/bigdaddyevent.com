// ===============================
// BIG DADDY EVENT MANAGEMENT
// Premium Homepage Script
// ===============================

// HEADER SCROLL EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,0.98)";
        header.style.boxShadow = "0 5px 30px rgba(0,0,0,0.08)";

    }else{

        header.style.background = "rgba(255,255,255,0.92)";
        header.style.boxShadow = "none";

    }

});


// ===============================
// HERO PARALLAX
// ===============================

const heroVideo = document.querySelector(".hero video");

window.addEventListener("scroll", () => {

    const scroll = window.pageYOffset;

    if(heroVideo){

        heroVideo.style.transform =
        `translateY(${scroll * 0.25}px)`;

    }

});


// ===============================
// REVEAL ANIMATION
// ===============================

const reveals = document.querySelectorAll(
    ".intro, .services-preview, .coverage, .showcase, .featured-services, .testimonials, .cta"
);

const revealSection = () => {

    const triggerBottom =
        window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if(top < triggerBottom){

            section.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);


// ===============================
// HERO CONTENT FADE
// ===============================

const heroContent =
document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if(heroContent){

        heroContent.style.opacity =
            1 - scroll / 600;

    }

});


// ===============================
// ACTIVE NAV LINK
// ===============================

const navLinks =
document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        link.classList.add("active");

    });

});


// ===============================
// IMAGE HOVER EFFECT
// ===============================

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons =
document.querySelectorAll(
    ".btn-primary, .btn-secondary"
);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transition = ".4s";

    });

});


// ===============================
// LOGO SCALE ON SCROLL
// ===============================

const logo =
document.querySelector(".logo-center");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    if(!logo) return;

    if(scroll > 100){

        logo.style.transform = "scale(.85)";

    }else{

        logo.style.transform = "scale(1)";

    }

});


// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target =
        document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// PAGE LOAD ANIMATION
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// ===============================
// FUTURE COUNTER SUPPORT
// ===============================

function animateCounter(element, target){

    let count = 0;

    const speed = target / 120;

    const update = () => {

        count += speed;

        if(count < target){

            element.innerText =
            Math.floor(count);

            requestAnimationFrame(update);

        }else{

            element.innerText = target;

        }

    };

    update();

}


// ===============================
// CONSOLE BRANDING
// ===============================

console.log(`
👑 BIG DADDY EVENT MANAGEMENT

Luxury Weddings
Corporate Events
Celebrations

Serving Kerala & Tamil Nadu

`);