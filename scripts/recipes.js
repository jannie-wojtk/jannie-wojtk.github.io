// Load after ingredients.js
class Recipe {
    Name = '';
    Description = '';
    Ingredients = [];
    
    constructor(name, description, ingredients) {
        this.Name = name;
        this.Description = description;
        this.Ingredients = ingredients;
    }
    
    HasGluten() {
        return this.Ingredients.some(x => x.HasGluten);
    }
    
    HasDairy() {
        return this.Ingredients.some(x => x.HasDairy);
    }
}

window.Recipes = {
    ItalianSausageWhiteSauceKalePasta: new Recipe (
        'Italian Sausage Farfalle Alfredo',
        'Hot Italian Sausage baked and sliced before being added to simmering alfredo sauce and farfalle.',
        [Ingredients.ItalianSausage, Ingredients.OliveOil, Ingredients.AlfredoSauce, Ingredients.FarfallePasta, Ingredients.Kale]
    ),
    Chili: new Recipe (
        'Chili',
        '',
        [Ingredients.GroundTurkey, Ingredients.PortabellaMushrooms, Ingredients.MushroomBroth, Ingredients.BeefBroth, Ingredients.SoySauce, Ingredients.OliveOil, Ingredients.CrushedTomato, Ingredients.Onion, Ingredients.JalapenoPepper, Ingredients.HabaneroPepper, Ingredients.PoblanoPepper, Ingredients.BlackBeans, Ingredients.KidneyBeans, Ingredients.TortillaChips]
    ),
    BerryParfait: new Recipe (
        'Berry Parfait',
        '',
        [Ingredients.PlainGreekYogurt, Ingredients.Berries, Ingredients.MapleSyrup]
    ),
    TunaCaesarSalad: new Recipe(
        'Tuna Caesar Salad',
        '',
        [Ingredients.Tuna, Ingredients.CherryTomato, Ingredients.Lettuce, Ingredients.CaesarDressing]
    ),
    GarlicPotatoSoup: new Recipe(
        'Garlic Potato Soup',
        '',
        [Ingredients.Garlic, Ingredients.Potato, Ingredients.ChickenBroth]
    ),
    ChickenAlfredo: new Recipe(
        'Chicken Alfredo',
        '',
        [Ingredients.Chicken, Ingredients.SesameOil, Ingredients.AlfredoSauce, Ingredients.Brocolli, Ingredients.Pasta]
    ),
    ChickenStirFry: new Recipe(
        'Chicken Stir Fry',
        '',
        [Ingredients.Chicken, Ingredients.SesameOil, Ingredients.RedBellPepper, Ingredients.Onion, Ingredients.Garlic, Ingredients.Ginger, Ingredients.Brocolli, Ingredients.Rice]
    ),
    TofuStirFry: new Recipe(
        'Tofu Stir Fry',
        '',
        [Ingredients.Tofu, Ingredients.SesameOil, Ingredients.RedBellPepper, Ingredients.Onion, Ingredients.Garlic, Ingredients.Ginger, Ingredients.Brocolli, Ingredients.Rice]
    ),
    SalmonBrusselSprouts: new Recipe(
        'Baked Salmon',
        '',
        [Ingredients.Salmon, Ingredients.OliveOil, Ingredients.BrusselSprouts]
    ),
    Steak:  new Recipe(
        'Sirloin Steak and Baked Potato',
        '',
        [Ingredients.Steak, Ingredients.Potato, Ingredients.Cauliflower]
    ),
    BeefMushroomSoup: new Recipe(
        'Beef and Mushroom Soup',
        '',
        [Ingredients.Beef, Ingredients.PortabellaMushrooms, Ingredients.BeefBroth, Ingredients.MushroomBroth, Ingredients.Onion, Ingredients.Carrot, Ingredients.Barley]
    ),
    ShepherdstownEggs: new Recipe(
        'Sheperdstown Eggs',
        '',
        [Ingredients.Quinoa, Ingredients.Kale, Ingredients.Eggs, Ingredients.VeggieSausage]
    ),
    FalafelPlatter: new Recipe(
        'Falafel Platter',
        '',
        [Ingredients.Falafel, Ingredients.Hummus, Ingredients.Cucumber, Ingredients.RedCabbage, Ingredients.Couscous]
    ),
    BlackBeanBurger: new Recipe(
        'Black Bean Burger with Fries',
        '',
        [Ingredients.BlackBeanBurger, Ingredients.Lettuce, Ingredients.Tomato, Ingredients.FrenchFries]
    ),
    PorkLoin: new Recipe(
        'Pork Loin',
        '',
        [Ingredients.PorkLoin, Ingredients.Potato, Ingredients.BrusselSprouts, Ingredients.Rice]
    ),
    SummertimeAndTheLivingIsEasySquashPizza: new Recipe(
        'Summertime and the Living is Easy Squash Pizza',
        'Vegetarian (not vegan)',
        [Ingredients.PizzaDough, Ingredients.Pesto, Ingredients.YellowZucchini, Ingredients.CherryTomato, Ingredients.OliveOil]
    ),
}

window.RecipeList = Object.values(window.Recipes).sort((a, b) => a.Name.localeCompare(b.Name));

window.SupplyChainRecipes = [
	Ingredients.Cucumber,
	Ingredients.Dill,
	Ingredients.Lettuce,
	Ingredients.NapaCabbage,
	Ingredients.SweetCorn,
	Ingredients.ShishitoPepper,
	Ingredients.LionsManeMushroom,
	Ingredients.Eggs
].map(i => 
    new Recipe(
	    `Something with ${i.Name}`,
		'',
		[i]
	)
);
