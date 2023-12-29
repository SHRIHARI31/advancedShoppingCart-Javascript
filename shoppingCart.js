const totalBtn = document.querySelector(".total");
const showCartBtn = document.querySelector(
  "body > main.shopping-body > div > button"
);
const carts = document.querySelector("body > main.shopping-cart-body");
totalBtn.addEventListener("click", () => {
  let totalPrice = 0;
  let numberArray = [];
  const totalSelection = document.querySelectorAll(
    "body > main.shopping-cart-body > div.cart-section > div > p.total-price"
  );
  totalSelection.forEach((price) => {
    let str = price.innerText;
    let numbers = str.match(/\d+/g); // \d+ matches one or more digits
    numberArray.push(...numbers);
  });
  numberArray = numberArray.map((numbers) => parseInt(numbers));
  totalPrice = numberArray.reduce((a, b) => a + b, 0);
  totalPrice > 0 ? alert(`total: ${totalPrice}`) : alert(`no items in cart`);
});
let isCartShown = false;

// Assuming 'carts' is a DOM element, add a transition
carts.style.transition = "transform 0.3s ease-out";
const showCart = document.querySelector("body > main.shopping-body > div");

showCartBtn.addEventListener("click", () => {
  if (!isCartShown) {
    carts.style.transform = "translateX(0%)";
    isCartShown = true;
  } else {
    carts.style.transform = "translateX(-100%)";
    isCartShown = false;
  }
});
