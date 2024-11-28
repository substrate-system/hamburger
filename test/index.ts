import { test } from '@substrate-system/tapzero'
import { dom } from '@substrate-system/dom'
import '../src/index.js'

test('hamburger menu', async t => {
    t.plan(3)
    const el = await dom.waitFor('hamburger-menu')
    t.ok(el, 'should find the hamburger element')

    try {
        await dom.waitFor('nav', {
            visible: true,
            timeout: 1000
        })
    } catch (err) {
        t.ok((err as Error).message.includes('was not found'),
            'should not find the nav element before we click')
    }

    dom.click(el?.querySelector('button') as HTMLButtonElement)

    const nav = await dom.waitFor('nav')
    t.ok(nav, 'nav element exists after we click')
})
