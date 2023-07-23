import { apiKey, apiUrl } from '$env/static/private';
import { getRecipes } from '$lib/helpers/cookie';
import { addRecipeToList } from '$lib/helpers/globalActions.js';

const GetRecipes = async (recipes) => {
	const res = await fetch(`${apiUrl}/recipes/informationBulk?ids=${recipes}`, {
		headers: { 'x-api-key': apiKey },
	});
	// console.log(await res.json());
	return await res.json();
};


/** @type {import('../recipe/[slug]/$types').PageServerLoad} */
export const load = async ({ params, cookies }) => {
	let recipes = cookies.get("recipes");
	recipes = recipes.replace("[", "")
	recipes = recipes.replace("]", "")


	// console.log(`${apiUrl}/recipes/complexSearch?number=10`);
	// console.log(getRecipes()); 
	return { recipes: GetRecipes(recipes) };
};

export const actions = {
	fetchShoppingList: async ({ request }) => {
		const data = await request.formData();
		const recipesList = JSON.parse(data.get('recipes'));

		return await GetRecipes(recipesList);
	},
	...addRecipeToList,
};
