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

import { getAllProducts } from "./modules/dummyJson/dummyJson.js";
import { showAllProducts } from "./modules/dummyJsonView/showAllProducts.js";

export let myAppElement = document.getElementById("myApp");

homePage();

export default function homePage() {
  getAllProducts().then((data) => {
    console.log(data);
    showAllProducts(data.products);
  });
}
