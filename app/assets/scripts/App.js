//! import styles
import "../styles/styles.css";

// import javascript modules
import MobileMenu from './modules/MobileMenu';
import OnScroll from './modules/OnScroll'
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';


let menu = new MobileMenu;

const header = document.querySelector('.site-header__logo')

const hideNav = () => !header.classList.contains('hide') ? header.classList.add('hide') : null
const showNav = () => header.classList.remove('hide')

let stickyHeader = new StickyHeader()

new RevealOnScroll(document.querySelectorAll('.feature-item'), 75)
new RevealOnScroll(document.querySelectorAll('.testimonial'), 95)

// let windowScroll = new OnScroll({
//     threshold: 300,
//     ifTrue: hideNav,
//     ifFalse: showNav
// });


// ! allow hot reloading of the files in project
if (module.hot) {
    module.hot.accept();
}