// getAllProducts
export async function getAllProducts() {
  return fetch("https://dummyjson.com/products")
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

// getSingleProduct
export async function getSingleProduct() {
  return fetch("https://dummyjson.com/products/1")
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

// SearchProducts
export async function SearchProducts() {
  return fetch("https://dummyjson.com/products/search?q=phone")
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

// limitSkipProducts
export async function limitSkipProducts() {
  return fetch(
    "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
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

// Sort products
export async function sortProducts() {
  return fetch("https://dummyjson.com/products?sortBy=title&order=asc")
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

// Get all products categories
export async function getAllProductsCategories() {
  return fetch("https://dummyjson.com/products/categories")
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

// Get products category list
export async function getProductsCategoryList() {
  return fetch("https://dummyjson.com/products/category-list")
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

// Get products by a category
export async function getProductsByCategory() {
  return fetch("https://dummyjson.com/products/category/smartphones")
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
