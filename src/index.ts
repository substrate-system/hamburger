import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

export class HamburgerMenu extends HTMLElement {
    isOpen:boolean = false

    constructor () {
        super()

        const isOpen = this.getAttribute('open')
        if (isOpen) this.isOpen = true

        this.innerHTML = `<button class="hamburger${this.isOpen ? ' close' : ''}">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav>
            <ul id="nav">
                ${Array.from(this.children).filter(Boolean).map(node => {
                    return node.outerHTML
                })}
            </ul>
        </nav>
        `
    }

    attributeChangedCallback (attr:string, oldValue:string, newValue:string) {
        debug('attribute changed....', attr, oldValue, newValue)
    }

    connectedCallback () {
        debug('connected')
        this.querySelector('button')?.addEventListener('click', ev => {
            ev.preventDefault()
            debug('click')
            this.isOpen = !this.isOpen
            debug('open???', this.isOpen)
        })

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    debug('Node added: ', mutation.addedNodes)
                }
            })
        })

        observer.observe(this, { childList: true })
    }
}

customElements.define('hamburger-menu', HamburgerMenu)
