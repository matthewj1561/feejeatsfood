const section1 = document.querySelector('.block1');
const section2 = document.querySelector('.block2');
addEventListener("scroll", (event) => {
    console.log(window.scrollY)
    if (window.scrollY >= 320) {
        section1.style.opacity = 1;
    }
    if (window.scrollY >= 800) {
        section2.style.opacity = 1;
    }

});
