<script>
	import CollapsableRecipe from '$lib/components/CollapsableRecipe.svelte';
	import { userRecipes } from '$lib/stores/user_recipes.js';

	/**
	 * @type {boolean}
	 */
	let isShoppingListOpen;
	let currentUserRecipes;

	userRecipes.subscribe((value) => {
		currentUserRecipes = value;
	});
	// userRecipes.update(['ssss']);
</script>

<!-- {userRecipes} -->
<div class="{!isShoppingListOpen ? 'flex' : 'hidden'} h-ful w-full pt-16">
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

		<div class="flex flex-col gap-3">
			<span class="text-white">Sort by</span>
			<div class="flex gap-2 pb-7">
				<button class="_btn _btn--rounded _btn--orange h-fit py-1.5 px-4">
					<span class="">By recipes</span>
				</button>
				<button class="_btn _btn--rounded py-1.5 px-4">
					<span class="">By remaining</span>
				</button>
			</div>

			<div class="flex flex-col gap-3">
				<CollapsableRecipe />
				<CollapsableRecipe />
				<CollapsableRecipe />
				<!-- {#each currentUserRecipes as recipe}{/each} -->
			</div>
		</div>
	</div>
</div>
