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

<Footer />
