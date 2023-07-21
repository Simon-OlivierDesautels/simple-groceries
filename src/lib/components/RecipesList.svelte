<script>
	import AddButton from '$lib/components/AddButton.svelte';

	/**
	 * @type {any}
	 */
	export let recipes;
</script>

<ul class="flex flex-col gap-4">
	{#each recipes as recipe}
		<li class="border-l-neutral-200 flex flex-col py-4 px-2">
			<div class="flex items-center justify-between gap-6 gap-2  ">
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
				<AddButton recipeId={recipe.id} classes="_btn--rounded" />
			</div>
		</li>
	{/each}
</ul>
