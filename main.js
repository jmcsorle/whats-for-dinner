// ~~~~~~ query selectors:
var addRecipeButton = document.querySelector('#addRecipe');
var letsCookButton = document.querySelector('#letsCook');
var clearButton = document.querySelector('#clearAll');
var cookPotImage = document.querySelector('#cookPot');
var mealChoiceList = document.querySelector('#mealChoices');
var make1Item = document.querySelector('#makeItem');
var makeMeal = document.querySelector('#makeEntireMeal');
var selectedItem1 = document.querySelector('#selected1Item');
var mealItem1 = document.querySelector('#randomSideItem');
var mealItem2 = document.querySelector('#randomMainDish');
var mealItem3 = document.querySelector('#randomDessert');
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
var selectionCount = 0;
var selectionID = 0;

// ~~~~~~ event listeners
letsCookButton.addEventListener('click', displayUserChoice);
clearButton.addEventListener('click', clearSelection);
sideLi.addEventListener('click', userChoice);
mainDishLi.addEventListener('click', userChoice);
dessertLi.addEventListener('click', userChoice);
entireMealLi.addEventListener('click', userChoice);

// ~~~~~~ functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function randomUserChoices () {
    selectedFoodItems = []
    var randomMealItem1 = sides[getRandomIndex(sides)];
    var randomMealItem2 = mainDishes[getRandomIndex(mainDishes)];
    var randomMealItem3 = desserts[getRandomIndex(desserts)];
    selectedFoodItems.push(randomMealItem1, randomMealItem2, randomMealItem3);
}

function userChoice () {
    clearSelection();
    randomUserChoices();
    for (var i = 0; i < selectedFoodItems.length; i++) {
        if (sideLi.checked && i === 0) {
            selectedItem1.innerText = `${selectedFoodItems[i]}!`;
        }
        else if (mainDishLi.checked && i === 1) {
            selectedItem1.innerText = `${selectedFoodItems[i]}!`;
        }
        else if (dessertLi.checked && i === 2) {
            selectedItem1.innerText = `${selectedFoodItems[i]}!`;
        }  
    }
    if (entireMealLi.checked) {
        mealItem1.innerText = `${selectedFoodItems[0]}`;
        mealItem2.innerText = `${selectedFoodItems[1]}`;
        mealItem3.innerText = `${selectedFoodItems[0]}`;
    }
}

function displayUserChoice() {
    if (entireMealLi.checked) {
        hide([cookPotImage], [make1Item]);
        show([makeMeal]);
    }
    else if (!entireMealLi.checked) {
        hide([cookPotImage], [makeMeal]);
        show([make1Item]);
    }
}

function clearSelection() {
    show([cookPotImage]);
    hide([make1Item]);
    hide([makeMeal]);
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