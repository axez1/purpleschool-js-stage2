'use strict'

async function getProduct(id) {
  const response = await fetch('https://dummyjson.com/products/' + id);
  return response.json();
}

const race = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve).catch(reject);
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  if (new Date() < new Date('28/02/2025')) {
    reject(new Error);
  } else {
    resolve(getProduct(2));
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (new Date() > new Date('28/02/2025')) {
    reject(new Error);
  } else {
    resolve(getProduct(13));
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (new Date() == new Date()) {
    reject(new Error);
  } else {
    resolve(getProduct(19));
  }
});

race([promise1, promise2, promise3])
  .then(result => {
    console.log('Первый загруженный или отклоненный promise:', result);
  })
  .catch(error => {
    console.log('Первый загруженный или отклоненный promise:', error);
  });


