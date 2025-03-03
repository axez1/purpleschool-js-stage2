'use strict'

const API_URL = 'https://pokeapi.co/api/v2';
const SHOW_TIME = 3000;

const Method = {
  GET: 'GET'
};

const Route = {
  GET_DATA_POKEMON: '/pokemon/ditto',
  GET_DATA_ABILITY: '/ability/7/'
};

const showAlert = () => {
  const alertContainer = document.querySelector('#error').content.querySelector('.error');

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SHOW_TIME);
};

const showSuccess = () => {
  const successContainer = document.querySelector('#success').content.querySelector('.success');

  document.body.append(successContainer);

  setTimeout(() => {
    successContainer.remove();
  }, SHOW_TIME);
};

const load = (route, method = Method.GET, body = null) =>
  fetch(`${API_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Произошла ошибка ${response.status}: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err.message);
    });

const getDataPokemon = () => load(Route.GET_DATA_POKEMON, Method.GET);
const getDataAbility = () => load(Route.GET_DATA_ABILITY, Method.GET);

getDataPokemon()
  .then((data) => {
    return getDataAbility()
  })
  .then((data) => {
    showSuccess();
    console.log(data.effect_entries[1]);
  })
  .catch(
    () => {
      showAlert();
    }
  );