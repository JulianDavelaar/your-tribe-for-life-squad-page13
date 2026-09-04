<script>
    let {data} = $props()
    const persons = data.person;
</script>

<h1>Squadpage</h1>
<ul class="grid">
    {#each persons as person}
        <li class="card">
            <h2>{person.name}</h2>
            <img src={person.avatar ?? '/placeholder.jpg'} alt="{person.name}" />
            
        </li>
    {/each}
</ul>

<style>
    h1{
        display: flex;
        justify-self: center;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        /* gap: 1rem; */
        list-style: none;
        padding: 0;
    }

    .card {
        background-color: rgb(219, 210, 188);
        /* border-radius: 8px; */
        padding: 1rem;
        text-align: center;
    }

    .card img {
        width: 100%;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        border-radius: 8px;
    }
</style>