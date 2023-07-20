<script>
	import './app.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="app bg-black">
	<header>
		<ul>
			<li><a href="/recipes">Recipes link</a></li>
			<li><a href="/about" /></li>
		</ul>
	</header>
	<main>
		<slot />
	</main>
</div>
