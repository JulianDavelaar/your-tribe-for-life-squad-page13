/** @type {import('./$types').PageLoad} */

export async function load({ params, fetch }) {
    const res = await fetch(`https://fdnd.directus.app/items/person/${params.id}`);
    const data = await res.json();

	return {	
		person: data.data
	};
}