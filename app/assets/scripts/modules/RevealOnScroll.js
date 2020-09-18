import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';


// first is an element or array of elements to fade in on scroll
class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.thresholdPercent = thresholdPercent;
        this.itemsToReveal = els;
        this.hideOnInit()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
        this.browserHeight = window.innerHeight
    }
    calcCaller() {
        // console.log('scroll function ran');
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calculateifScrolledTo(el)
            }
        })
    }
    events() {
        window.addEventListener('scroll', this.scrollThrottle)
        window.addEventListener('resize', debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333))
    }
    calculateifScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible")
                el.isRevealed = true;
                if (el.isLastItem) {
                    window.removeEventListener('scroll', this.scrollThrottle)
                }
            }
        }
    }
    hideOnInit() {
        this.itemsToReveal.forEach((el) => {
            el.classList.add("reveal-item")
            el.isRevealed = false;
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }


}

export default RevealOnScroll;