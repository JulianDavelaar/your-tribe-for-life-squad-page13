<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<div class="header-content">
		<section>
			<h1>Squadpage <span>FDND</span></h1>
			<h2>Tweedejaars studenten 26/27</h2>
		</section>

		<section class="zoekbalk">
			<h3>Zoeken...</h3>
		</section>
	</div>

	<hr>
</header>

{@render children()}

<style>
	header {
        border-bottom: 2px;
		margin: 4em 4em 2em 4em;

		.header-content {
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
		}
		h1 {
			font-family: boldonse;
			font-size: 5em;	
			text-transform: uppercase;
			margin: 0em;
		}
		h2 {
			font-family: sans-serif;
			font-size: 1.5em;	
			text-transform: uppercase;
			font-weight: 400;
			margin-bottom: 1.2em;
		}
		.zoekbalk {
			font-family: sans-serif;
			margin: 0;
			font-weight: 400;
			margin-bottom: 1.2em;
		}
		span {
			background-color: var(--rood);
			color: var(--wit);
			padding: 0.1em 0.7em 0.1em 0.7em;
		}
	}
</style>