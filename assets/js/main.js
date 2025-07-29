// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error(`huh? Make sure ${selector} exists or is typed correctly`)
};

//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    /* Check if scroll has gone past certain point */
    if (this.scrollY >= 15 ){
        headerElement.classList.add('activated'); /* Adds class activated to headerElement */
    }else{
        headerElement.classList.remove('activated');
    }
}

window.addEventListener('scroll', scrollHeader) /* Listens for event scroll. When triggered calls scrollHeader */
// Open menu & search pop-up

const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};

menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper