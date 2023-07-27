<script>
	export let ingredient;
	export let isCompleted = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<label class="main py-2 {isCompleted ? '_completed' : '_not-completed'}" on:click|preventDefault>
	<span class="text-base">{ingredient.name}</span>
	<input type="checkbox" on:click|preventDefault />
	<span class="checkbox" />
</label>
