// =====================================
// 1. AUTOMATIC COPYRIGHT YEAR
// =====================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================
// 2. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    // Close the menu after clicking a navigation link.
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


// =====================================
// 3. ANIMATED PROFILE TITLES
// =====================================

const typingElement = document.getElementById("typing-text");

const roles = [
    "Aspiring Software Developer",
    "AI & ML Enthusiast",
    "Computer Science Student",
    "Python Programmer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeRole() {

    if (!typingElement) {
        return;
    }

    const currentRole = roles[roleIndex];

    // Add or remove one character.
    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent = currentRole.substring(
        0,
        characterIndex
    );

    let delay = deleting ? 40 : 85;

    // Pause when the complete title appears.
    if (!deleting && characterIndex === currentRole.length) {

        deleting = true;
        delay = 1300;

    }

    // Move to the next title.
    else if (deleting && characterIndex === 0) {

        deleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        delay = 300;

    }

    window.setTimeout(typeRole, delay);

}

typeRole();