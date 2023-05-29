// ~~~~~~ query selectors:
var addRecipeButton = document.querySelector('#addRecipe');
var letsCookButton = document.querySelector('#letsCook');
var clearButton = document.querySelector('#clearAll');
var cookPotImage = document.querySelector('#cookPot');
var mealChoiceList = document.querySelector('#mealChoices');
var shouldMakeItem = document.querySelector('#shouldMake');
var shouldMakeMeal = document.querySelector('#shouldMakeEntireMeal');
var selectedItem1 = document.querySelector('#selectedItems');
var selectedItem2 = document.querySelector('#selectedItems2');
var selectedItem3 = document.querySelector('#selectedItems3');
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
var foodCategory;

// ~~~~~~ event listeners
letsCookButton.addEventListener('click', displaySingleItem);
clearButton.addEventListener('click', clearSelection);
sideLi.addEventListener('click', userChoice);
mainDishLi.addEventListener('click', userChoice);
dessertLi.addEventListener('click', userChoice);
entireMealLi.addEventListener('click', userChoice);

// ~~~~~~ functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function userChoice () {
    clearSelection();
    if (sideLi.checked) {
        var randomMealItem = sides[getRandomIndex(sides)];
        selectedItem1.innerText = `${randomMealItem}!`;
    }
    else if (mainDishLi.checked) {
        var randomMealItem = mainDishes[getRandomIndex(mainDishes)];
        selectedItem1.innerText = `${randomMealItem}!`;
    }
    else if (dessertLi.checked) {
        var randomMealItem = desserts[getRandomIndex(desserts)];
        selectedItem1.innerText = `${randomMealItem}!`;
    }
}

function displaySingleItem() {
    hide([cookPotImage]);
    show([shouldMakeItem]);
}

function displayMeal() {
    hide([cookPotImage]);
    show([shouldMakeMeal]);
  }

function clearSelection() {
    show([cookPotImage]);
    hide([shouldMakeItem]);
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