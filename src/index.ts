import { createDebug } from '@substrate-system/debug'
const debug = createDebug()

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'hamburger-menu': HamburgerMenu;
    }
}

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
        const btn = this.querySelector('button')
        btn?.addEventListener('click', ev => {
            ev.preventDefault()
            if (this.isOpen) {
                // close the menu
                this.isOpen = false
                btn.classList.remove('close')
                const nav = this.querySelector('nav')
                nav?.classList.remove('visible')
                setTimeout(() => {
                    nav!.style.display = 'none'
                }, this.transition || 200)

                const event = new CustomEvent('close', {
                    bubbles: true,
                    cancelable: true
                })
                this.dispatchEvent(event)
            } else {
                // open the menu
                this.isOpen = true
                btn.classList.add('close')
                const nav = this.querySelector('nav')
                // nav?.classList.remove('vanish')
                nav!.style.display = 'block'
                setTimeout(() => {
                    // use a new tick so it transitions in
                    nav?.classList.add('visible')
                }, 0)

                const event = new CustomEvent('open', {
                    bubbles: true,
                    cancelable: true
                })
                this.dispatchEvent(event)
            }
        })
    }
}

customElements.define('hamburger-menu', HamburgerMenu)
