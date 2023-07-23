import { apiKey, apiUrl } from '$env/static/private';

export const addRecipeToList = {
    addRecipeToList: async ({ request }) => {
        const data = await request.formData();
        const id = data.get('id');
        console.log(id);
        const res = await fetch(`${apiUrl}/recipes/${id}/information`, {
            headers: { 'x-api-key': apiKey }
        });
        return await res.json();

    },
}