import { endOfWeek } from 'date-fns'
// import { addDays } from 'date-fns';
// import pako from 'pako';
/**
 * @param {any} value
 */
export function setRecipe(value) {
    // Get the current date
    const currentDate = new Date();

    // Set the start of the week to Monday
    // const weekStart = addDays(currentDate, 1 - currentDate.getDay());

    // Calculate the end of the week (Sunday)
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });

    let currentRecipes = [];

    if (localStorage.getItem("recipes") === null) localStorage.setItem("recipes", "[]")
    if (getRecipes("recipes") === "[]") document.cookie = 'recipes' + '=[];expires=' + weekEnd.toUTCString() + '; path=/';

    currentRecipes = JSON.parse(localStorage.getItem("recipes"));

    const index = currentRecipes.findIndex((obj) => obj.id === value.id);
    if (index !== -1) {
        currentRecipes.splice(index, 1);
        console.log("removed");
    } else {
        console.log(currentRecipes);
        currentRecipes.push(value)
        console.log(currentRecipes);
    }

    localStorage.setItem("recipes", JSON.stringify(currentRecipes));
    document.cookie = 'recipes' + '=' + JSON.stringify(currentRecipes.map((obj) => obj.id)) + ';expires=' + weekEnd.toUTCString() + '; path=/';
}


/**
 * @param {any} value
 */
export function setIngredientCompletion(recipeId, ingredientId, state) {
    let currentRecipes = JSON.parse(localStorage.getItem("recipes"));


    currentRecipes.find((x) => x.id === recipeId).ingredients.find((x) => x.id === ingredientId)["completed"] = state;
    // console.log(currentRecipes.find((x) => x.id === recipeId).ingredients.find((x) => x.id === ingredientId)["completed"]);
    localStorage.setItem("recipes", JSON.stringify(currentRecipes));
}

/**
 * @param {string} name
 * 
 * return {}
 */
export function getRecipes(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "[]";
}

/**
 * @param {number} id
 * 
 * @return {boolean}
 */
export function checkRecipe(id) {
    if (localStorage.getItem("recipes") === null) localStorage.setItem("recipes", "[]")
    let recipes = JSON.parse(localStorage.getItem("recipes"));

    const index = recipes.findIndex((obj) => obj.id === id);
    if (index !== -1) return false;
    else return true;
}

/**
 * @param {string} name
 */
export function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}