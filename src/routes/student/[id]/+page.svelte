<script>
    let {data} = $props()
</script>

<svelte:head><title>{data.person.name}</title></svelte:head>

<article>


    <h1>{ data.person.name }</h1>

        <dl>

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

        <h2>Bio</h2>
            <p>{data.person.bio}</p>

        <img class="image" src="https://fdnd.directus.app/assets/{data.person.mugshot}" alt="{data.person.name}" width="300" height="400">
</article>



<style>
    article {
        font-family: boldonse, sans-serif ;
        padding: 1rem;
        max-width: 20rem;
        margin-inline: auto;    
    }

    img {
        display: block;
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }
    
    h1 {
		font-size: clamp(1.4rem, 9vw, 2.5rem);	
    }

    dl {
		font-size: clamp(1rem, 5vw, 2rem);	
    }

    dt {
        font-weight: bold;
        margin: 1rem 0 ;
    }

    dd  {
        margin: 0 0 1.5rem;
    }

    h2 {
    font-weight: bold;
    font-size: clamp(1.4rem, 5vw, 2rem);	    
    margin: 2rem 0 1rem  0;
    }

    p {
        font-style: oblique;
        margin: 0 0 2rem;
        max-width: 60ch;
    }




    
</style>