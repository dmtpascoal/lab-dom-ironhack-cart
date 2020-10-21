// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let subtotalPrice = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;

  console.log(subtotalPrice);
  return subtotalPrice;
}

function calculateAll() {
  const product = document.getElementsByClassName('product');
  const productsArray = [...product];

  let balance = 0;
  for (i=0; i < productsArray.length; i++) {
    balance += updateSubtotal(productsArray[i]);
  }
  console.log(balance);
  
  document.querySelector('#total-value span').innerHTML = balance;
  return balance;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
