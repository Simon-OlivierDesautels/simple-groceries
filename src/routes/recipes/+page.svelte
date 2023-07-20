<script>
	export let data;
	let recipes = data.recipes;
</script>

<h1>Recipes</h1>

{#each recipes as recipe}
	<p class="text text-right text-sm">{recipe.title}</p>
	<p class="text text-right text-sm">{recipe.id}</p>
{/each}
