<script>
    let {data} = $props()
</script>

<svelte:head><title>{data.person.name}</title></svelte:head>

<article>


    <h2>{ data.person.name }</h2>

        <dl>

            {#if data.person.birthdate}
            <dt>Geboortedatum</dt>
            <dd>{data.person.birthdate}</dd>
            {:else}
            <dt>Geboortedatum</dt>
            <dd>nog niet geboren</dd>
            {/if}

            <dt>Lengte</dt>
            <dd>{data.person.length} cm</dd>

            <dt>Woonplaats</dt>
            <dd>{data.person.residency}</dd>
        </dl>

        <h3>Bio</h3>
            <p>{data.person.bio}</p>

            {#if data.person.mugshot}
                <img class="image" src="https://fdnd.directus.app/assets/{data.person.mugshot}" alt="{data.person.name}" width="300" height="400">
            {:else}
                <img class="image" src="/static/vraagtekenimage.jpeg" alt="afbeelding van {data.person.name} niet beschikbaar" width="300" height="400">
            {/if}

</article>



<style>
    article {
        font-family: boldonse, sans-serif ;
        padding: 1rem;
        margin-inline: auto;    

        @media (width > 750px ) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
        "naam biokop"
        "lijst bio"
        "lijst foto";
    }

        @media (width > 1150px ) {
        display: grid;
        grid-template-columns: 1fr  1fr 1fr;
        grid-template-areas: 
        "naam biokop foto"
        "lijst bio foto"
        "lijst bio foto";
    }

    }

    img {
        grid-area: foto;
        display: block;
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
    }
    
    h2 {
        grid-area: naam;
		font-size: clamp(1.4rem, 9vw, 2.5rem);	
    }

    dl {
        grid-area: lijst;
		font-size: clamp(1rem, 5vw, 2rem);	
    }

    dt {
        font-weight: bold;
        margin: 1rem 0 ;
    }

    dd  {
        font-size:smaller;
        margin: 0 0 1.5rem;
    }

    h3 {
    grid-area: biokop;
    font-weight: bold;
    font-size: clamp(1.4rem, 5vw, 2rem);	    
    margin: 2rem 0 1rem  0;
    }

    p {
        grid-area: bio;
        font-style: oblique;
        margin: 0 0 2rem;
        max-width: 60ch;
    }

    
</style>