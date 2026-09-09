<script>
	import favicon from '$lib/assets/favicon.svg';
	import { zoekstatus } from '$lib/search.svelte';

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

		<!-- ZOEKBALK -->
		<div class="zoekbalk">
			<form role="search">
				<input
					type="search"
					id="zoek"
					placeholder="Zoek op naam..."
					bind:value={zoekstatus.term} 
				/>
				<!-- bind:value={zoekstatus.term} zegt tegen Svelte: "koppel de waarde van dit invoerveld direct aan mijn variabele zoekstatus.term -->
			</form>
		</div>
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
			@media (width < 600px) {
				display: flex;
				flex-direction: column;
            }
		}
		h1 {
			font-family: boldonse;
			font-size: clamp(2.4rem, 3.87vw, 7rem);	
			text-transform: uppercase;
			margin: 0em;
		}
		h2 {
			font-family: sans-serif;
			font-size: clamp(1.1rem, 2.87vw, 1.5rem);	
			text-transform: uppercase;
			font-weight: 400;
			margin-bottom: 1.2em;
			margin-top: 1em;
		}
		.zoekbalk {
			font-family: sans-serif;
			margin: 0;
			font-weight: 400;
			margin-bottom: 1.2em;
			input {
				background-color: var(--creme);
				padding: 0.5em;
				border-color: var(--rood);
			}
		}
		span {
			background-color: var(--rood);
			color: var(--wit);
			padding: 0.1em 0.7em;
		}
	}
</style>