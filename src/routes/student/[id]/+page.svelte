<script>
    let {data} = $props()
</script>

<svelte:head><title>{data.person.name}</title></svelte:head>

<article class="parent">


    <h1 class="name">{ data.person.name }</h1>

        <dl class="list">

            {#if data.person.birthdate}
            <dt>Geboortedatum</dt>
            <dd>{data.person.birthdate}</dd>
            {:else}
            <dd>nog niet geboren</dd>
            {/if}

            <dt>Lengte</dt>
            <dd>{data.person.length} cm</dd>

            <dt>Woonplaats</dt>
            <dd>{data.person.residency}</dd>
        </dl>

    <p class="bio">{data.person.bio}</p>

        <img class="image" src="https://fdnd.directus.app/assets/{data.person.mugshot}" alt="{data.person.name}" width="250" height="200">
</article>



<style>
    .parent {
    display: grid;
    grid-template-columns: 200px 200px auto;
    grid-column-gap: 0px;
    }

        .name { grid-area: 1 / 1 / 2 / 2; }
        .list { grid-area: 2 / 1 / 3 / 2; }
        .bio { grid-area: 1 / 2 / 2 / 3; }
        .image { grid-area: 2 / 3 / 3 / 4; }    

    img {
        height: 300px;
        width: auto;
    }
    
    .name {
        font-size: 3em;
    }

    .list {
        font-size: 2em;
    }

    
</style>