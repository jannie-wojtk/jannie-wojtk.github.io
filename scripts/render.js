function buildRecipeList(recipes) {
    const ingredientsDelimiter = ', ';
    const descriptionListElement = document.createElement('dl');
    
    recipes.forEach((recipe) => {
        console.log(recipe.Name);
        console.log(getFlagElements(recipe));
        const recipeTitleElement = document.createElement('dt');
        const recipeDescriptionElement = document.createElement('dd');
        const recipeDescriptionText =
            recipe.Ingredients.slice(0, -1).map(x => x.Name).join(ingredientsDelimiter)
            + ingredientsDelimiter
            + ' and '
            + recipe.Ingredients.slice(-1).map(x => x.Name);
        
        recipeTitleElement.textContent = recipe.Name;
        recipeDescriptionElement.textContent =  recipeDescriptionText;
        
        var flags = getFlagElements(recipe);
        for(var index in flags) {
            recipeTitleElement.appendChild(flags[index]);
        }
        
        descriptionListElement.appendChild(recipeTitleElement);
        descriptionListElement.appendChild(recipeDescriptionElement);
    });
    
    return descriptionListElement;
}

function getFlagElements(recipe) {
    const result = [];
    
    if(recipe.HasDairy()) {
        //result.push();
    }
    
    if(!recipe.HasGluten()) {
        result.push(getGlutenFreeFlag());
    }
    
    return result;
}

function getGlutenFreeFlag() {
    var element = document.createElement('span');
    element.classList.add('gluten-free');
    element.textContent = 'GF';
    
    return element;
}

/*

function buildRecipeIngredientList(ingredients) {
    
}

function groupIngredientsByTag(ingredients) {
    const groups = ['Grain', 'Protein', 'Vegetable', 'Spice', 'Oil', 'Broth'];
    var result = {};
    
    groups.forEach(x => result[x] = filterIngredientsByTag(ingredients, x));
    
    // { Spice: [...], Protein: [...], ... }
    return result;
}

function filterIngredientsByTag(ingredients, tag) {
    return ingredients.filter(x => x.HasTag(tag));
}

*/

// Render
const currentRecipeList = Object.values(window.Recipes);

document.querySelector('#content').appendChild(buildRecipeList(currentRecipeList));