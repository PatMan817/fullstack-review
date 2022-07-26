import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Search from "./components/Search.jsx";
import RepoList from "./components/RepoList.jsx";

function App() {
  const [repos, setRepos] = useState();
  const [totalRepoCount, setTotalRepoCount] = useState(0);

  useEffect(() => {
    getRepos();
  }, []);

  function getRepos() {
    $.get("/repos")
      .done((res) => {
        let response = JSON.parse(res);
        setTotalRepoCount(response.pop());
        setRepos(response);
      })
      .fail((err) => console.error(err));
  }

  return (
    <>
      <h1>Github Fetcher</h1>
      <Search getRepos={getRepos} />
      <RepoList repos={repos} totalRepoCount={totalRepoCount} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
