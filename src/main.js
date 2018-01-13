import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchForm from './components/searchForm';
import SearchResultList from './components/searchResultList';

class App extends React.Component {
  //handle state, then distribute to components
  constructor(props) {
    super(props)
    this.state = {
      posts: null,

    }

    this.getResults = this.getResults.bind(this);
  }

  getResults(searchText, searchFormLimit) {

    superagent.get(`https://www.reddit.com/r/${searchText}.json?limit=${searchFormLimit}`)


    .then(res => {

      this.setState({
      posts: res.body.data.children,

      });
      console.log('found!');
    })

    .catch(err => {

      this.setState({
        searchErrorMessage: `Unable to find Reddit`
      })
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Reddit Search</h1>
        </header>
        <section>
          <SearchForm
          getResults={this.getResults} />
          <SearchResultList posts={this.state.posts} />
        </section>
        <footer>
          <h6>Lab27</h6>
        </footer>
      </div>
    )
  };

}

ReactDom.render(<App/>, document.getElementById('main'));
