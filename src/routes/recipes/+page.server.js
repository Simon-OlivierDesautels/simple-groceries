import { apiKey, apiUrl } from '$env/static/private';

/** @type {import('../recipe/[slug]/$types').PageServerLoad} */
export const load = async ({ params, cookies }) => {
	let recipes = cookies.get("recipes");
	console.log(recipes);
	recipes = recipes.replace("[", "")
	recipes = recipes.replace("]", "")

	console.log(`${apiUrl}/recipes/informationBulk?ids=${recipes}`);
	const GetRecipes = async () => {
		const res = await fetch(`${apiUrl}/recipes/informationBulk?ids=${recipes}`, {
			headers: { 'x-api-key': apiKey },
		});
		// console.log(await res.json());
		return await res.json();
	};
	// console.log(`${apiUrl}/recipes/complexSearch?number=10`);
	return { recipes: GetRecipes() };
};

export const actions = {
	// requestSiteInfo: async ({ request }) => {
	// 	const data = await request.formData();
	// 	const id = data.get('id');
	// 	const headers = await getApiHeader();
	// 	const res = await fetch(`${API_URL()}/site_page/${id}/`, { headers: headers });
	// 	const output = await res.json();
	// 	return output;
	// },
};
