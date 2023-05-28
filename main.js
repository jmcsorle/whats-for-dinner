// ~~~~~~ button query selectors:
var addRecipeButton = document.querySelector('#addRecipe');
var letsCookButton = document.querySelector('#letsCook');
var clearButton = document.querySelector('#clearAll');

// ~~~~~~ form query selectors:
var mealChoiceForm = document.querySelector('#mealChoices');

// ~~~~~~ image query selectors:
var cookPotImage = document.querySelector('#cookPot');

// ~~~~~~ other query selectors:
var shouldMakeDiv = document.querySelector('#shouldMake');
var selectedMealItems = document.querySelector('#selectedItems');

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


// ~~~~~~ event listeners
window.addEventListener('load', defaultPage);
addRecipeButton.addEventListener('click', addRecipe);
letsCookButton.addEventListener('click', isSelected)
clearButton.addEventListener('click', defaultPage)


// ~~~~~~ functions
function getRandomIndex(array) {
    return Math.floor(Math.random()) * array.length
}

function defaultPage () {
    //on load and on click, all values will return to default - no radio buttons selected and cookPot image present
}

function isSelected () {
    //check the radio button to see if it's selected.
    //get a random index from the selected array
    //hide the cookPot image
    //show the "shouldMake" div

}

function addRecipe () {

}






