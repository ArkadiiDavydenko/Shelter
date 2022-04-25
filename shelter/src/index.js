const navigation = document.querySelector(".header__navigation");
const hamburger = document.querySelector(".header__hamburger");
const modalBackdrop = document.querySelector(".modal");
const navigationItem = document.querySelectorAll(".navigation__item");


const toggleNavigation = () => {
    navigation.classList.toggle("transition-left");
    document.body.classList.toggle("none-scroll");
    hamburger.classList.toggle("hamburger-rotate");
    modalBackdrop.classList.toggle("modal__backdrop");
};

const closeNavigation = () => {
    navigation.classList.remove("transition-left");
    document.body.classList.remove("none-scroll");
    hamburger.classList.remove("hamburger-rotate");
    modalBackdrop.classList.remove("modal__backdrop");
};


hamburger.addEventListener("click", toggleNavigation);
modalBackdrop.addEventListener("click", closeNavigation);
navigationItem.forEach((el) => el.addEventListener('click', closeNavigation));