<script>
    let {data} = $props()
    const persons = data.person;
</script>
 
{#each persons as person}
    {person.name}<br>
{/each}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
