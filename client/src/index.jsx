import React from 'react';
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

function App() {

  const [repos, setRepos] = useState([]);
  const [totalRepoCount, setTotalRepoCount] = useState(0)

  useEffect(() => {
    getRepos()
  }, [])

  function getRepos() {
    $.get('http://127.0.0.1:1128/repos', (res) => {
      let response = JSON.parse(res);
      setTotalRepoCount(response.pop());
      setRepos(response);
    });
  }

  function search(term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:1128/repos',
      contentType: 'application/json',
      data: JSON.stringify({ searchedUsername: term }),
      success: (res) => {
        if (res !== 'User Saved') {
          alert(res)
        } else {
          getRepos()
        }
      },
      error: (error) => { console.error('Request Failed: ', error) }
    });
  }

  return (<div>
    <h1>Github Fetcher</h1>
    <Search onSearch={search} />
    <RepoList repos={repos} totalRepoCount={totalRepoCount} />
  </div>)
}

ReactDOM.render(<App />, document.getElementById('app'));