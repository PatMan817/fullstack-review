import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  getRepos() {
    $.ajax({
      type: "GET",
      url: 'http://127.0.0.1:1128/repos',
      contentType: 'application/json',
      success: (res) => {this.setState({repos: JSON.parse(res)})},
      error: (error) => {console.error('Request Failed: ', error)}
    });
  }

  componentDidMount() {
    this.getRepos()
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      type: "POST",
      url: 'http://127.0.0.1:1128/repos',
      contentType: 'application/json',
      data: JSON.stringify({searchedUsername: term}),
      success: (res) => {if (res !== 'User Saved') {
                          alert(res)
                          } else {
                            this.getRepos().bind(this)
                          }
                        },
      error: (error) => {console.error('Request Failed: ', error)}
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));