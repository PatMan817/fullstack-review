import React from "react";
import { useRef } from "react";
import $ from "jquery";

function Search({ getRepos }) {
  const searchInput = useRef();

  function search() {
    console.log(`${searchInput.current.value} was searched`);
    // TODO
    $.post("/repos", { searchedUsername: searchInput.current.value })
      .done((res) => {
        if (res !== "User Saved") {
          alert(res);
        } else {
          getRepos();
        }
      })
      .fail((err) => console.error("Request Failed: ", err));
  }

  return (
    <>
      <h4>Add more repos!</h4>
      Enter a github username: <input ref={searchInput} />
      <button onClick={search}> Add Repos </button>
    </>
  );
}

export default Search;
