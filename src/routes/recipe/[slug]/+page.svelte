<script>
	import IngredientsTab from '$lib/components/RecipeTabs/IngredientsTab.svelte';
	import StepsTab from '$lib/components/RecipeTabs/StepsTab.svelte';
	import SummaryTab from '$lib/components/RecipeTabs/SummaryTab.svelte';
	import AddButton from '$lib/components/AddButton.svelte';
	import IconEarth from '$lib/images/icon-earth.svelte';

	export let data;
	let recipe = data.recipe;
	let currentTab = 0;

	let tabsList = [
		{ label: 'Ingredients', value: 0, component: IngredientsTab },
		{ label: 'Steps', value: 1, component: StepsTab },
		{ label: 'Summary', value: 2, component: SummaryTab }
	];

	/**
	 * @param {number} tab
	 */
	function changeTab(tab) {
		currentTab = tab;
	}
</script>

<div class="relative">
	<div class="_recipe-image">
		<img class="mb-8 h-72 w-full object-cover" src={recipe.image} alt="" />
	</div>
	<div class="absolute -bottom-4">
		<div class="_wrapper">
			<h1 class="mb-2 text-3xl font-semibold italic text-white">{recipe.title}</h1>
			<ul class="flex w-full justify-between">
				{#each tabsList as tab}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li
						class="_btn _btn--rounded px-4 {currentTab == tab.value ? '_btn--orange' : ''}"
						on:click={() => changeTab(tab.value)}
					>
						{tab.label}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
<div class="_wrapper">
	{#each tabsList as item}
		{#if currentTab == item.value}
			<div class="box">
				<svelte:component this={item.component} {recipe} />
			</div>
		{/if}
	{/each}
</div>

<div class="sticky bottom-5 h-full">
	<div class="_wrapper w-full">
		<div class="ml-auto flex w-fit gap-4">
			<a
				href={recipe.sourceUrl}
				target="_blank"
				class="_btn _btn--bigger inline-block w-full text-center"
			>
				<IconEarth />
			</a>
			<AddButton recipeId={recipe.id} classes={'_btn--bigger'} />
		</div>
	</div>
</div>
