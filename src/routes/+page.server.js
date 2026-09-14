export async function load({ params, fetch }) {
    const res = await fetch("https://fdnd.directus.app/items/person?fields=*&filter[squads][squad_id][cohort][_eq]=2627");

    if (!res.ok) {
    throw error('Er ging iets mis bij het ophalen van de data');
    }

    const data = await res.json();

    return {
        person: data.data
    };
} 