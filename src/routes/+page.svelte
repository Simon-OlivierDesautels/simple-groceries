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
	<div class="py-5">
		<svg width="337" height="2" viewBox="0 0 337 2" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1H336" stroke="#979EA6" stroke-linecap="round" stroke-dasharray="8 8" />
		</svg>
	</div>

	<RecipesList {recipes} />
</div>
