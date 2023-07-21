<script>
	export let recipe;
</script>

<ul>
	{#each recipe.extendedIngredients as ingredient}
		<li class="flex items-center gap-2">
			<input type="checkbox" />
			<span>
				{ingredient.measures.metric.amount}
				{ingredient.measures.metric.unitShort}
				{ingredient.name}
			</span>
		</li>
	{/each}
</ul>
