<script>
	import { dummyRecipes } from '$lib/helpers/dummyData';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import RecipesList from '$lib/components/RecipesList.svelte';

	export let data;
	let recipes = dummyRecipes.results;
	let currentUserRecipes;

	userRecipes.subscribe((value) => {
		currentUserRecipes = value;
	});
</script>

<div class="_wrapper">
	<h1 class=" padding pb-1 text-5xl italic text-white">Recipes</h1>
	<h2 class="font-normal text-grey-light">Tell us what you want to eat</h2>
	<!-- <hr class="py-5" /> -->
	<RecipesList {recipes} />
</div>
