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
                <h4>{person.name}</h4>
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
        font-family: boldonse;
        text-transform: uppercase;
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
</style>
