import { myAppElement } from "../../site.js";
import homePage from "../../site.js";
import { getSingleProduct } from "../dummyJson/dummyJson.js";

export function singleProduct(id) {
  getSingleProduct(id).then((data) => {
    showSingleProduct(data);
  });
}
function showSingleProduct(product) {
  console.log(product);

  myAppElement.innerHTML = "";

  const myCardContainer = document.createElement("div");
  myCardContainer.classList.add("product-view-container");

  const myCard = document.createElement("div");
  myCard.classList.add("product-view");

  myCard.innerHTML = `
      <figure>
        <img src="${product.thumbnail}" alt="${product.title}">
        <figcaption>
          <h2>${product.title}</h2>
          <button id="backButton">Back</button>
        </figcaption>
      </figure>
    `;
  const backButton = myCard.querySelector("#backButton");
  backButton.addEventListener("click", (e) => {
    homePage();
  });

  myCardContainer.appendChild(myCard);
  myAppElement.appendChild(myCardContainer);
}
