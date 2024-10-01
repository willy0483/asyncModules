import { getMealById } from "../theMealdb/theMealdb.js";
import { myAppElement } from "../../site.js";
import homePage from "../../site.js";

export function getSingleProduct(id) {
  getMealById(id).then((data) => {
    console.log(data);
    showSingleProduct(data.meals);
  });
}
function showSingleProduct(meal) {
  console.log(meal[0].idMeal);

  myAppElement.innerHTML = "";

  const myCardContainer = document.createElement("div");
  myCardContainer.classList.add("product-view-container");

  const myCard = document.createElement("div");
  myCard.classList.add("product-view");

  myCard.innerHTML = `
      <figure>
        <img src="${meal[0].strMealThumb}" alt="${meal[0].strMeal}">
        <figcaption>
          <h2>${meal[0].strMeal}</h2>
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
