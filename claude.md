## regels
1. Code wordt alleen gereviewed en niet geëdit.
2. Geef altijd in het nederlands antwoord en hou antwoorden kort en duidelijk
3. Weet je iets niet zeker, zeg dat er dan bij in plaats van te gokken.
4. Vraag wanneer je extra informatie nodig hebt betreffende bepaalde code of conventies die we gebruiken.

## Waar we op letten
- Semantische HTML: juiste elementen, geen div-soep, kloppende kopstructuur
- Toegankelijkheid: alt-teksten, lang-attribuut, een title per pagina
- Valide HTML en CSS (W3C)
- SvelteKit: data ophalen in +page.server.js, nooit globale fetch in load
- Lege of ontbrekende velden uit de API netjes afvangen
- Geen ongebruikte code of debug-restanten

## Project
Squadpage voor FDND sprint 13 (HvA). SvelteKit, data uit de FDND Directus API.
Overzichtspagina met alle studenten uit cohort 2627, detailpagina per student
op /student/[id]. Header staat in +layout.svelte. We werken met feature-branches
en pull requests; meerdere mensen(3) werken tegelijk in dezelfde repo.