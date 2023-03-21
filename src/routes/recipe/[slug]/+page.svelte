<script>
	export let data;
	let recipe = data.recipe;
	console.log(recipe);
</script>

<h1 class="text-3xl font-bold underline">{recipe.title}</h1>
<button>Add +</button>
<p>{@html recipe.summary}</p>
<ul>
	{#each recipe.extendedIngredients as ingredient}
		<li>
			{ingredient.measures.metric.amount}
			{ingredient.measures.metric.unitShort}
			{ingredient.name}
		</li>
	{/each}
</ul>
<p>{@html recipe.instructions}</p>
