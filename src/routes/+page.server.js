import { apiKey, apiUrl } from '$env/static/private';

export const load = async () => {
	const GetRecipes = async () => {
		const res = await fetch(`${apiUrl}/recipes/complexSearch?number=10`, {
			headers: { 'x-api-key': apiKey }
		});
		return await res.json();
	};
	console.log(`${apiUrl}/recipes/complexSearch?number=10`);
	return {};
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
};
