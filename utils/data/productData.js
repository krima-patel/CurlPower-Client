import { clientCredentials } from '../client';

const getAllProducts = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/products`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

export { getAllProducts };
