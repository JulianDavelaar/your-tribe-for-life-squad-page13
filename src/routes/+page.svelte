<script>
    import {zoekstatus} from '$lib/search.svelte.js';

    let {data} = $props()

    const persons = data.person;
    let sorteerVan = $state('az');

    let gefilterdePersonen = $derived(
        persons
        .filter((person) =>
            person.name.toLowerCase().includes(zoekstatus.term.toLowerCase())
        )
        .sort((a, b) =>
            sorteerVan === 'az'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        )
    );

    
</script>

<svelte:head><title>Hoofdpagina</title></svelte:head>


<h3>Sorteren van  
    <!--class:actief={voorwaarde} is Svelte's ingebouwde manier om een class conditioneel toe te voegen -->
    <button class:actief={sorteerVan === 'az'} onclick={() => sorteerVan = 'az'}>A-Z</button>
    <button class:actief={sorteerVan === 'za'} onclick={() => sorteerVan = 'za'}>Z-A</button>
</h3>
<main>
        <h3>Sorteren van  
            <!--class:actief={voorwaarde} is Svelte's ingebouwde manier om een class conditioneel toe te voegen -->
            <button class:actief={sorteerVan === 'az'} onclick={() => sorteerVan = 'az'}>A-Z</button>
            <button class:actief={sorteerVan === 'za'} onclick={() => sorteerVan = 'za'}>Z-A</button>
        </h3>

        {#if gefilterdePersonen.length === 0}
            <p class="geen-resulaten">Geen resultaten gevonden</p>
        {/if}    

    <ul class="grid">
        {#each gefilterdePersonen as person}
            <li class="card">
                <a href="/student/{person.id}">
                    <h4>{person.name.split(' ')[0]}</h4>
                    <img src={person.mugshot ? `https://fdnd.directus.app/assets/${person.mugshot}?format=auto&width=500` : '/placeholder.jpg'} alt="{person.name}" />
                </a>
            </li>
        {/each}
    </ul>
</main>
<style>
    h3 {
        font-family: sans-serif;
        font-size: 1.5em;   
        text-transform: uppercase;
        font-weight: 400;
        margin-left: 2.7em;
    }
    .geen-resulaten {
        font-size: 0.8em;
        font-family: boldonse, sans-serif;
        margin: 3em 0em 0em 5em;
        text-transform: uppercase;
    }
    h4 {
        font-size: 1.3em;
        font-family: boldonse, sans-serif;
        text-transform: uppercase;
    }
    h4:hover {
        color: var(--rood);
        border-style: none;
    }

    button {
        background-color: var(--rood);
        color: var(--wit);
        padding: 0.5em 1em 0.5em 1em;
        border-style: none;
        font-size: 0.8em;
        cursor: pointer;
        transition: background-color 0.2s ease;
        
    }

    button:hover {
        background-color: var(--zwart);
    }

    button.actief {
        background-color: var(--zwart);
        /* horizontal-offset | vertical-offset | blur-radius | spread-radius | color */
        box-shadow: 2px 4px 8px 2px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);

    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        margin: 0 3em;  
        list-style: none;
        padding: 0;
    }
    .card {
        background-color: var(--creme);
        padding: 1rem;
        text-align: center;
    }
    .card img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 8px;

        animation: fade-in linear;
        animation-timeline: view();
        animation-range: entry 0% entry 30%;
        scroll-behavior: smooth;
    }
    @media (prefers-reduced-motion: reduce) {
        .card img {
            animation: none;
            opacity: 1;
        }
    }

    /* animatie op de afbeeldingen studenten */
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    a {
        color: var(--zwart);
        text-decoration: none;
    }
</style>
