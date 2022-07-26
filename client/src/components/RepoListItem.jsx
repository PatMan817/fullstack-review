import React from "react";

function RepoListItem({ repo }) {
  return (
    <tr className="repo-list-entry media">
      <td>
        <a
          href={"https://github.com/" + repo.repoAuthor + "/" + repo.repoName}
          target="_blank"
        >
          {repo.repoName}
        </a>
      </td>
      <td>{repo.repoDescription}</td>
      <td>{repo.repoAuthor}</td>
      <td>{repo.starCount}</td>
      <td>{repo.forkCount}</td>
    </tr>
  );
}

export default RepoListItem;
