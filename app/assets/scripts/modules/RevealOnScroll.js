class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".feature-item")
        this.hideOnInit()
        this.events()
    }
    events() {
        window.addEventListener('scroll', () => {
            console.log('scroll function ran')
            this.itemsToReveal.forEach(el => {
                this.calculateifScrolledTo(el)

            })
        })
    }

    calculateifScrolledTo(el) {
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100
        if (scrollPercent < 75) {
            el.classList.add("reveal-item--is-visible")
        }

    }
    hideOnInit() {
        this.itemsToReveal.forEach((el) => el.classList.add("reveal-item"))
    }


}

export default RevealOnScroll;