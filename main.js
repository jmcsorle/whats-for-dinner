// ~~~~~~ button query selectors:
var addRecipeButton = document.querySelector('#addRecipe');
var letsCookButton = document.querySelector('#letsCook');
var clearButton = document.querySelector('#clearAll');

// ~~~~~~ form query selectors:

// ~~~~~~ image query selectors:
var cookPotImage = document.querySelector('#cookPot');

// ~~~~~~ other query selectors:
var mealChoiceList = document.querySelector('#mealChoices');
var shouldMakeDiv = document.querySelector('#shouldMake');
var selectedMealItems = document.querySelector('#selectedItems');
var sideLi = document.querySelector('#side');
var mainDishLi = document.querySelector('#mainDish');
var dessertLi = document.querySelector('#dessert');
var entireMealLi = document.querySelector('#entire');

// ~~~~~~ food arrays:
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mainDishes = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza'
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs'
]

// ~~~~~~ global variables
var selectedFoodItems = [];
var currentItems;

// ~~~~~~ event listeners
window.addEventListener('load', returnToDefault);
addRecipeButton.addEventListener('click', addRecipe);
letsCookButton.addEventListener('click', displaySelected)
clearButton.addEventListener('click', defaultPage)


// ~~~~~~ functions
function getRandomIndex(foodCategory) {
    return Math.floor(Math.random()) * foodCategory.length
}

function currentItem(foodCategory) {
    return {
        id: Date.now(),
        foodCategory: foodCategory,
        foodChoice: foodCategory[getRandomIndex(foodCategory)]
    }
}

function returnToDefault () {
    //on load and on click, all values will return to default - no radio buttons selected and cookPot image present
}

function displaySelected () {
    var selectedFood = 0
    if (sidesLi.checked) {
        currentItem(sides);
        selectedFood = 1

        //if entire meal, run currentMeal function 3 times calling each of the arrays

//new if outside of current if would check if selectedFood = 1 - if not, it would put an error message that says - you have not selected a food category

        }
    }

    function hide(elements) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add('hidden');
        }
      }
      
      function show(elements) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('hidden');
        }
      }
    //check the radio button to see if it's selected.
    //get a random index from the selected array
    //hide the cookPot image
    //show the "shouldMake" div

}

function addRecipe () {

}






