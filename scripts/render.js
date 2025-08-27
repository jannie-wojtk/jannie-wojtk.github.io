(function() {
	let ingredientFilters = [];

	refreshContent();

	function refreshContent() {
		const renderedRecipes = buildRecipeList(window.RecipeList.filter(x => ingredientFilters.length == 0 || x.Ingredients.some(y => hasIngredientInList(y, ingredientFilters))));
		const renderedIngredients = buildIngredientList(window.IngredientList);
		document.querySelector('#content').replaceChildren(renderedIngredients, renderedRecipes);
	}

	function buildRecipeList(recipes) {
		const parser = new DOMParser();
		const recipeTemplate = `
		  <div style="width: 800px;">${ingredientFilters.length > 0 ? `<span style="background: #f0f0f0; font-style: italic; padding: 5px;">Filtering by ${getIngredientsString(ingredientFilters, 'or', false)}</span>` : ``}<dl>
			${recipes.map(recipe => `
				<dt>
					${recipe.Name}${!recipe.HasGluten() ? `<span class="gluten-free">GF</span>` : ``}
				</dt>
				<dd>${getIngredientsString(recipe.Ingredients)}</dd>	  
			`).join('')}
		  </dl></div>
		`;
		
		return parser.parseFromString(recipeTemplate, 'text/html').body.children[0];
	}

	function getIngredientsString(list, andOr = 'and', hasBoldFilters = true) {
		var result = '';
		
		if(list.length === 1)
			result = getIngredientName(list[0], hasBoldFilters && hasIngredientInList(list[0], ingredientFilters));

		if(list.length === 2)
			result = `${getIngredientName(list[0], hasBoldFilters && hasIngredientInList(list[0], ingredientFilters))} ${andOr} ${getIngredientName(list[1], hasBoldFilters && hasIngredientInList(list[1], ingredientFilters))}`;
		
		if(list.length > 2) {
			let delimeter = ', ';
			let allButLast = list.slice(0, -1);
			let last = list.slice(-1);

			result = 
			  allButLast.map(x => getIngredientName(x, hasBoldFilters && hasIngredientInList(x, ingredientFilters))).join(delimeter)
				+ `${delimeter} ${andOr} ${getIngredientName(last[0], hasBoldFilters && hasIngredientInList(last[0], ingredientFilters))}`;
		}
		
		return result;
	}
	
	function hasIngredientInList(ingredient, list) {
		return !!(list.find(x => x.Name === ingredient.Name));
	}
	
	function getIngredientName(ingredient, isBold) {
		if(isBold) {
			return `<span><b>${ingredient.Name}</b></span>`;
		} else {
			return `<span>${ingredient.Name}</span>`;
		}
	}
	
	function buildIngredientList(ingredients) {
		const parser = new DOMParser();
		const ingredientTemplate = `
		  <ol style="list-style-type: none; padding-left: 0; width: 200px;">
			${ingredients.map(i => `
				<li><button onclick="window.AddIngredientFilter('${i.Name}');" style="background: none; border: 0; cursor: pointer; margin: 0; padding:0;">${i.Name}${!i.HasGluten ? ` <span class="gluten-free">GF</span>` : ``}</button></li>	  
			`).join('')}
		  </ol>
		`;
		
		return parser.parseFromString(ingredientTemplate, 'text/html').body.children[0];
	}
	
	window.AddIngredientFilter = function(ingredientName) {
		ingredientFilters = [...(new Set([...ingredientFilters, window.IngredientList.find(x => x.Name === ingredientName)]))].sort((a, b) => a.Name.localeCompare(b.Name));
		refreshContent();
	}
}());