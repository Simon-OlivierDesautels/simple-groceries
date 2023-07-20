import { endOfWeek } from 'date-fns'
import { addDays } from 'date-fns';

/**
 * @param {any} value
 */
export function setRecipe(value) {
    let currentRecipes = JSON.parse(getRecipes("recipes"));
    currentRecipes.push(value)


    var recipes = currentRecipes.filter(function (value, index, self) {
        return self.indexOf(value) === index && self.lastIndexOf(value) === index;
    });

    // Get the current date
    const currentDate = new Date();

    // Set the start of the week to Monday
    // const weekStart = addDays(currentDate, 1 - currentDate.getDay());

    // Calculate the end of the week (Sunday)
    const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });

    document.cookie = "recipes" + "=" + (JSON.stringify(recipes) || "") + ";expires=" + weekEnd.toUTCString() + "; path=/";

    // console.log(recipes);
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
 * @param {string} name
 */
export function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}