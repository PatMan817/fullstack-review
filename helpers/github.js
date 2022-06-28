const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  let API_URL = `https://api.github.com/users/${username}/repos`
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: API_URL,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  return axios.get(API_URL, options)
    .catch((err) => 'User does not exist')
}

module.exports.getReposByUsername = getReposByUsername;