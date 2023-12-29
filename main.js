const productDiv = document.querySelector(".product-div");
const cartSection = document.querySelector(".cart-section");
const clearCartBtn = document.querySelector(".clear");

const productDetails = [
  {
    productTitle: "bag",
    img: {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71gS30fF6IS._AC_UL320_.jpg",
      title: "school-bag-img",
      alt: "school-bag-img",
    },
    productPrice: 300,
    productRatings: "⭐ ⭐ ⭐ ⭐ ⭐",
  },
  {
    productTitle: "black-pant",
    img: {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71p+y8xHJFL._AC_UL320_.jpg",
      title: "black-pant",
      alt: "black-pant",
    },
    productPrice: 800,
    productRatings: "⭐ ⭐ ⭐ ",
  },
  {
    productTitle: "water-gun",
    img: {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51bkQ9hhMgL._AC_UL320_.jpg",
      title: "water-gun",
      alt: "water-gun",
    },
    productPrice: 1800,
    productRatings: "⭐ ⭐ ⭐ ⭐",
  },
  {
    productTitle: "ps5",
    img: {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/51mWHXY8hyL._AC_UY218_.jpg",
      title: "playstation-5",
      alt: "play-station5",
    },
    productPrice: 58000,
    productRatings: "⭐ ⭐ ⭐ ⭐",
  },
  {
    productTitle: "iphone 15",
    img: {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71d7rfSl0wL._AC_UY218_.jpg",
      title: "iphone 15",
      alt: "iphone 15",
    },
    productPrice: 74000,
    productRatings: "⭐ ",
  },
  {
    productTitle: "itadori hoodie",
    img: {
      url: "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/616389VI+QL._AC_UL320_.jpg",
      title: "itadori hoodie",
      alt: "itadori hoodie",
    },
    productPrice: 17900,
    productRatings: "⭐⭐ ⭐ ⭐ ⭐ ",
  },
];
const productCardCreator = (product) => {
  const {
    productTitle,
    img: { url, title, alt },
    productPrice,
    productRatings,
  } = product;

  const createElementWithClass = (type, className) => {
    const element = document.createElement(type);
    element.classList.add(className);
    return element;
  };

  const card = createElementWithClass("div", "product-card");
  const cardTitle = createElementWithClass("h2", "product-title");
  cardTitle.textContent = productTitle;
  const cardImg = createElementWithClass("img", "product-img");
  cardImg.src = url;
  cardImg.alt = alt;
  cardImg.title = title;
  const cardPricing = createElementWithClass("p", "product-pricing");
  cardPricing.textContent = productPrice;
  const cardRating = createElementWithClass("p", "product-rating");
  cardRating.textContent = productRatings;
  const counterDiv = createElementWithClass("div", "counter-div");
  const incrementBtn = createElementWithClass("button", "increment-btn");
  incrementBtn.innerText = "+";
  const counter = createElementWithClass("p", "counter");
  counter.innerText = 0;
  const decrementBtn = createElementWithClass("button", "decrement-btn");
  decrementBtn.innerText = "-";
  const cardButton = createElementWithClass("button", "card-button");

  counterDiv.append(incrementBtn, counter, decrementBtn);
  card.append(
    cardTitle,
    cardImg,
    cardPricing,
    cardRating,
    counterDiv,
    cardButton
  );

  let quantity = 0;
  incrementBtn.addEventListener("click", () => {
    quantity += 1;
    counter.innerText = quantity;
  });
  decrementBtn.addEventListener("click", () => {
    quantity > 0
      ? (counter.innerText = quantity -= 1)
      : (counter.innerText = 0);
  });

  const cartBox = createElementWithClass("div", "cart-box");
  const itemName = createElementWithClass("p", "item-name");
  const quantityHolder = createElementWithClass("p", "qty-holder");
  const totalPrice = createElementWithClass("p", "total-price");
  const placeOrderBox = createElementWithClass("div", "place-order-box");
  const orderBtn = createElementWithClass("button", "order-btn");
  const removeBtn = createElementWithClass("button", "remove-btn");
  const cartFixer = () => {
    if (quantity !== 0) {
      alert(`${productTitle} was added to cart`);
      cartSection.appendChild(cartBox);
    } else if (quantity == 0) {
      alert(`select number of ${productTitle}`);
    }
    placeOrderBox.append(orderBtn, removeBtn);
    itemName.innerText = `item name : ${productTitle}`;
    quantityHolder.innerText = `item quantity : ${quantity}`;
    totalPrice.innerText = `total price :  ${productPrice * quantity}`;
    cartBox.append(itemName, quantityHolder, totalPrice, placeOrderBox);
  };
  cardButton.addEventListener("click", () => {
    cartFixer();
  });
  orderBtn.addEventListener("click", () => {
    alert(`${productTitle} is placed order successfully`);
  });
  removeBtn.addEventListener("click", () => {
    alert(`${productTitle} is removed from cart`);
    cartSection.removeChild(cartBox);
  });
  clearCartBtn.addEventListener("click", () => {
    cartSection.removeChild(cartBox);
  });



  return card;
};

const displayProductCards = () => {
  const fragment = document.createDocumentFragment();
  productDetails.forEach((product) => {
    const card = productCardCreator(product);
    fragment.appendChild(card);
  });
  productDiv.appendChild(fragment);
};

displayProductCards();
