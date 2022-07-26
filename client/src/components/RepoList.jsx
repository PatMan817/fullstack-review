import React from "react";
import RepoListItem from "./RepoListItem.jsx";

function RepoList({ repos, totalRepoCount }) {
  return (
    <>
      <h4> There are {totalRepoCount} repos in the database. </h4>
      <table>
        <thead>
          <tr>
            <th>Repo Name</th>
            <th>Description</th>
            <th>Author</th>
            <th>Stars</th>
            <th>Forks</th>
          </tr>
        </thead>
        <tbody>
          {repos?.map((repo) => (
            <RepoListItem repo={repo} key={repo.repoId} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default RepoList;
