<script>
	import './app.css';
	import './animations.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- <div class="app min-h-screen bg-black"> -->
<header>
	<ul class="mb-14 flex justify-between">
		<li class="mb-2"><a href="/">Recipes</a></li>
		<li class=""><a href="/recipes">Your list</a></li>
		<li><a href="/about" /></li>
	</ul>
</header>
<slot />
<!-- </div> -->
