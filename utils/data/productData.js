import { clientCredentials } from '../client';

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

const createProduct = (product) => new Promise((resolve, reject) => {
  const productObj = {
    hair_type: product.hairType,
    name: product.name,
    product_type: product.type,
    routine: product.routine_id,
    purpose: product.purpose,
    price_range: product.priceRange,
    image_url: product.imageUrl,
    date: product.date
  };
  fetch(`${clientCredentials.databaseURL}/products`, {
    method: 'POST',
    body: JSON.stringify(productObj),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getSingleProduct = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    resolve({
      id: data.id,
      name: data.name,
      type: data.product_type,
      imageUrl: data.image_url,
      purpose: data.purpose,
      priceRange: data.price_range,
      routineId: data.routine,
    });
  })
  .catch((error) => reject(error));
});

const getProductRoutines = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/routines`)
  .then((response) => resolve(response.json()))
  .catch((error) => reject(error));
});

const updateProduct = (product, id) => new Promise((resolve, reject) => {
  const productObj = {
    id: product.id,
    name: product.name,
    product_type: product.type,
    purpose: product.purpose,
    price_range: product.priceRange,
    image_url: product.imageUrl,
    routine_id: Number(product.routineId.id),
    date: product.date,
  };
  fetch(`${clientCredentials.databaseURL}/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productObj),
  })
  .then((response) => resolve(response.data))
  .catch(reject);
});

export { getAllProducts, createProduct, getProductRoutines, getSingleProduct, updateProduct };
