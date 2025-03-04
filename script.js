// Smooth scrolling when clicking navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect when scrolling
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 100;
        if (sectionTop < windowHeight) {
            section.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Call once on page load

// Highlight active navigation link
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
});
