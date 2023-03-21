<script>
	import { dummyRecipes } from '$lib/helpers/dummyData';

	export let data;
	let recipes = dummyRecipes.results;
	console.log(recipes);
</script>

<ul class="flex flex-col gap-4">
	{#each recipes as recipe}
		<li class="flex flex-col border-b-2 border-l-neutral-200 py-4 px-2">
			<span class="flex items-end gap-4 pb-4">
				<img class="aspect-square w-24 rounded-sm object-cover" src={recipe.image} alt="" />
				<span class="flex w-full flex-col gap-2">
					<p class="text text-right">{recipe.title}</p>
					<span class="ml-auto flex gap-4">
						<a
							href={`recipe/${recipe.id}`}
							alt={`${recipe.title}`}
							class="_btn _btn--secondary ml-auto">See recipe</a
						>
						<button class="_btn ml-auto">Add</button>
					</span>
				</span>
			</span>
		</li>
	{/each}
</ul>
