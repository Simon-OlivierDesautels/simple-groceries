<script>
	import IngredientCheckbox from './IngredientCheckbox.svelte';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import { flip } from 'svelte/animate';
	import { send, receive } from '$lib/helpers/transitions.js';
</script>

<!-- <span class="text-white">{JSON.stringify(ingredients)}</span> -->
<ul class="flex flex-col gap-4 py-4">
	{#each $userRecipes as recipe}
		{#each recipe.ingredients.filter((t) => !t.completed) as ingredient, index (ingredient.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore missing-declaration -->
			<li animate:flip>
				<IngredientCheckbox bind:isCompleted={ingredient.completed} bind:recipe bind:ingredient />
			</li>
		{/each}

		{#each recipe.ingredients.filter((t) => t.completed) as ingredient, index (ingredient.id)}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore missing-declaration -->
			<!-- <li in:receive={{ key: ingredient.id }} out:send={{ key: ingredient.id }} animate:flip> -->
			<li animate:flip>
				<IngredientCheckbox bind:isCompleted={ingredient.completed} bind:recipe bind:ingredient />
			</li>
		{/each}
	{/each}
</ul>
