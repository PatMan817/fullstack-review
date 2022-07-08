import React from 'react';
import RepoListItem from './RepoListItem.jsx';

function RepoList(props) {
  return (
    <div>
      <h4> There are {props.totalRepoCount} repos in the database. </h4>
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
          {props.repos.map((repo, index) => (
            <RepoListItem repo={repo} index={index} key={repo.Id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RepoList;