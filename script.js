let language = 'en';

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('nav, nav li a, p').forEach(item => {
        item.classList.toggle('dark-mode-text');
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function toggleLanguage() {
    const headerTitle = document.getElementById('headerTitle');
    const headerSubtitle = document.getElementById('headerSubtitle');
    const homeLink = document.getElementById('homeLink');
    const researchLink = document.getElementById('researchLink');
    const musicLink = document.getElementById('musicLink');
    const contactLink = document.getElementById('contactLink');

    if (language === 'en') {
        language = 'mt';
        headerTitle.textContent = 'Ethan James Ġerman';
        headerSubtitle.textContent = 'Student ta\' Doktorat | Università ta\' Sheffield';
        homeLink.textContent = 'Baża';
        researchLink.textContent = 'Riċerka';
        musicLink.textContent = 'Muzika';
        contactLink.textContent = 'Kuntatt';
    } else {
        language = 'en';
        headerTitle.textContent = 'Ethan James German';
        headerSubtitle.textContent = 'Ph.D. Student | University of Sheffield';
        homeLink.textContent = 'Home';
        researchLink.textContent = 'Research';
        musicLink.textContent = 'Music';
        contactLink.textContent = 'Contact';
    }
}
