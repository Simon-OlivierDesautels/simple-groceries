<script>
	import { setRecipe, checkRecipe } from '$lib/helpers/cookie.js';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import Add from '$lib/images/icon-add.svelte';
	import Remove from '$lib/images/icon-remove.svelte';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { formatIngredients } from '$lib/helpers/formating';

	/**
	 * @type {number}
	 */
	export let recipeId;
	export let classes = '';

	let canAdd = true;
	let isLoading = false;
	onMount(() => {
		canAdd = checkRecipe(recipeId);
	});
</script>

<form
	method="POST"
	action="?/addRecipeToList"
	use:enhance={({ data }) => {
		isLoading = true;
		data.append('id', recipeId);

		return async ({ result, update }) => {
			isLoading = false;
			let recipe = result.data;

			setRecipe({
				id: recipe.id,
				title: recipe.title,
				ingredients: formatIngredients(recipe.extendedIngredients)
			});
			userRecipes.set(JSON.parse(localStorage.getItem('recipes')));
			canAdd = checkRecipe(recipeId);
		};
	}}
>
	<button class="_btn {classes} h-10 w-10 {!canAdd ? '_btn--orange' : ''}" on:click={() => {}}>
		{#if isLoading}
			<div class="lds-ellipsis {isLoading ? 'ghost' : ''}">
				<div />
				<div />
				<div />
				<div />
			</div>
		{:else if canAdd}
			<Add />
		{:else}
			<Remove />
		{/if}
	</button>
</form>
