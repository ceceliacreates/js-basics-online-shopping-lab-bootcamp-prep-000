var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random() * 100))})
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var outputString = "In your cart, you have"
  var i;
  if (cart.length === 0) {
      outputString = "Your shopping cart is empty."
    }
  else {
  for (i = 0; i < cart.length; i++) {
  if (cart.length === 1) {
      outputString += `${cart.itemName[0]} at ${cart.itemPrice[0]}.`
    }
    else if (i === cart.length) {
      outputString += `, and ${cart.itemName[i]} at ${cart.itemPrice[i]}.`
    }
    else {
      outputString += `,${cart.itemName[i]} at ${cart.itemPrice[i]}`
    }
  }
  }
  return outputString
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
