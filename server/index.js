const express = require('express');
let app = express();
const cors = require('cors');
const getReposByUsername = require('../helpers/github.js').getReposByUsername;
const save = require('../database/index.js').save;

app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json())

app.post('/repos', async function (req, res) {
  // TODO - your code here!
  var username = req.body.searchedUsername;
  let repoData = await getReposByUsername(username);
  repoData = repoData.data;
  save(username, repoData);
  res.end('Data Saved')
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', async function (req, res) {
  // TODO - your code here!
  res.end('Hello')
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

