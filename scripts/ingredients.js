// Load before recipes.js
const Tag = {
	Grain: 'Grain',
	Protein: 'Protein',
	Vegetable: 'Vegetable',
	Spice: 'Spice',
	Oil: 'Oil',
	Broth: 'Broth',
	Herb: 'Herb',
	Meat: 'Meat',
	Fish: 'Fish',
	Sauce: 'Sauce',
	Fruit: 'Fruit',
	Dairy: 'Dairy',
	Sweetner: 'Sweetner',
	Nut: 'Nut',
	Pasta: 'Pasta'
};

class Ingredient {
    Key = '';
    Name = '';
    HasDairy = true;
    HasGluten = true;
    Tags = [];
    
    constructor(name, hasDairy = true, hasGluten = true, tags = []) {
        this.Name = name;
        this.HasDairy = hasDairy;
        this.HasGluten = hasGluten;
        this.Tags = tags;
        
        // computed to reduce repetition
        this.Key = name.replaceAll(' ', '');
    }
    
    HasTag(tag) {
        return !!this.Tags.find(tag);
    }
}

var IngredientList = [
    new Ingredient("Alfredo Sauce", true, true, [Tag.Sauce]),
    new Ingredient("Barley", false, true, [Tag.Grain]),
    new Ingredient("Beef", false, false, [Tag.Protein, Tag.Meat]),
    new Ingredient("Beef Broth", false, false, [Tag.Broth, Tag.Meat]),
    new Ingredient("Berries", false, false, [Tag.Fruit]),
    new Ingredient("Black Bean Burger", false, true, [Tag.Protein]),
    new Ingredient("Black Beans", false, false, [Tag.Protein, Tag.Grain]),
    new Ingredient("Black Pepper", false, false, [Tag.Spice]),
    new Ingredient("Bok Choy", false, false, [Tag.Vegetable]),
    new Ingredient("Brocolli", false, false, [Tag.Vegetable]),
    new Ingredient("Brussel Sprouts", false, false, [Tag.Vegetable]),
    new Ingredient("Caesar Dressing", false, false, [Tag.Sauce, Tag.Dressing]),
    new Ingredient("Carrot", false, false, [Tag.Vegetable]),
    new Ingredient("Cauliflower", false, false, [Tag.Vegetable]),
    new Ingredient("Cherry Tomato", false, false, [Tag.Vegetable]),
    new Ingredient("Chicken", false, false, [Tag.Protein, Tag.Meat]),
    new Ingredient("Chicken Broth", false, true, [Tag.Broth, Tag.Meat]),
    new Ingredient("Chili Power", false, true, [Tag.Spice]),
    new Ingredient("Couscous", false, false, [Tag.Grain]),
    new Ingredient("Crushed Tomato", false, false, [Tag.Vegetable]),
    new Ingredient("Cucumber", false, false, [Tag.Vegetable]),
    new Ingredient("Cumin", false, false, [Tag.Spice]),
    new Ingredient("Dill", false, false, [Tag.Herb]),
    new Ingredient("Eggs", true, false, [Tag.Protein, Tag.Dairy]),
    new Ingredient("Falafel", false, true, [Tag.Protein, Tag.Grain]),
    new Ingredient("Farfalle Pasta", false, false, [Tag.Grain, Tag.Pasta]),
    new Ingredient("French Fries", false, true, [Tag.Vegetable]),
    new Ingredient("Garlic", false, false, [Tag.Spice, Tag.Vegetable]),
    new Ingredient("Ginger", false, false, [Tag.Spice, Tag.Vegetable]),
    new Ingredient("Ground Turkey", false, false, [Tag.Protein, Tag.Meat]),
    new Ingredient("Habanero Pepper", false, false, [Tag.Vegetable]),
    new Ingredient("Hoisin Sauce", false, true, [Tag.Sauce]),
    new Ingredient("Hummus", false, true, [Tag.Protein]),
    new Ingredient("Italian Sausage", false, true, [Tag.Protein, Tag.Meat]),
    new Ingredient("Jalapeno Pepper", false, false, [Tag.Vegetable]),
    new Ingredient("Kale", false, false, [Tag.Vegetable]),
    new Ingredient("Kidney Beans", false, false, [Tag.Protein, Tag.Grain]),
    new Ingredient("Lettuce", false, false, [Tag.Vegetable]),
    new Ingredient("Lions Mane Mushroom", false, false, [Tag.Protein]),
    new Ingredient("Maple Syrup", false, false, [Tag.Sweetner]),
    new Ingredient("Mushroom Broth", false, true, [Tag.Broth]),
    new Ingredient("Napa Cabbage", false, false, [Tag.Vegetable]),
    new Ingredient("Olive Oil", false, false, [Tag.Oil]),
    new Ingredient("Onion", false, false, [Tag.Vegetable]),
    new Ingredient("Pasta", false, true, [Tag.Grain]),
    new Ingredient("Pesto", false, false, [Tag.Sauce]),
    new Ingredient("Pizza Dough", true, true, [Tag.Grain]),
    new Ingredient("Plain Greek Yogurt", true, false, [Tag.Dairy]),
    new Ingredient("Poblano Pepper", false, false, [Tag.Vegetable]),
    new Ingredient("Pork", false, false, [Tag.Protein, Tag.Meat]),
    new Ingredient("Pork Loin", false, false, [Tag.Protein, Tag.Meat]),
    new Ingredient("Portabella Mushrooms", false, false, [Tag.Protein]),
    new Ingredient("Potato", false, false, [Tag.Vegetable]),
    new Ingredient("Quinoa", false, false, [Tag.Grain]),
    new Ingredient("Red Bell Pepper", false, false, [Tag.Vegetable]),
    new Ingredient("Red Cabbage", false, false, [Tag.Vegetable]),
    new Ingredient("Red Pepper Flakes", false, false, [Tag.Spice]),
    new Ingredient("Rice", false, false, [Tag.Grain]),
    new Ingredient("Salmon", false, false, [Tag.Protein, Tag.Meat, Tag.Fish]),
    new Ingredient("Salt", false, false, [Tag.Spice]),
    new Ingredient("Sesame Oil", false, false, [Tag.Oil, Tag.Nut]),
    new Ingredient("Shishito Pepper", false, false, [Tag.Vegetable]),
    new Ingredient("Soy Sauce", false, true, [Tag.Sauce]),
    new Ingredient("Steak", false, false, [Tag.Protein, Tag.Meat]),
    new Ingredient("Sweet Corn", false, false, [Tag.Vegetable]),
    new Ingredient("Tofu", false, false, [Tag.Protein]),
    new Ingredient("Tomato", false, false, [Tag.Vegetable]),
    new Ingredient("Tomato Sauce", false, false, [Tag.Vegetable]),
    new Ingredient("Tortilla Chips", false, true, [Tag.Grain]),
    new Ingredient("Tuna", false, false, [Tag.Protein, Tag.Meat, Tag.Fish]),
    new Ingredient("Vegetable Broth", false, true, [Tag.Broth]),
    new Ingredient("Vegetable Oil", false, false, [Tag.Oil]),
    new Ingredient("Veggie Sausage", false, false, [Tag.Protein]),
    new Ingredient("Yellow Zucchini", false, false, [Tag.Vegetable])
];

window.Ingredients = (function() {
    var result = {};
    
    for(var i in IngredientList) {
        var ingredient = IngredientList[i];
        result[ingredient.Key] = ingredient;
    }
    
    return result;
}());