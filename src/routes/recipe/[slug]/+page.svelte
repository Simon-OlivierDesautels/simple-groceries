<script>
	import { onMount } from 'svelte';
	export let data;
	let recipe = data.recipe;

	onMount(async () => {});
</script>

<img class="mb-8 h-72 w-full object-cover" src={recipe.image} alt="" />
<div class="_wrapper">
	<div class="mb-8">
		<h1 class="mb-2 text-3xl font-semibold">{recipe.title}</h1>
		<div class="flex gap-2">
			<!-- {#if userRecipes.some((e) => e === data.id)} -->

			<button
				class="_btn w-full"
				on:click={() => {
					// addRecipe();
				}}
			>
				Add +</button
			>
			<!-- {:else} -->
			<button
				class="_btn w-full"
				on:click={() => {
					// removeRecipe();
				}}
			>
				Remove -</button
			>
			<!-- {/if} -->

			<a href={recipe.sourceUrl} class="_btn _btn--secondary inline-block w-full text-center"
				>Source url</a
			>
		</div>
	</div>
	<div class="mb-8">
		<h2 class="text-2xl font-semibold">🫐 Ingredients</h2>
		<ul>
			{#each recipe.extendedIngredients as ingredient}
				<li>
					{ingredient.measures.metric.amount}
					{ingredient.measures.metric.unitShort}
					{ingredient.name}
				</li>
			{/each}
		</ul>
	</div>
	<div class="mb-8">
		<h2 class="text-2xl font-semibold">📜 Instructions</h2>
		<p>{@html recipe.instructions}</p>
	</div>
	<div class="mb-8">
		<h2 class="text-2xl font-semibold">🌎 Summary</h2>
		<p class="font-medium">{@html recipe.summary}</p>
	</div>
</div>
