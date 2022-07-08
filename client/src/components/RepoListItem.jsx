import React from 'react';

function RepoListItem(props) {
  return (
    <tr className="repo-list-entry media">
      <td><a href={"https://github.com/" + props.repo.repoAuthor + '/' + props.repo.repoName} target="_blank">{props.repo.repoName}</a></td>
      <td>{props.repo.repoDescription}</td>
      <td>{props.repo.repoAuthor}</td>
      <td>{props.repo.starCount}</td>
      <td>{props.repo.forkCount}</td>
    </tr>
  )
}

export default RepoListItem;