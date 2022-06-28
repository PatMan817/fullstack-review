import React from 'react';

const RepoListItem = (props) => (
  <tr className="repo-list-entry media">
    <td><a href={props.repo.repoURL} target="_blank">{props.repo.repoName}</a></td>
    <td>{props.repo.repoDescription}</td>
    <td>{props.repo.repoURL.slice(19).split('/')[0]}</td>
    <td>{props.repo.starCount}</td>
  </tr>
)

export default RepoListItem;