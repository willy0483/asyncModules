// write cool JS hwere!!

// import {
//   getAllProducts,
//   getSingleProduct,
//   SearchProducts,
//   limitSkipProducts,
//   sortProducts,
//   getAllProductsCategories,
//   getProductsCategoryList,
//   getProductsByCategory,
// } from "./modules/dummyJson/dummyJson.js";

// import {
//   getMealByName,
//   getMealByFirstLetter,
//   getMealById,
//   getSingleRandomMeal,
//   getAllListCategories,
//   getListCategoryIngredients,
//   filterByCategory,
//   filterByArea,
// } from "./modules/theMealdb/theMealdb.js";

import { filterByCategory } from "./modules/theMealdb/theMealdb.js";
import { showAllProducts } from "./modules/theMealdbView/showAllProducts.js";

export let myAppElement = document.getElementById("myApp");

homePage();

export default function homePage() {
  filterByCategory().then((data) => {
    console.log(data);
    showAllProducts(data.meals);
  });
}
