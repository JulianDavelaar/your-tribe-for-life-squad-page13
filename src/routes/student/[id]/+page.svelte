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

<main>
    <div class="pijltje-terug">
        <a href="/">
            <svg class="pijltje-terug" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <title>Pijtlje terug</title> 
            <path d="M12.0713 18.6604L11.0308 19.6771C10.5902 20.1076 9.8778 20.1076 9.44191 19.6771L0.330432 10.7786C-0.110144 10.3481 -0.110144 9.65194 0.330432 9.22601L9.44191 0.322876C9.88249 -0.107625 10.5949 -0.107625 11.0308 0.322876L12.0713 1.33959C12.5166 1.77467 12.5072 2.48454 12.0526 2.91046L6.40475 8.16808H19.8751C20.4985 8.16808 21 8.65812 21 9.26723V10.7328C21 11.3419 20.4985 11.8319 19.8751 11.8319H6.40475L12.0526 17.0895C12.5119 17.5155 12.5213 18.2253 12.0713 18.6604Z" fill="currentColor"/>
            </svg>

            <p>Terug</p>
        </a>
    </div>

    <article>
        <h1>{ data.person.name }</h1>

            <dl>
                {#if data.person.birthdate}
                <dt>Geboortedatum</dt>
                <dd>{data.person.birthdate}</dd>
                {:else}
                <dt>Geboortedatum</dt>
                <dd>nog niet geboren</dd>
                {/if}

                {#if data.person.length}
                <dt>Lengte</dt>
                <dd>{data.person.length} cm</dd>
                {:else}
                <dt>Lengte</dt>
                <dd>N.V.T.</dd>
                {/if}

                {#if data.person.residency}
                <dt>Woonplaats</dt>
                <dd>{data.person.residency}</dd>
                {:else}
                <dt>Woonplaats</dt>
                <dd>N.V.T.</dd>
                {/if}
            </dl>

            <h2>Bio</h2>
                <p>{@html data.person.bio}</p>

            <img class="image" src="https://fdnd.directus.app/assets/{data.person.mugshot}" alt="{data.person.name}" width="300" height="400">
    </article>
</main>


<style>
    .pijltje-terug {
        font-family: boldonse;
        gap: 1rem;
        margin-left: 2rem;
    }
    .pijltje-terug p {
        margin: 0;
    }
    .pijltje-terug a {
        display: inline-flex;
        align-items: center;
        color: var(--zwart);
        text-decoration: none;
        gap: 1rem;
    }
    .pijltje-terug a:hover {
        text-decoration: underline;
    }
    .pijltje-terug svg {
        background-color: var(--rood);
        color: var(--wit);
        padding: 0.5rem;
    }
    .pijltje-terug svg:hover {
        background-color: var(--zwart);
    }
    article {
        font-family: boldonse, sans-serif;
        padding: 1rem;
        margin-inline: auto;   
        margin-left: 3rem;
        margin-right: 3rem;
        @media (width > 750px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: 
                "naam biokop"
                "lijst bio"
                "lijst foto";
        }   
        @media (width > 1150px) {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
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
    h1 {
        grid-area: naam;
        font-size: clamp(1.4rem, 9vw, 2.5rem);	
    }