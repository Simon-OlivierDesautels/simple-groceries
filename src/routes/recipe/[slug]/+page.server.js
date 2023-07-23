import { apiKey, apiUrl } from '$env/static/private';
import { addRecipeToList } from '$lib/helpers/globalActions.js';


/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	const GetRecipe = async () => {
		const res = await fetch(`${apiUrl}/recipes/${params.slug}/information`, {
			headers: { 'x-api-key': apiKey }
		});
		return await res.json();
	};
	console.log(`${apiUrl}/recipes/complexSearch?number=10`);
	return { recipe: GetRecipe() };
};

export const actions = {
	// fetchShoppingList: async ({ request }) => {
	// 	const data = await request.formData();
	// 	const recipesList = data.get('recipes');
	// 	console.log(recipesList);
	// 	// const headers = await getApiHeader();
	// 	// const res = await fetch(`${API_URL()}/site_page/${id}/`, { headers: headers });
	// 	// const output = await res.json();
	// 	// return output;
	// },
	...addRecipeToList,
};
