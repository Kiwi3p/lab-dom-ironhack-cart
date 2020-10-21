// ITERATION 1
let subtotal = 0;
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span')
  subtotalValue = price.innerHTML * quantity.value;
  subtotal.innerHTML = subtotalValue;
  return subtotalValue;

  //... your code goes here
}

function calculateAll() { 
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multiProduct = document.getElementsByClassName('product');
  let multiProductArray = [...multiProduct];
  let allTotal = 0;
  multiProductArray.forEach((item) => {
    allTotal += updateSubtotal(item);
  });

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = allTotal;
  //... your code goes here
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
