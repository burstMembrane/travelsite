// helper class to check for scrolling on webpage.
// takes a config object with 3 args
// threshold: the scroll position to check
// ifTrue, a function to run if above threshold
// ifFalse, a function to run if below threshold

class OnScroll {
    constructor(config) {
        this.threshold = config.threshold || 300;
        this.ifTrue = config.ifTrue || null;
        this.ifFalse = config.ifFalse || null;
        this.scroll = document.documentElement.scrollTop;
        this.events();
    }
    events() {
        window.addEventListener('scroll', (e) => this.handleScroll(e))
    }
    handleScroll(e) {
        this.scroll = document.documentElement.scrollTop;
        this.scroll >= this.threshold ? this.ifTrue() : this.ifFalse()
    }

}

export default OnScroll;