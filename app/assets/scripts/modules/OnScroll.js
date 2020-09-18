// helper class to check for scrolling on webpage.
// takes a config object with 3 args
// threshold: the scroll position to check
// ifTrue, a function to run if above threshold
// ifFalse, a function to run if below threshold
import throttle from 'lodash/throttle';


class OnScroll {
    constructor(config) {
        this.threshold = config.threshold || 300;
        this.ifTrue = config.ifTrue || null;
        this.ifFalse = config.ifFalse || null;
        console.log(this.ifFalse)
        this.scrollThrottle = throttle(this.handleScroll, 200).bind(this)
        this.scroll = document.documentElement.scrollTop;
        this.events();
    }
    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333))
    }
    handleScroll(e) {
        this.scroll = document.documentElement.scrollTop;
        if (this.scroll >= this.threshold) {
            this.ifTrue()
        } else {
            this.ifFalse()
        }
    }
}

export default OnScroll;