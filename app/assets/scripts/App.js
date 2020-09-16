//! import styles
import "../styles/styles.css";

// import javascript modules
import MobileMenu from './modules/MobileMenu';
import OnScroll from './modules/OnScroll'


// ! allow hot reloading of the files in project
if (module.hot) {
    module.hot.accept();
}


let menu = new MobileMenu;

const header = document.querySelector('.site-header')

const hideNav = () => {

    header.classList.add('hide');
    header.classList.remove('show');

}
const showNav = () => {

    header.classList.add('show');
    header.classList.remove('hide');
}
let windowScroll = new OnScroll({
    threshold: 300,
    ifTrue: hideNav,
    ifFalse: showNav
});