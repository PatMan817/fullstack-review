import React from 'react';
import RepoListItem from './RepoListItem.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    <table>
      <thead>
        <tr>
          <th>Repo Name</th>
          <th>Description</th>
          <th>Author</th>
          <th>Stars</th>
        </tr>
      </thead>
      <tbody>
        {props.repos.map((repo, index) => (
          <RepoListItem repo={repo} index={index} key={repo.Id}/>
        ))}
      </tbody>
    </table>
  </div>
)

export default RepoList;