import { myAppElement } from "../../site.js";
import { getSingleProduct } from "../theMealdbView/showSingleProduct.js";

export function showAllProducts(products) {
  myAppElement.innerHTML = "";

  const myCardContainer = document.createElement("div");
  myCardContainer.classList.add("product-cards-container");

  products.forEach((myProduct) => {
    const myCard = document.createElement("div");
    myCard.classList.add("product-card");

    myCard.innerHTML = `
      <figure>
        <img src="${myProduct.strMealThumb}" alt="${myProduct.strMeal}">
        <figcaption>
          <h2>${myProduct.strMeal}</h2>
        </figcaption>
      </figure>
    `;

    myCard.addEventListener("click", (e) => {
      console.log(myProduct.idMeal);
      getSingleProduct(myProduct.idMeal);
    });
    myCardContainer.appendChild(myCard);
  });
  myAppElement.appendChild(myCardContainer);
}
