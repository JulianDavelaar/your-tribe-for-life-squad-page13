<script>
    let {data} = $props()
    const persons = data.person;
</script>

<h3>Sorteren van 
    <button>A-Z</button>
    <button>Z-A</button>
</h3>

<ul class="grid">
    {#each persons as person}
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
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

            animation: fade-in linear;
            animation-timeline: view();
            animation-range: entry 0% entry 30%;
            scroll-behavior: smooth;
            @media(prefers-reduced-motion: reduce) {
                animation: none;
                opacity: 1;
            }
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
