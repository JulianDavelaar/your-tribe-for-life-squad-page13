<script>
	import favicon from '$lib/assets/favicon.svg';
	import { zoekstatus } from '$lib/search.svelte';
	import '../stylesheet.css';
    import Footer from '$lib/components/Footer.svelte'

	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />

{@render children()}

<style>
	header {
        border-bottom: solid 2px var(--zwart);
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
		a {
			color: var(--zwart);
			text-decoration: none;
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
<Footer />
