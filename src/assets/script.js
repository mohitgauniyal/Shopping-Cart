/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

let products = [
  {
    "name":"Cherry",
    "price":120,
    "quantity":0,
    "productId":0,
    "image":"images/cherry.jpg"
  },
  {
    "name":"Orange",
    "price":90,
    "quantity":0,
    "productId":1,
    "image":"images/orange.jpg"
  },
  {
    "name":"Strawberry",
    "price":150,
    "quantity":0,
    "productId":2,
    "image":"images/strawberry.jpg"
  },  
];

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

// helper function to get the product by productId from the given product list:
function getProductByIdFromList(productId, productList) {
  return productList.find((product) => product.productId === productId);
}

// Adds a product in the cart
function addProductToCart(productId){
  let product = getProductByIdFromList(productId, products)
  if (product){
    product.quantity += 1;

    // adds the product in cart the first time clicks on Add To Cart option.
    if(!cart.includes(product))
      cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

// Increase the quantity of a product in the cart
function increaseQuantity(productId){
  let product = getProductByIdFromList(productId, products)
  // increments the quantity by 1, if the product is found
  if (product){
    product.quantity+=1;
  } 
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  let product = getProductByIdFromList(productId, products)  
  if (product){
    product.quantity-=1;

    //checks if the product quantity reduces to 0, if it does, removes the product from the cart
    if(product.quantity===0)
      removeProductFromCart(productId);
  } 
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  // Find the index of the product in the cart array using its productId
  const index = cart.findIndex((product) => product.productId === productId);
  // Check if the product exists in the cart (index !== -1 shows the product is found)
  if (index !== -1) {
  // Set the quantity of the product to 0 if removed
  cart[index].quantity = 0;
  // Remove the product from the cart. removes 1 product of the given index.
  cart.splice(index, 1);
}
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/

function cartTotal(){
  // initial cost is 0
  let cost = 0;

  // pick each product in the cart, multiply its cost with the quantity, add them all up to get the final total cost.
  cart.forEach(function(item){
    cost += (item.price*item.quantity);
  });
  return cost;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart(){
  cart = [];
}
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/

// Variable to track the total amount paid
let totalPaid = 0;

function pay(amount) {

    // Add the current payment amount to the totalPaid variable
    totalPaid += amount;

    // Calculate the difference between the totalPaid and the cartTotal
    let remaining = totalPaid - cartTotal()

    // Check if the remaining amount is greater than or equal to zero
    if (remaining >= 0) {
        // If so, reset the `totalPaid` to zero to prepare it for the next
        // payment, as the current payment is enough to cover the `cartTotal`.
        totalPaid = 0;
        emptyCart()
    }

    // Return the remaining (negative if payment is less than the cartTotal)
    return remaining;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   // currency
}
