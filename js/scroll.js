const section1 = document.querySelector('#block1');
const section2 = document.querySelector('#block2');


// Must init first listener outside of scroll event so it renders
// upon page load
listenToScroll(section1)

addEventListener("scroll", (event) => {
    listenToScroll(section2)
});

function listenToScroll(element) {
    const elementBound = element.getBoundingClientRect();
    console.log(elementBound.top -110)
    if (elementBound.top -110 <= window.scrollY + window.innerHeight / 8) {
        animateIn(element);
    }
}


// An animate function that brings the desired element onto the page. 
// Params
// element - The element that we need to animate in
// callback - An optional function we can pass in to perform custom animations
function animateIn(element, callback) {
    if (callback) {
        callback(element)
    } else {
        element.style.opacity = 1;
        element.style.transform = "translateX(0)";
    }
}

