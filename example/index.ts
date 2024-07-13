import Debug from '@bicycle-codes/debug'
import '../src/index.js'
import '../src/index.css'
import './index.css'
const debug = Debug()

const burger = document.querySelector('hamburger-menu')

burger?.addEventListener('open', ev => {
    debug('open', ev)
})

burger?.addEventListener('close', ev => {
    debug('close', ev)
})
