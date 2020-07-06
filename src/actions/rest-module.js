/* Orange Copyright restricted MVP */

import axios from 'axios';
import constants from '../CommonConstants/constants.json';

// MockAPI
//http://www.mocky.io/v2/5cd4e1832e00006300527389
// RealAPI https://iotapiserver.azurewebsites.net/ofserver/oflogin

// CURRRENT PROD API SERVER
// export default () => {
//   // __API__ = root API
//   return axios.create({baseURL: 'https://iotaas-api-mcd.azurewebsites.net'})
// https://dev-iotapiserver.azurewebsites.net
// }

// DEVELOPMENT PURPOSES
export default () => {
  // __API__ = root API
  return axios.create({baseURL: constants.apiURL});
};