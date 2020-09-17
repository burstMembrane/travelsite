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

const header = document.querySelector('.site-header__logo')

const hideNav = () => {

    if (!header.classList.contains('hide'))
        header.classList.add('hide');


}
const showNav = () => {


    header.classList.remove('hide');
}
let windowScroll = new OnScroll({
    threshold: 300,
    ifTrue: hideNav,
    ifFalse: showNav
});