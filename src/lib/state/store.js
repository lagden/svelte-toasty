import {writable} from 'svelte/store'

const KEY = Symbol.for('store.notifications')
const singleton = {}

singleton[KEY] = writable(new Set([]))

Object.freeze(singleton)

export default singleton[KEY]
