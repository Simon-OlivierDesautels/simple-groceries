<script>
	import { setRecipe, getRecipes, checkRecipe } from '$lib/helpers/cookie.js';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import { onMount } from 'svelte';
	import Add from '$lib/images/icon-add.svelte';
	import Remove from '$lib/images/icon-remove.svelte';

	/**
	 * @type {number}
	 */
	export let recipeId;
	export let classes = '';

	let canAdd = true;
	onMount(() => {
		canAdd = checkRecipe(recipeId);
	});
</script>

<button
	class="_btn {classes} {!canAdd ? '_btn--orange' : ''}"
	on:click={() => {
		setRecipe(recipeId);
		userRecipes.set(JSON.parse(getRecipes('recipes')));

		canAdd = checkRecipe(recipeId);
	}}
>
	{#if canAdd}
		<Add />
	{:else}
		<Remove />
	{/if}
</button>
