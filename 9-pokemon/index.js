'use strict'

const API_URL = 'https://pokeapi.co/api/v2';

const Method = {
  GET: 'GET'
};

const Route = {
  GET_DATA_POKEMON: '/pokemon/',
  GET_DATA_ABILITY: '/ability/'
};

const request = new XMLHttpRequest();
request.open(Method.GET, `${API_URL}${Route.GET_DATA_POKEMON}ditto`);
request.send();

request.addEventListener('load', function () {
  const data = JSON.parse(this.responseText);
  console.log(data);

  const request = new XMLHttpRequest();
  request.open(Method.GET, `${API_URL}${Route.GET_DATA_ABILITY}7/`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data.effect_entries[1]);
  })
})