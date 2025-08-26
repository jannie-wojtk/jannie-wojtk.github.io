function buildRecipeList(recipes) {
    const parser = new DOMParser();
	const recipeTemplate = `
	  <dl>
		${recipes.map(recipe => `
			<dt>
				${recipe.Name}${!recipe.HasGluten() && `<span class="gluten-free">GF</span>`}
			</dt>
			<dd>${recipe.GetIngredientsString()}</dd>	  
		`).join('')}
	  </dl>
	`;
	const recipeTemplateDocument = parser.parseFromString(recipeTemplate, 'text/html');
	
	return recipeTemplateDocument.body;
}

// Render
const renderedRecipes = buildRecipeList(window.SupplyChainRecipes);

document.querySelector('#content').appendChild(renderedRecipes);
