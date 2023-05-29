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
// window.addEventListener('load', returnToDefault);
// addRecipeButton.addEventListener('click', addRecipe);
letsCookButton.addEventListener('click', displayMeal);
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
        randomMealItem = sides[getRandomIndex(sides)];
        selectedItem1.innerHTML = `${randomMealItem}!`;
    }
    else if (mainDishLi.checked) {
        randomMealItem = mainDishes[getRandomIndex(mainDishes)];
        selectedItem1.innerHTML = `${randomMealItem}!`;
    }
    else if (dessertLi.checked) {
        randomMealItem = desserts[getRandomIndex(desserts)];
        selectedItem1.innerHTML = `${randomMealItem}!`;
    }
    // else if () {
    //     randomMealItem = 
    // }

}

function displayMeal() {
    hide([cookPotImage]);
    show([shouldMakeDiv]);
  }

function clearSelection() {
    show([cookPotImage]);
    hide([shouldMakeDiv]);
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



//**************************** */

   // else {
    //     foodCategory = 'You have not selected a Food Category. Please choose a category and then select the \'Let\'s Cook! button.'
    // }
    // return foodCategory 

// function returnToDefault () {
//     //on load and on click, all values will return to default - no radio buttons selected and cookPot image present
// }

//     function hide(elements) {
//         for (var i = 0; i < elements.length; i++) {
//           elements[i].classList.add('hidden');
//         }
//       }
      
//       function show(elements) {
//         for (var i = 0; i < elements.length; i++) {
//           elements[i].classList.remove('hidden');
//         }
//       }
//     //check the radio button to see if it's selected.
//     //get a random index from the selected array
//     //hide the cookPot image
//     //show the "shouldMake" div

// }

// function addRecipe () {

// }






