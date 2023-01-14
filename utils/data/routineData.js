import { clientCredentials } from '../client';

const getRoutines = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/routines`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

export { getRoutines };
