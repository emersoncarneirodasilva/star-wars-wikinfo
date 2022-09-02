import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

const sleep = async delay => new Promise(r => setTimeout(r, delay))

/* Get a film */
const getFilm = async (id) => {
  return get(`/films/${id}`)
};

/* Get a person */
const getPerson = async (id) => {
  return get(`/people/${id}`)
};

/* Get a vehicle */
const getVehicle = async (id) => {
  return get(`/vehicles/${id}`)
};

/* Get a starship */
const getStarship = async (id) => {
  return get(`/starships/${id}`)
};

/* Get all films */
const getFilms = async (query = null, page = null) => {
  return get(`films/?search=${query}&page=${page}`)
};

/* Get all people */
const getPeople = async (query = null, page = null) => {
  return get(`people/?search=${query}&page=${page}`)
};

/* Get all vehicles */
const getVehicles = async (query = null, page = null) => {
  return get(`vehicles/?search=${query}&page=${page}`)
};

/* Get all starships */
const getStarships = async (query = null, page = null) => {
  return get(`starships/?search=${query}&page=${page}`)
};

const get = async (endpoint) => {
  const response = await axios.get(endpoint)
  await sleep(1500)
  return response.data
};

export default {
  getFilms,
  getFilm,
  getPeople,
  getPerson,
  getVehicle,
  getVehicles,
  getStarship,
  getStarships,
};