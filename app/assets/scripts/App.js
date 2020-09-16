//! import styles
import "../styles/styles.css";

// import javascript modules
import MobileMenu from './modules/MobileMenu';



// ! allow hot reloading of the files in project
if (module.hot) {
    module.hot.accept();
}


let menu = new MobileMenu;