// import {setTimeout} from 'timers/promises'
import {get} from 'svelte/store'
import {test, expect, beforeEach, vi} from 'vitest'
import {Toasts, acts} from '$lib/index.js'

// JSDOM doesn't have the method yet
globalThis.HTMLElement.prototype.showPopover = vi.fn()

beforeEach(() => {
	document.body.innerHTML = '<main id="xxx"></main>'
})

function doc_query(selector) {
	const node = document.querySelector(selector)
	if (!node) {
		throw new Error(`No element found for selector: ${selector}`)
	}
	return node
}

// test('Toasts', async () => {
// 	const target = doc_query('main#xxx')
// 	new Toasts({target})

// 	const toasty = {message: 'one', lifetime: 10}
// 	acts.add(toasty)

// 	await setTimeout(100)

// 	const div = doc_query('.tadashi-toasty')
// 	expect(div).toBeDefined()

// 	const store = acts.getStore()
// 	expect(get(store).size).toBe(1)

// 	const spy = vi.fn()
// 	const btn = doc_query('button.tadashi-toast-original-btn')
// 	btn.addEventListener('click', () => {
// 		spy()
// 		acts.remove(toasty)
// 		expect(get(store).size).toBe(0)
// 	})

// 	const clickEvent = new Event('click')
// 	btn.dispatchEvent(clickEvent)
// 	expect(spy, 'clicked').toHaveBeenCalledTimes(1)
// })

test('Size', async () => {
	const toasty = {message: 'one', lifetime: 10}
	acts.add(toasty)
	acts.add(toasty)
	acts.add(toasty)

	const target = doc_query('main#xxx')
	new Toasts({target})

	const store = acts.getStore()
	expect(get(store).size).toBe(3)
})
