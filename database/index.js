const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  username: {
    type: String,
    unique: true
  },
  repos: [{
    repoAuthor: String,
    repoId: {
      type: Number,
      unique: true
    },
    repoName: String,
    repoDescription: String,
    starCount: Number,
    forkCount: Number
  }]
});

let Repo = mongoose.model('Repo', repoSchema);

async function save(userName, repoList) {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //check if database contains username already
  let searchResult = await Repo.find({username: userName})
  if (searchResult.length > 0) {
    //if so, delete existing user
    let deleted = await Repo.findOneAndDelete({username: userName})
  }
  //else create new
  console.log(repoList)
  let newUser = new Repo({
      username: repoList[0].owner.login,
      repos: []
  })
  repoList.forEach((repo) => {newUser.repos.push({
    repoAuthor: repo.owner.login,
    repoId: repo['id'],
    repoName: repo['name'],
    repoDescription: repo['description'],
    starCount: repo['stargazers_count'],
    forkCount: repo['forks_count']
  })})
  newUser.save((err, doc) => {
    if (err) {
      console.error(err)
    } else {
      console.log('New User ID: ', doc._id);
    }
  })
  return 'User Saved'
}

async function getTop25() {
  let top25Repos = [];
  const users = await Repo.find();
  let allRepos = [];
  for (let i = 0; i < users.length; i++) {
    allRepos = allRepos.concat(users[i].repos)
  }
  allRepos = allRepos.sort((a, b) => b.starCount - a.starCount)
  allRepos = allRepos.slice(0, 25)
  return allRepos
}

module.exports.save = save;
module.exports.getTop25 = getTop25;