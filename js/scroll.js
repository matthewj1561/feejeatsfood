const section1 = document.querySelector('.block1')
const section2 = document.querySelector('.block2');

addEventListener("scroll", (event) => {
    listenToScroll(section1)
    listenToScroll(section2)

});

function listenToScroll(element) {
    const elementBound = element.getBoundingClientRect();
    if (elementBound.top <= window.scrollY) {
        animateIn(element);
    }
}

function animateIn(element) {
    element.style.opacity = 1;
    element.style.transform = "translateX(0)";
}

