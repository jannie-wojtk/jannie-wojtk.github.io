// Load before recipes.js
class Ingredient {
    Key = '';
    Name = '';
    HasGluten = true;
    HasDairy = true;
    
    constructor(name, hasGluten = true, hasDairy = true) {
        this.Name = name;
        this.Key = name.replaceAll(' ', '');
        this.HasGluten = hasGluten;
        this.HasDairy = hasDairy;
    }
}

var IngredientList = [
    new Ingredient("Alfredo Sauce"),
    new Ingredient("Barley"),
    new Ingredient("Beef"),
    new Ingredient("Beef Broth"),
    new Ingredient("Berries"),
    new Ingredient("Black Bean Burger"),
    new Ingredient("Black Beans"),
    new Ingredient("Black Pepper"),
    new Ingredient("Bok Choy"),
    new Ingredient("Brocolli"),
    new Ingredient("Brussel Sprouts"),
    new Ingredient("Caesar Dressing"),
    new Ingredient("Carrot"),
    new Ingredient("Cauliflower"),
    new Ingredient("Cherry Tomato"),
    new Ingredient("Chicken"),
    new Ingredient("Chicken Broth"),
    new Ingredient("Chili Power"),
    new Ingredient("Couscous"),
    new Ingredient("Crushed Tomato"),
    new Ingredient("Cucumber"),
    new Ingredient("Cumin"),
    new Ingredient("Eggs"),
    new Ingredient("Falafel"),
    new Ingredient("Farfalle Pasta"),
    new Ingredient("French Fries"),
    new Ingredient("Garlic"),
    new Ingredient("Ginger"),
    new Ingredient("Ground Turkey"),
    new Ingredient("Habanero Pepper"),
    new Ingredient("Hoisin Sauce"),
    new Ingredient("Hummus"),
    new Ingredient("Italian Sausage"),
    new Ingredient("Jalapeno Pepper"),
    new Ingredient("Kale"),
    new Ingredient("Kidney Beans"),
    new Ingredient("Lettuce"),
    new Ingredient("Maple Syrup"),
    new Ingredient("Mushroom Broth"),
    new Ingredient("Olive Oil"),
    new Ingredient("Onion"),
    new Ingredient("Pasta"),
    new Ingredient("Pesto"),
    new Ingredient("Pizza Dough"),
    new Ingredient("Plain Greek Yogurt"),
    new Ingredient("Poblano Pepper"),
    new Ingredient("Pork"),
    new Ingredient("Pork Loin"),
    new Ingredient("Portabella Mushrooms"),
    new Ingredient("Potato"),
    new Ingredient("Quinoa"),
    new Ingredient("Red Bell Pepper"),
    new Ingredient("Red Cabbage"),
    new Ingredient("Red Pepper Flakes"),
    new Ingredient("Rice"),
    new Ingredient("Salmon"),
    new Ingredient("Salt"),
    new Ingredient("Sesame Oil"),
    new Ingredient("Soy Sauce"),
    new Ingredient("Steak"),
    new Ingredient("Tofu"),
    new Ingredient("Tomato"),
    new Ingredient("Tomato Sauce"),
    new Ingredient("Tortilla Chips"),
    new Ingredient("Tuna"),
    new Ingredient("Vegetable Broth"),
    new Ingredient("Vegetable Oil"),
    new Ingredient("Veggie Sausage"),
    new Ingredient("Yellow Zucchini")
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