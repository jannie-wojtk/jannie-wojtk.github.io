// Load before recipes.js
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
        
        // computed to reduce repition
        this.Key = name.replaceAll(' ', '');
    }
    
    HasTag(tag) {
        return !!this.Tags.find(tag);
    }
}

var IngredientList = [
    new Ingredient("Alfredo Sauce", true, true, ['Sauce']),
    new Ingredient("Barley", false, true, ['Grain']),
    new Ingredient("Beef", false, false, ['Protein', 'Meat']),
    new Ingredient("Beef Broth", false, false, ['Broth', 'Meat']),
    new Ingredient("Berries", false, false, ['Fruit']),
    new Ingredient("Black Bean Burger", false, true, ['Protein']),
    new Ingredient("Black Beans", false, false, ['Protein', 'Grain']),
    new Ingredient("Black Pepper", false, false, ['Spice']),
    new Ingredient("Bok Choy", false, false, ['Vegetable']),
    new Ingredient("Brocolli", false, false, ['Vegetable']),
    new Ingredient("Brussel Sprouts", false, false, ['Vegetable']),
    new Ingredient("Caesar Dressing", false, false, ['Sauce', 'Dressing']),
    new Ingredient("Carrot", false, false, ['Vegetable']),
    new Ingredient("Cauliflower", false, false, ['Vegetable']),
    new Ingredient("Cherry Tomato", false, false, ['Vegetable']),
    new Ingredient("Chicken", false, false, ['Protein', 'Meat']),
    new Ingredient("Chicken Broth", false, true, ['Broth', 'Meat']),
    new Ingredient("Chili Power", false, true, ['Spice']),
    new Ingredient("Couscous", false, false, ['Grain']),
    new Ingredient("Crushed Tomato", false, false, ['Vegetable']),
    new Ingredient("Cucumber", false, false, ['Vegetable']),
    new Ingredient("Cumin", false, false, ['Spice']),
    new Ingredient("Eggs", true, false, ['Protein', 'Dairy']),
    new Ingredient("Falafel", false, true, ['Protein', 'Grain']),
    new Ingredient("Farfalle Pasta", false, false, ['Grain', 'Pasta']),
    new Ingredient("French Fries", false, true, ['Vegetable']),
    new Ingredient("Garlic", false, false, ['Spice', 'Vegetable']),
    new Ingredient("Ginger", false, false, ['Spice', 'Vegetable']),
    new Ingredient("Ground Turkey", false, false, ['Protein', 'Meat']),
    new Ingredient("Habanero Pepper", false, false, ['Vegetable']),
    new Ingredient("Hoisin Sauce", false, true, ['Sauce']),
    new Ingredient("Hummus", false, true, ['Protein']),
    new Ingredient("Italian Sausage", false, true, ['Protein', 'Meat']),
    new Ingredient("Jalapeno Pepper", false, false, ['Vegetable']),
    new Ingredient("Kale", false, false, ['Vegetable']),
    new Ingredient("Kidney Beans", false, false, ['Protein', 'Grain']),
    new Ingredient("Lettuce", false, false, ['Vegetable']),
    new Ingredient("Maple Syrup", false, false, ['Sweetner']),
    new Ingredient("Mushroom Broth", false, true, ['Broth']),
    new Ingredient("Olive Oil", false, false, ['Oil']),
    new Ingredient("Onion", false, false, ['Vegetable']),
    new Ingredient("Pasta", false, true, ['Grain']),
    new Ingredient("Pesto", false, false, ['Sauce']),
    new Ingredient("Pizza Dough", true, true, ['Grain']),
    new Ingredient("Plain Greek Yogurt", true, false, ['Dairy']),
    new Ingredient("Poblano Pepper", false, false, ['Vegetable']),
    new Ingredient("Pork", false, false, ['Protein', 'Meat']),
    new Ingredient("Pork Loin", false, false, ['Protein', 'Meat']),
    new Ingredient("Portabella Mushrooms", false, false, ['Protein']),
    new Ingredient("Potato", false, false, ['Vegetable']),
    new Ingredient("Quinoa", false, false, ['Grain']),
    new Ingredient("Red Bell Pepper", false, false, ['Vegetable']),
    new Ingredient("Red Cabbage", false, false, ['Vegetable']),
    new Ingredient("Red Pepper Flakes", false, false, ['Spice']),
    new Ingredient("Rice", false, false, ['Grain']),
    new Ingredient("Salmon", false, false, ['Protein', 'Meat', 'Fish']),
    new Ingredient("Salt", false, false, ['Spice']),
    new Ingredient("Sesame Oil", false, false, ['Oil', 'Nut']),
    new Ingredient("Soy Sauce", false, true, ['Sauce']),
    new Ingredient("Steak", false, false, ['Protein', 'Meat']),
    new Ingredient("Tofu", false, false, ['Protein']),
    new Ingredient("Tomato", false, false, ['Vegetable']),
    new Ingredient("Tomato Sauce", false, false, ['Vegetable']),
    new Ingredient("Tortilla Chips", false, true, ['Grain']),
    new Ingredient("Tuna", false, false, ['Protein', 'Meat', 'Fish']),
    new Ingredient("Vegetable Broth", false, true, ['Broth']),
    new Ingredient("Vegetable Oil", false, false, ['Oil']),
    new Ingredient("Veggie Sausage", false, false, ['Protein']),
    new Ingredient("Yellow Zucchini", false, false, ['Vegetable'])
];

window.Ingredients = (function() {
    var result = {};
    
    for(var i in IngredientList) {
        var ingredient = IngredientList[i];
        result[ingredient.Key] = ingredient;
    }
    
    return result;
}());

console.log(Ingredients);