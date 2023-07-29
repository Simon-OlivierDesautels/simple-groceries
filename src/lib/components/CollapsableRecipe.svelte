<script>
	// @ts-nocheck
	import { CollapsibleCard } from 'svelte-collapsible';
	import IngredientCheckbox from '$lib/components/IngredientCheckbox.svelte';
	import { onMount } from 'svelte';
	import { flip } from 'svelte/animate';
	import { send, receive } from '$lib/helpers/transitions.js';
	import RecipesList from './RecipesList.svelte';
	export let recipe;
	let isRecipeCompleted;
	let isOpen = false;

	let verifyRecipeCompletion = () => {
		let numOfCompletedIngredient = recipe.ingredients.filter(function (entry) {
			return entry.completed === true;
		}).length;
		numOfCompletedIngredient === recipe.ingredients.length
			? (isRecipeCompleted = true)
			: (isRecipeCompleted = false);

		if (isRecipeCompleted) {
			isOpen = false;
		}
	};

	onMount(() => {
		verifyRecipeCompletion();
	});
</script>

<div class="_card-collapse  rounded-xl bg-black-light">
	<CollapsibleCard bind:open={isOpen}>
		<div slot="header" class="flex cursor-pointer items-center justify-between px-6 py-4 ">
			<span
				class="_title  w-full overflow-hidden  text-ellipsis whitespace-nowrap pr-2 text-left text-xl font-bold italic text-white {isRecipeCompleted
					? '!text-grey line-through'
					: ''}">{recipe.title}</span
			>

			<div class="flex items-center gap-3">
				<div
					class="_ingredient-counter flex items-center justify-center rounded-full bg-black py-1 px-4 transition-all duration-300 
					{isRecipeCompleted ? '_btn--orange' : ''}"
				>
					<span class=" my-auto text-sm text-grey-light "
						>{recipe.ingredients.filter(function (entry) {
							return entry.completed === true;
						}).length}/{recipe.ingredients.length}</span
					>
				</div>
				<div class="{isOpen ? 'rotate-180' : 'rotate-0'} transition-all duration-150">
					<svg
						width="18"
						height="12"
						viewBox="0 0 18 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8.65549 10.9212L8.84368 10.458L8.65549 10.9212C8.7906 10.9761 8.93128 11 9.07139 11C9.2115 11 9.35219 10.9761 9.4873 10.9212C9.63614 10.8607 9.76017 10.7654 9.8624 10.6616L17.1285 3.28197C17.3792 3.02737 17.5 2.70554 17.5 2.35299C17.5 1.98746 17.3634 1.66257 17.1078 1.40299L16.7516 1.75379L17.1078 1.40299C16.8676 1.15901 16.5648 1.02412 16.2243 1.00251C15.8356 0.977828 15.4996 1.13531 15.236 1.40299L9.07139 7.66387L2.90679 1.40299L2.55051 1.7538L2.90679 1.40299C2.65104 1.14326 2.32757 1.0015 1.96052 1.0015C1.59347 1.0015 1.27 1.14326 1.01425 1.40299L1.37054 1.7538L1.01425 1.40299C0.760612 1.66059 0.642822 1.9875 0.642822 2.34248C0.642822 2.69747 0.760612 3.02437 1.01425 3.28197L8.28039 10.6616C8.38262 10.7654 8.50665 10.8607 8.65549 10.9212Z"
							stroke="white"
						/>
					</svg>
				</div>
			</div>
		</div>

		<ul slot="body" class="flex flex-col gap-4 px-6 py-4">
			<!-- {#each Object.keys(recipe.ingredients) as key} -->
			{#each recipe.ingredients.filter((t) => !t.completed) as ingredient, index (ingredient)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore missing-declaration -->
				<li
					on:click={() => {
						verifyRecipeCompletion();
					}}
					in:receive={{ key: ingredient.id }}
					out:send={{ key: ingredient.id }}
					animate:flip
				>
					<IngredientCheckbox bind:isCompleted={ingredient.completed} bind:recipe bind:ingredient />
				</li>
			{/each}

			{#each recipe.ingredients.filter((t) => t.completed) as ingredient, index (ingredient)}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore missing-declaration -->
				<li
					on:click={() => {
						verifyRecipeCompletion();
					}}
					in:receive={{ key: ingredient.id }}
					out:send={{ key: ingredient.id }}
					animate:flip
				>
					<IngredientCheckbox bind:isCompleted={ingredient.completed} bind:recipe bind:ingredient />
				</li>
			{/each}
		</ul>
		<a href="recipe/{recipe.id}" target="_blank" rel="noopener noreferrer">
			<span>See details</span>
		</a>
	</CollapsibleCard>
</div>
