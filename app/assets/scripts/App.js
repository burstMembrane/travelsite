//! import styles
import '../styles/styles.css';

// import javascript modules
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import 'lazysizes';

new MobileMenu();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 95);

// define modal as global variable
let modal;

// only import modal code when user clicks on a link -- saves initial page load.
document.querySelectorAll('.open-modal').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        if (typeof modal == 'undefined') {
            import ( /* webpackChunkName:"modal" */ './modules/Modal')
            .then((x) => {
                    modal = new x.default();
                    setTimeout(() => modal.openTheModal(), 20);
                })
                .catch((err) => console.log(err));
        } else {
            modal.openTheModal();
        }
    });
});

// ! allow hot reloading of the files in project
if (module.hot) {
    module.hot.accept();
}