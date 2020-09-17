//! import styles
import "../styles/styles.css";

// import javascript modules
import MobileMenu from './modules/MobileMenu';
import OnScroll from './modules/OnScroll'
import RevealOnScroll from './modules/RevealOnScroll';



let menu = new MobileMenu;

const header = document.querySelector('.site-header__logo')

const hideNav = () => !header.classList.contains('hide') ? header.classList.add('hide') : null
const showNav = () => header.classList.remove('hide')



let revealOnScroll = new RevealOnScroll()

let windowScroll = new OnScroll({
    threshold: 300,
    ifTrue: hideNav,
    ifFalse: showNav
});


// ! allow hot reloading of the files in project
if (module.hot) {
    module.hot.accept();
}