
export const formatIngredients = (list) => {
    console.log(list);

    list.forEach(ingredient => {
        ingredient["completed"] = false;
    });
    return list;
}