// script.js
function highlightSection() {
    const aboutMeSection = document.getElementById('about-me');
    aboutMeSection.style.backgroundColor = '#f0f8ff';
    aboutMeSection.scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
        aboutMeSection.style.backgroundColor = '#fff';
    }, 2000);
}
a