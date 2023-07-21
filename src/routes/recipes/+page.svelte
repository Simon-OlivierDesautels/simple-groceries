<script>
	import RecipesList from '$lib/components/RecipesList.svelte';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import { getRecipes } from '$lib/helpers/cookie.js';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { jsPDF } from 'jspdf';

	export let data;
	let recipes = data.recipes;

	let currentUserRecipes = [];
	onMount(() => {
		userRecipes.subscribe((value) => {
			currentUserRecipes = value;
		});
		userRecipes.set(JSON.parse(getRecipes('recipes')));
	});
	console.log(currentUserRecipes);
</script>

<h1>Recipes</h1>

<div class="_wrapper">
	<RecipesList {recipes} />
</div>

<form
	method="POST"
	action="?/fetchShoppingList"
	use:enhance={() => {
		return async ({ result, update }) => {
			let recipesIngredients = result.data;
			let ingredients = [];

			recipesIngredients.forEach((recipe) => {
				recipe.extendedIngredients.forEach((ingredient) => {
					ingredients.push(ingredient);
				});
			});

			let compareAisle = (a, b) => {
				if (a.aisle < b.aisle) return -1;
				if (a.aisle > b.aisle) return 1;
				return 0;
			};

			// Sort the array by the "aisle" property
			ingredients.sort(compareAisle);

			const organizedIngredientsByAisle = ingredients.reduce((acc, item) => {
				const { aisle } = item;
				if (!acc[aisle]) {
					acc[aisle] = [];
				}
				acc[aisle].push(item);
				return acc;
			}, {});

			const shoppingListPDF = new jsPDF();
			shoppingListPDF.text('Hello world!', 10, 10);
			shoppingListPDF.text('Hello world!', 15, 15);
			shoppingListPDF.save('shoppingList.pdf');
		};
	}}
>
	<input type="text" name="recipes" value={JSON.stringify(currentUserRecipes)} hidden />

	<button
		disabled={currentUserRecipes.length === 0}
		class="_btn _btn--rounded {currentUserRecipes.length !== 0 ? '_btn--orange' : ''}"
		>Create my shoping list</button
	>
</form>
