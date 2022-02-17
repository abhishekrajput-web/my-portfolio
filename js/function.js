// ======MENU SHOW HIDDEN======

const navMenu = document.getElementById("nav-menu"),
    toggleMenu = document.getElementById("nav-toggle"),
    closeMenu = document.getElementById("nav-close");

// =====  SHOW =====

toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// === HIDDEN =====

closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
});

// =====  REMOVE MENU   ======

let navLink = document.querySelectorAll(".nav-link");

// ACTIVE LINK
function linkAction() {
    navLink.forEach(n => n.classList.remove("active"));
    this.classList.add("active");

    // REMOVE MENU MOBILE

    navMenu.classList.remove("show");
}

navLink.forEach(n => n.addEventListener("click", linkAction));



// ==============SCROLL SECTION ACTIVE LINKS===============

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 300;
        let sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
        } else {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
        }
    })
}



// DYNAMMIC YEAR

const currentYear = new Date().getFullYear();
const year = document.getElementById("year");
year.innerText = currentYear;

// SCROLLREVEALJS

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true
});

// HOME SECTION
sr.reveal(".home-img", { delay: 100 });
sr.reveal(".home-title", { delay: 200 });
sr.reveal(".home-profession", { delay: 400 });
sr.reveal(".home-social-links", { interval: 200 });
sr.reveal(".home-button", { delay: 1000 });

// ABOUT SECTION

sr.reveal(".about-description", {});
sr.reveal(".about-img", { delay: 200 });
sr.reveal(".about-information-title", { delay: 400 });
sr.reveal(".about-information-data", { interval: 200 });
sr.reveal(".home-button", { delay: 600 });

// SKILLS SECTION
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-data", { interval: 200 });

// SKILLS PERFECT SECTION
sr.reveal(".tech-box", { interval: 200 });

// EDUCATION SECTION
sr.reveal(".education-content", { interval: 200 });

// SERVICES SECTION
sr.reveal(".services-content", { interval: 200 });

// CERTIFICATES SECTION
sr.reveal(".certificate-box", { interval: 200 });

// PROJECTS SECTION
sr.reveal(".project-title", {});
sr.reveal(".project-description", { delay: 200 });
sr.reveal(".button-light", { delay: 400 });
sr.reveal(".project-img", { delay: 600 });


// WORKS SECTION
sr.reveal(".works-img", { interval: 200 });

// CONTACT SECTION
sr.reveal(".contact-input", { interval: 200 });
sr.reveal(".contact-button", { delay: 300 });
sr.reveal(".contact-subtitle", { delay: 500 });
sr.reveal(".contact-text", { delay: 700 });

//FOOTER SECTION 
sr.reveal(".footer-title", {});
sr.reveal(".footer-description", { delay: 200 });
sr.reveal(".footer-link", { delay: 300 });
sr.reveal(".copyright", { delay: 400 });


// PRELOADER EFFECT
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
});


// NIGHT MODE

const nightIcon = document.getElementById("night-mode");
const sectionSubtitle = document.querySelectorAll(".section-subtitle");
const aboutSubtitle = document.querySelectorAll(".about-information-title");
const skillSubtitle = document.querySelectorAll(".skills-subtitle");
const contactSubtitle = document.querySelectorAll(".contact-subtitle");
const certificateTitle = document.querySelectorAll(".certificate-title");
const PostionName = document.querySelector(".home-profession");
// console.log(sectionSubtitle);


nightIcon.addEventListener("click", nightAction);

function nightAction() {
    document.body.classList.toggle("night-body");
    nightIcon.classList.toggle("night-icon-change");
    sectionSubtitle.forEach((subtitle) => {
        subtitle.classList.toggle("section-white");
    });
    aboutSubtitle.forEach((aboutTitle)=>{
        aboutTitle.classList.toggle("orange");
    });
    skillSubtitle.forEach((skillTitle)=>{
        skillTitle.classList.toggle("orange");
    });
    contactSubtitle.forEach((contactTitle)=>{
        contactTitle.classList.toggle("orange");
    });
    certificateTitle.forEach((ct)=>{
        ct.classList.toggle("section-white");
    });
    PostionName.classList.toggle("section-white");
}



//FORMSFREE EMAIL SETUP:

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.classList.add("status-fine");
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    // status.classList.add("status-error");
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        // status.classList.add("status-error");
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit);