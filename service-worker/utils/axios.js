import axios from '/cdn/axios.js';
import fetchAdapter from '/cdn/@vespaiach/axios-fetch-adapter.js';
axios.defaults.adapter = fetchAdapter;
export default axios;
