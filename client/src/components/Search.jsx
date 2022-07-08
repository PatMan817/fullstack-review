import React from 'react';
import { useState } from 'react';

function Search(props) {

  const [term, setTerm] = useState('');

  function onChange (e) {
    setTerm(e.target.value);
  }

  function search() {
    props.onSearch(term);
  }

    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </div>)
}

export default Search;