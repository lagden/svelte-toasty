import hexID from '@tadashi/hex-id'
import store from './store.js'

const base = {
	mode: 'normal',
	message: '',
	lifetime: 0,
}

export function add(args) {
	const notification = {
		...base,
		...args,
		id: `tadashi_toasty_${hexID()}`,
	}
	store.update(n => {
		n.add(notification)
		return n
	})
}

export function remove(notification) {
	store.update(n => {
		n.delete(notification)
		return n
	})
}

export function getStore() {
	return store
}
