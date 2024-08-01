function buildRecipeList(recipes) {
    const ingredientsDelimiter = ', ';
    const descriptionListElement = document.createElement('dl');
    
    recipes.forEach((recipe) => {
        console.log(recipe.Name);
        const recipeTitleElement = document.createElement('dt');
        const recipeDescriptionElement = document.createElement('dd');
        const recipeDescriptionText =
            recipe.Ingredients.slice(0, -1).map(x => x.Name).join(ingredientsDelimiter)
            + ingredientsDelimiter
            + ' and '
            + recipe.Ingredients.slice(-1).map(x => x.Name);
        
        recipeTitleElement.textContent = recipe.Name;
        recipeDescriptionElement.textContent =  recipeDescriptionText;
        
        descriptionListElement.appendChild(recipeTitleElement);
        descriptionListElement.appendChild(recipeDescriptionElement);
    });
    
    return descriptionListElement;
}

// Render
const currentRecipeList = Object.values(window.Recipes);

document.querySelector('#content').appendChild(buildRecipeList(currentRecipeList));