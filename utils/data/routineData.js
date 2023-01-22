import { clientCredentials } from '../client';

const getRoutines = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/routines`)
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

const getSingleRoutine = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/routines/${id}`)
  .then((response) => response.json())
  .then((data) => {
    resolve({
      id: data.id,
      title: data.title,
      hairType: data.hair_type,
      date: data.date,
      description: data.description,
    });
  })
  .catch((error) => reject(error));
});

const createRoutine = (routine, user) => new Promise((resolve, reject) => {
  const routineObj = {
    title: routine.title,
    hair_type: routine.hairType,
    date: routine.date,
    description: routine.description,
    user: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/routines`, {
    method: 'POST',
    body: JSON.stringify(routineObj),
    headers:{
      'Content-Type': 'application/json',
    },
  })
  .then((response) => resolve(response.json()))
  .catch((error) => reject(error));
});

const updateRoutine = (routine, id, user) => new Promise((resolve, reject) => {
  const routineObj = {
    id: routine.id,
    title: routine.title,
    hair_type: routine.hairType,
    date: routine.date,
    description: routine.description,
    user: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/routines/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(routineObj),
  })
  .then((response) => resolve(response.data))
  .catch(reject);
})

export { getRoutines, getSingleRoutine, createRoutine, updateRoutine };
