import { apiKey, apiUrl } from '$env/static/private';
import { addRecipeToList } from '$lib/helpers/globalActions.js';

export const load = async () => {
	const GetRecipes = async () => {
		const res = await fetch(`${apiUrl}/recipes/complexSearch?number=10`, {
			headers: { 'x-api-key': apiKey }
		});
		return await res.json();
	};
	return {};
	// If you want actual data from the API
	// return { recipes: GetRecipes() };
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
	...addRecipeToList,
};
