const  movedItem =  document.querySelectorAll('.moved-item');
function topAnimate() {
    if (pageYOffset > 1) {
        document.querySelector('.header').classList.add('header-fixed');
        document.querySelector('.menu').classList.add('menu-fixed');
        document.querySelector('.inner').classList.add('none');
        document.body.style.padding = '126px 0 0 0'
    } else {
        document.querySelector('.header').classList.remove('header-fixed');
        document.querySelector('.menu').classList.remove('menu-fixed');
        document.querySelector('.inner').classList.remove('none');
        document.body.style.padding = '0 0 0 0'
    }
}
function itemAnimate() {
    movedItem.forEach((el) => {
        const item = el;
        const itemHeight = item.offsetHeight;
        const itemOffset = offset(item).top;

        let startItemAnim = window.innerHeight - itemHeight / 3;

        if (itemHeight > window.innerHeight) {
            startItemAnim = window.innerHeight - window.innerHeight / 3;
        }
        if ((pageYOffset > itemOffset - startItemAnim) && pageYOffset < (itemOffset + itemHeight)) {
            item.classList.add('_active');
        } else {
            item.classList.remove('_active')
        }
    })
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
window.addEventListener('scroll', animateOnScroll);
function animateOnScroll() {
    topAnimate();
    if (movedItem.length > 0) {
        itemAnimate();
    }
}
animateOnScroll();
