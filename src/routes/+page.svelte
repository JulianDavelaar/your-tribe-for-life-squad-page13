<script>
    import {zoekstatus} from '$lib/search.svelte.js';

    let {data} = $props()

    const persons = data.person;

    let gefilterdePersonen = $derived(
        persons.filter((person) =>
            person.name.toLowerCase().includes(zoekstatus.term.toLowerCase())
        )
    );
</script>

<h3>Sorteren van 
    <button>A-Z</button>
    <button>Z-A</button>
</h3>

{#if gefilterdePersonen.length === 0}
    <p class="geen-resulaten">Geen resultaten gevonden</p>
{/if}    

<ul class="grid">
    {#each gefilterdePersonen as person}
        <li class="card">
            <a href="/student/{person.id}">
                <h4>{person.name.split(' ')[0]}</h4>
                <img src={person.avatar ?? '/placeholder.jpg'} alt="{person.name}" />
            </a>
        </li>
    {/each}
</ul>

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
        font-family: boldonse;
        text-transform: uppercase;

        &:hover {
            color: var(--rood);
            border-style: none;
        }
    }
    button {
        background-color: var(--rood);
        color: var(--wit);
        padding: 0.5em 1em 0.5em 1em;
        border-style: none;
        font-size: 0.8em;
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
        img {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            border-radius: 8px;
        }
    }
    a {
        color: var(--zwart);
        text-decoration: none;
    }
</style>
