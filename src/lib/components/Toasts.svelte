<script>
import store from '../state/store.js'
import Toast from './Toast.svelte'
</script>

{#each [...$store] as toast (toast.id)}
	<Toast {toast} />
{/each}
