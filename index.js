
const tarros = document.querySelector('.tarros');
const main = document.querySelector('main');
let beenOnScreen = false;
const options = {
    root: tarros,
    rootMargin: '50px',
    threshold: 1.0
}
const showElement = (e) => {
    if (beenOnScreen) return;
    if (e[0].isIntersecting) {
        tarros.style.display = 'grid';
    }

}
const observer = new IntersectionObserver(showElement, {
    threshold: .3
});
observer.observe(main);