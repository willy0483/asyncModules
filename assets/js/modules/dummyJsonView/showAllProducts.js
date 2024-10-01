import { myAppElement } from "../../site.js";
import { singleProduct } from "../dummyJsonView/showSingleProduct.js";

export function showAllProducts(products) {
  console.log(products);

  myAppElement.innerHTML = "";

  const myCardContainer = document.createElement("div");
  myCardContainer.classList.add("product-cards-container");

  products.forEach((myProduct) => {
    const myCard = document.createElement("div");
    myCard.classList.add("product-card");

    myCard.innerHTML = `
      <figure>
        <img src="${myProduct.thumbnail}" alt="${myProduct.title}">
        <figcaption>
          <h2>${myProduct.title}</h2>
        </figcaption>
      </figure>
    `;

    myCard.addEventListener("click", (e) => {
      console.log(myProduct.id);
      singleProduct(myProduct.id);
    });
    myCardContainer.appendChild(myCard);
  });
  myAppElement.appendChild(myCardContainer);
}
