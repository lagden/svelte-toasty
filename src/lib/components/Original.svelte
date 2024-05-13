<script>
import {fade} from 'svelte/transition'

export let message
export let mode
export let id

const modes = {
	ok: 'Success',
	success: 'Success',
	info: 'Information',
	warning: 'Warning',
	warn: 'Warning',
	error: 'Error',
	danger: 'Error',
}
</script>

<div
	role="alert"
	aria-atomic="true"
	aria-label={modes?.[mode] ?? 'Normal'}
	aria-describedby="_{id}"
	class:tadashi-toast-original={true}
	class:tadashi-toast-original-primary={['primary'].includes(mode)}
	class:tadashi-toast-original-secondary={['secondary'].includes(mode)}
	class:tadashi-toast-original-accent={['accent'].includes(mode)}
	class:tadashi-toast-original-info={['info'].includes(mode)}
	class:tadashi-toast-original-success={['success', 'ok'].includes(mode)}
	class:tadashi-toast-original-warning={['warning', 'warn'].includes(mode)}
	class:tadashi-toast-original-danger={['error', 'danger'].includes(mode)}
	out:fade={{duration: 300}}
	on:outroend
>
	<div
		class:tadashi-toast-original-content={true}
		id="_{id}"
	>
		{@html message ?? ''}
	</div>
	<button
		aria-label="Remover a notificação"
		class:tadashi-toast-original-btn={true}
		on:click
	></button>
</div>

<style>
.tadashi-toast-original {
	position: relative;
	display: grid;
	max-width: 290px;
	grid-template-columns: 1fr 40px;
	grid-gap: 1px;
	margin: var(--tto-margin, 0 0 0.8em);
	border-radius: var(--tto-border-radius, 3px);
	box-shadow: var(--tto-box-shadow, 0 4px 10px oklch(0% 0 0 / 10%));
	overflow: hidden;
}

.tadashi-toast-original-content {
	padding: var(--tto-content-padding, 0.9em);
	box-sizing: border-box;
	word-wrap: break-word;
	background-color: oklch(var(--tto-bg, 100% 0 0 / 90%));
	color: oklch(var(--tto-c, 0% 0 0));
}

.tadashi-toast-original-btn {
	padding: 0;
	margin: 0;
	border: none;
	border-radius: 0;
	outline: none;
	background: none;
	cursor: pointer;
	box-sizing: border-box;
	font-size: var(--tto-btn-font-size, 1.5em);
	font-family: var(--tto-btn-font-family, monospace);
	background-color: oklch(var(--tto-bg, 100% 0 0 / 90%));
	color: oklch(var(--tto-c, 0% 0 0));
}

.tadashi-toast-original-btn:after {
	content: var(--tto-btn-after-content, '✗');
}

.tadashi-toast-original > .tadashi-toast-original-content,
.tadashi-toast-original > .tadashi-toast-original-btn {
	--tto-bg: var(--b2, 100% 0 0 / 90%);
	--tto-c: var(--bc, 0% 0 0);
}

.tadashi-toast-original-primary > .tadashi-toast-original-content,
.tadashi-toast-original-primary > .tadashi-toast-original-btn {
	--tto-bg: var(--p, 51% 0.24 288.18 / 90%);
	--tto-c: var(--pc, 100% 0 0);
}

.tadashi-toast-original-secondary > .tadashi-toast-original-content,
.tadashi-toast-original-secondary > .tadashi-toast-original-btn {
	--tto-bg: var(--s, 69.71% 0.329 342.55 / 90%);
	--tto-c: var(--sc, 100% 0 0);
}

.tadashi-toast-original-accent > .tadashi-toast-original-content,
.tadashi-toast-original-accent > .tadashi-toast-original-btn {
	--tto-bg: var(--a, 76.76% 0.184 183.61 / 90%);
	--tto-c: var(--ac, 100% 0 0);
}

.tadashi-toast-original-success > .tadashi-toast-original-content,
.tadashi-toast-original-success > .tadashi-toast-original-btn {
	--tto-bg: var(--su, 75.6% 0.202 151 / 90%);
	--tto-c: var(--suc, 100% 0 0);
}

.tadashi-toast-original-info > .tadashi-toast-original-content,
.tadashi-toast-original-info > .tadashi-toast-original-btn {
	--tto-bg: var(--in, 54.59% 0.132 255.13 / 90%);
	--tto-c: var(--inc, 100% 0 0);
}

.tadashi-toast-original-warning > .tadashi-toast-original-content,
.tadashi-toast-original-warning > .tadashi-toast-original-btn {
	--tto-bg: var(--wa, 83.28% 0.171 82 / 90%);
	--tto-c: var(--wac, 100% 0 0);
}

.tadashi-toast-original-danger > .tadashi-toast-original-content,
.tadashi-toast-original-danger > .tadashi-toast-original-btn {
	--tto-bg: var(--er, 66.16% 0.198 23.35 / 90%);
	--tto-c: var(--erc, 100% 0 0);
}
</style>
