// write cool JS hwere!!

import {
  getAllProducts,
  getSingleProduct,
  SearchProducts,
  limitSkipProducts,
  sortProducts,
  getAllProductsCategories,
  getProductsCategoryList,
  getProductsByCategory,
} from "./modules/dummyJson/dummyJson.js";

import {
  getMealByName,
  getMealByFirstLetter,
  getMealById,
  getAllListCategories,
  getListCategoryIngredients,
  filterByCategory,
  filterByArea,
} from "./modules/theMealdb/theMealdb.js";

getMealByName().then((data) => {
  console.log(data);
});
