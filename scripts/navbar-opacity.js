window.addEventListener('scroll', function() {
    nav = document.getElementById("nav-container")
    if (window.scrollY > 0) { // If scrolled down from the top
        nav.style.backgroundColor = "var(--primaryNeutral)"
    } else {
        nav.style.backgroundColor = "rgba(0,0,0,0)"
    }
});