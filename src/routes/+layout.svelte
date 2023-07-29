<script>
	import './app.css';
	import './animations.css';
	import ShoppingList from '$lib/components/ShoppingList.svelte';
	import { onMount } from 'svelte';
	import { userRecipes } from '$lib/stores/user_recipes.js';
	import { browser } from '$app/environment';

	let isOpen = false;
	let isShoppingListOpen = false;
	let toggleMenu = () => (isOpen = !isOpen);
	let toggleShoppingList = () => (isShoppingListOpen = !isShoppingListOpen);

	$: if (browser) {
		document.body.classList.toggle('_noscroll', isOpen);
		console.log('here');
	}

	onMount(() => {
		userRecipes.set(JSON.parse(localStorage.getItem('recipes')));
		console.log('did it: ', $userRecipes);
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,400;1,700&family=Inter&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <div class="app min-h-screen bg-black"> -->
<header class="sticky top-0 z-50 h-16">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="_wrapper flex h-full items-center justify-end">
		<div
			class="cursor-pointer"
			on:click={() => {
				toggleMenu();
			}}
		>
			<svg
				width="34"
				height="10"
				viewBox="0 0 34 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M0 1H34" stroke="white" />
				<path d="M0 9H34" stroke="white" />
			</svg>
		</div>
	</div>
</header>
<div
	class="fixed top-0 left-0 z-40 h-screen w-screen overflow-y-scroll bg-black bg-opacity-75 backdrop-blur-md {isOpen
		? 'flex'
		: 'hidden'}"
>
	<ul class="_wrapper items-center {!isOpen ? 'flex' : 'hidden'} flex-col gap-8">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class="text-4xl text-white"
			on:click={() => {
				toggleMenu();
			}}
		>
			<a href="/">Recipes</a>
		</li>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class="text-4xl text-white"
			on:click={() => {
				toggleShoppingList();
			}}
		>
			<a href="#" on:click={() => {}}>Shopping list</a>
		</li>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class="text-4xl text-white"
			on:click={() => {
				toggleMenu();
			}}
		>
			<a href="/recipes">Your list</a>
		</li>
	</ul>
	<ShoppingList {isShoppingListOpen} />
</div>
<slot />
