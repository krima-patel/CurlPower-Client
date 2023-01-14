import { clientCredentials } from '../client';

const getUser = (userId, uid = '') => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/users/${userId}`, {
    method: 'GET',
    headers: {
      Authorization: uid,
    },
  })
  .then((response) => response.json())
  .then((data) => {
    resolve({
      id: data.id,
      name: data.name,
    });
  })
  .catch(reject);
});

export { getUser };
