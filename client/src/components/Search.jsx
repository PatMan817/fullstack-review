import React from "react";
import { useRef } from "react";
import $ from "jquery";

function Search({ getRepos }) {
  const searchInput = useRef();

  function search(e) {
    e.preventDefault();
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
      <form onSubmit={search}>
        <label>
          Enter a github username:
          <input required type="text" ref={searchInput} />
        </label>
        <button type="submit"> Add Repos </button>
      </form>
    </>
  );
}

export default Search;
