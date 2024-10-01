// Search meal by name
export async function getMealByName() {
  return fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// List all meals by first letter
export async function getMealByFirstLetter() {
  return fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// Lookup full meal details by id
export async function getMealById() {
  return fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// Lookup a single random meal
export async function getSingleRandomMeal() {
  return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// List all meal categories
export async function getAllListCategories() {
  return fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// List all Categories, Area, Ingredients
export async function getListCategoryIngredients() {
  return fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// Filter by main ingredient
export async function getByIngredient() {
  return fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast"
  )
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// Filter by Category
export async function filterByCategory() {
  return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

// Filter by Area
export async function filterByArea() {
  return fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}
