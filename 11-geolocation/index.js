'use strict'

const wrapper = document.getElementById('myLocation');

const getCurrentLocation = (callback) => {
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      callback(null, {
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    },
    (error) => {
      callback(error);
    }
  );
};

const getCurrentLocationPromise = () => {
  return new Promise((resolve, reject) => {
    getCurrentLocation((error, position) => {
      if (error) {
        reject(error);
      } else {
        resolve(position);
      }
    });
  });
};

getCurrentLocationPromise()
  .then(({ latitude, longitude }) => {
    wrapper.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
  })
  .catch((error) => {
    console.error('Ошибка при получении геолокации:', error);
  });

