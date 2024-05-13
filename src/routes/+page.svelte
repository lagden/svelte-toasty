<script>
import {Toasts, acts} from '$lib/index.js'

let triggers = [
	{mode: 'normal', message: 'Nothing to say...', lifetime: 5},
	{mode: 'primary', message: 'First place'},
	{mode: 'secondary', message: 'The second is the first loser'},
	{mode: 'accent', message: '♪♫'},
	{mode: 'success', message: 'Nice!'},
	{mode: 'info', message: 'Leve a japona'},
	{mode: 'warning', message: 'Já chegou o disco voador!'},
	{mode: 'error', message: 'Alta tensão'},
]
</script>

<svelte:head>
	<link
		href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css"
		rel="stylesheet"
		type="text/css"
	/>
	<script src="https://cdn.tailwindcss.com"></script>
</svelte:head>

<div class="flex flex-col gap-4 items-start">
	{#each triggers as toasty}
		<button
			type="button"
			class="btn btn-{toasty.mode}"
			on:click={() => {
				acts.add(toasty)
			}}>Toasty!!! - {toasty.mode}</button
		>
	{/each}
</div>

<Toasts />
