<script>
	import { dummyRecipes } from '$lib/helpers/dummyData';
	import { setRecipe, getRecipes } from '$lib/helpers/cookie.js';
	import { userRecipes } from '$lib/stores/user_recipes.js';

	export let data;
	let recipes = dummyRecipes.results;
	console.log(recipes);
	let currentUserRecipes;

	userRecipes.subscribe((value) => {
		currentUserRecipes = value;
	});
</script>

<div class="_wrapper">
	<h1 class=" padding pb-1 text-5xl italic text-white">Recipes</h1>
	<h2 class="font-normal text-grey-light">Tell us what you want to eat</h2>
	<hr class="py-5" />

	<ul class="flex flex-col gap-4">
		{#each recipes as recipe}
			<li class="border-l-neutral-200 flex flex-col py-4 px-2">
				<div class="flex justify-between gap-6 gap-2 ">
					<a href={`recipe/${recipe.id}`} alt={`${recipe.title}`} class="min-w-0">
						<div class="flex gap-4">
							<img class="h-12 w-12 rounded-xl object-cover" src={recipe.image} alt="" />
							<span class="flex flex-col overflow-hidden text-ellipsis">
								<p class="color-white overflow-hidden text-ellipsis whitespace-nowrap text-lg">
									{recipe.title}
								</p>

								<p class="color-white overflow-hidden text-ellipsis whitespace-nowrap text-sm ">
									XXXg protein
								</p>
							</span>
						</div>
					</a>
					<button
						class="_btn _btn--rounded {recipe.id} {currentUserRecipes.includes(recipe.id)}"
						on:click={() => {
							setRecipe(recipe.id);
						}}
						>+
					</button>
				</div>
			</li>
		{/each}
	</ul>
</div>
