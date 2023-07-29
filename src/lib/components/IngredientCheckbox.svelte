<script>
	import { setIngredientCompletion } from '$lib/helpers/cookie';

	export let recipe;
	export let ingredient;
	export let isCompleted = false;

	let updateIngredient = () => {
		// console.log(console.log('tt'));
		// console.log(recipe['ingredients'].find((x) => x.id === ingredient.id)['completed']);

		let ingredientState = recipe['ingredients'].find((x) => x.id === ingredient.id)['completed'];
		recipe['ingredients'].find((x) => x.id === ingredient.id)['completed'] = !ingredientState;
		setIngredientCompletion(recipe.id, ingredient.id, !ingredientState);
		recipe['ingredients'] = recipe['ingredients'];
		// console.log(recipe['ingredients'].find((x) => x.id === ingredient.id)['completed']);
		// !$userRecipes[`${recipe.id}`]['ingredients'][`${ingredient.id}`]['completed'];
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->

<label
	class="main py-2 {isCompleted ? '_completed' : '_not-completed'}"
	on:click|preventDefault={() => {
		updateIngredient();
	}}
>
	<div>
		<div class="_check"></div>
		<span class="text-base"
			>{ingredient.measures.metric.amount +
				' ' +
				ingredient.measures.metric.unitShort +
				' ' +
				ingredient.name}</span
		>
	</div>
	<input type="checkbox" on:click|preventDefault />
	<span class="checkbox" />
</label>
