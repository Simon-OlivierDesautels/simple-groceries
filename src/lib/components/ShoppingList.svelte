<script>
	import CollapsableRecipe from '$lib/components/CollapsableRecipe.svelte';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import RemainingList from './RemainingList.svelte';
	import { fly } from 'svelte/transition';

	/**
	 * @type {boolean}
	 */
	let isShoppingListOpen;
	const sorting = {
		recipes: 'recipes',
		remaining: 'remaining'
	};

	let currentSorting = sorting.recipes;
</script>

<div class="{!isShoppingListOpen ? 'flex' : 'hidden'} h-full w-full pt-16">
	<div class="_wrapper !my-0">
		<h3 class="text-3xl italic text-white">Shopping list</h3>
		<div class="py-5">
			<svg
				width="337"
				height="2"
				viewBox="0 0 337 2"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 1H336" stroke="#979EA6" stroke-linecap="round" stroke-dasharray="8 8" />
			</svg>
		</div>

		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2">
				<span class="text-white">Sort by</span>
				<svg
					width="11"
					height="13"
					viewBox="0 0 11 13"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.89604 0.457663C5.2532 0.187018 5.7468 0.187018 6.10396 0.457662L10.0568 3.45298C10.8207 4.03188 10.4113 5.25 9.4528 5.25H1.5472C0.588695 5.25 0.1793 4.03188 0.943244 3.45298L4.89604 0.457663Z"
						fill="#D9D9D9"
					/>
					<path
						d="M6.15465 12.4331C5.77888 12.7585 5.22112 12.7585 4.84535 12.4331L0.599368 8.75593C-0.100536 8.14979 0.328137 7 1.25402 7L9.74598 7C10.6719 7 11.1005 8.1498 10.4006 8.75593L6.15465 12.4331Z"
						fill="#D9D9D9"
					/>
				</svg>
			</div>
			<div class="flex select-none gap-2 pb-5">
				<button
					class="_btn _btn--rounded h-fit py-2 px-4  {currentSorting === sorting.recipes
						? '_btn--orange'
						: ''}"
					on:click={() => {
						currentSorting = sorting.recipes;
					}}
				>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span>By recipes</span>
				</button>
				<button
					class="_btn _btn--rounded py-2 px-4 {currentSorting === sorting.remaining
						? '_btn--orange'
						: ''}"
					on:click={() => {
						currentSorting = sorting.remaining;
					}}
				>
					<span class="">By remaining</span>
				</button>
			</div>

			<div class="relative">
				{#if currentSorting === sorting.recipes}
					<div
						class="absolute top-0 flex w-full flex-col gap-3 pb-8"
						in:fly={{ x: -200, duration: 250 }}
						out:fly={{ x: -200, duration: 250 }}
					>
						{#each $userRecipes as recipe}
							<CollapsableRecipe bind:recipe />
						{/each}
					</div>
				{:else}
					<div
						class="absolute top-0 w-full "
						in:fly={{ x: 200, duration: 250 }}
						out:fly={{ x: 200, duration: 250 }}
					>
						<RemainingList />
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
