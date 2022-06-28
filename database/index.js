const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: String,
  repos: [{
    repoId: Number,
    repoName: String,
    repoURL: String,
    repoDescription: String,
    starCount: Number,
    forkCount: Number
  }]
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userName, repoList) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if (repoList.length === 0) {
    return
  }
  //check if database contains username already
    //if so, overwrite existing user
  //else create new
  let newUser = new Repo({
      username: userName,
      repos: []
  })
  repoList.forEach((repo) => {newUser.repos.push({
    repoId: repo['id'],
    repoName: repo['name'],
    repoURL: repo['html_url'],
    repoDescription: repo['description'],
    starCount: repo['stargazers_count'],
    forkCount: repo['forks_count']
  })})

  console.log(newUser.repos)
}

module.exports.save = save;