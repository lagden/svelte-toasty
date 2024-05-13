<script>
/**
 * Represents a toast component.
 * @typedef {Object} Toast
 * @property {import('svelte').SvelteComponent} custom - The custom component to be displayed as the toast.
 * @property {string} id - The unique identifier of the toast.
 * @property {number} lifetime - The duration (in seconds) the toast should be visible.
 * @property {string} message - The message to be displayed in the toast.
 * @property {string} mode - The mode of the toast.
 */

import * as acts from '../state/acts.js'
import {moveIt} from '../helpers/util.js'

/**
 * Original toast component.
 * @type {import('svelte').SvelteComponent}
 */
import Original from './Original.svelte'

/**
 * The toast object to be displayed.
 * @type {Toast}
 */
export let toast

// prettier-ignore
let {
	custom,
	id,
	lifetime,
	message,
	mode,
} = toast

/**
 * The component to be displayed. Defaults to 'Original' if custom component is not provided.
 * @type {import('svelte').SvelteComponent}
 */
let component = custom ?? Original

/**
 * The popover element.
 * @type {HTMLElement}
 */
let popElement

/**
 * Flag indicating whether the toast should be shown.
 * @type {boolean}
 */
let show = true

/**
 * Timeout ID for toast lifetime.
 * @type {number}
 */
let lifetimeTimeoutId

/**
 * Handles the 'toggle' event.
 * @param {Event} event - The event object.
 */
const onToggle = event => {
	moveIt('.tadashi-toasty')
	if (event.newState === 'closed') {
		setTimeout(() => {
			acts.remove(toast)
		}, 300)
	}
}

/**
 * Handles the 'outroend' event.
 */
const onOutroend = () => {
	popElement.hidePopover()
}

/**
 * Removes the toast.
 */
const rm = () => {
	clearTimeout(lifetimeTimeoutId)
	show = false
}

/**
 * Initializes the toast.
 * @param {HTMLElement} node - The HTML element representing the toast.
 * @returns {{ destroy: () => void }} - The cleanup function.
 */
function init(node) {
	// globalThis.document.body.insertAdjacentElement('beforeend', node)
	node.addEventListener('toggle', onToggle)
	node.showPopover()
	return {
		destroy() {
			node.hidePopover()
			node.removeEventListener('toggle', onToggle)
		},
	}
}

if (lifetime > 0) {
	lifetimeTimeoutId = setTimeout(() => {
		rm()
	}, lifetime * 1000)
}
</script>

<article
	use:init
	bind:this={popElement}
	popover="manual"
	class:tadashi-toasty={true}
	data-id={id}
>
	{#if show}
		<svelte:component
			this={component}
			{id}
			{message}
			{mode}
			on:click={rm}
			on:outroend={onOutroend}
		/>
	{/if}
</article>

<style>
.tadashi-toasty[popover] {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	background-color: transparent;
	outline: none;
	border: none;
	inset: var(--tt-inset, 0.8rem 0.8rem auto auto);
	/* inset: unset;
	top: var(--tt-top, 0.8rem);
	right: var(--tt-right, 0.8rem);
	bottom: var(--tt-bottom, auto);
	left: var(--tt-left, auto); */
	opacity: 0;
	transition:
		display 0.3s,
		overlay 0.3s,
		opacity 0.3s,
		transform 0.3s;
}

@supports (transition-behavior: allow-discrete) {
	.tadashi-toasty[popover] {
		transition:
			display 0.3s allow-discrete,
			overlay 0.3s allow-discrete,
			opacity 0.3s,
			transform 0.3s;
	}
}

.tadashi-toasty[popover]:popover-open {
	opacity: 1;
	@starting-style {
		opacity: 0;
	}
}
</style>
