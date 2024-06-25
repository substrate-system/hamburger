import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

export class HamburgerMenu extends HTMLElement {
    isOpen:boolean = false
    transition:number = 200

    constructor () {
        super()

        const transition = this.getAttribute('transition')
        if (transition) {
            this.transition = parseInt(transition)
        }

        // if it is open, then show a 'close' button
        this.innerHTML = `<button class="hamburger${this.isOpen ? ' close' : ''}">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav>
            <ul>
                ${Array.from(this.children).filter(Boolean).map(node => {
                    return `<li>${node.outerHTML}</li>`
                }).join('')}
            </ul>
        </nav>
        `
    }

    attributeChangedCallback (attr:string, oldValue:string, newValue:string) {
        debug('attribute changed....', attr, oldValue, newValue)
    }

    connectedCallback () {
        debug('connected')
        const btn = this.querySelector('button')
        btn?.addEventListener('click', ev => {
            ev.preventDefault()
            if (this.isOpen) {
                // close the menu
                this.isOpen = false
                btn.classList.remove('close')
                const nav = this.querySelector('nav')
                nav?.classList.remove('visible')
                // we use the class 'vanish' to set `display: none`,
                // so it doesn't take up space in the DOM when hidden
                setTimeout(() => {
                    nav?.classList.add('vanish')
                }, this.transition || 200)
            } else {
                // open the menu
                this.isOpen = true
                btn.classList.add('close')
                const nav = this.querySelector('nav')
                nav?.classList.remove('vanish')
                setTimeout(() => {
                    // use a new tick so it transitions in
                    nav?.classList.add('visible')
                }, 0)
            }
        })
    }
}

customElements.define('hamburger-menu', HamburgerMenu)
