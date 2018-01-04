import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchForm from './components/searchForm';
import SearchResultList from './components/searchResultList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      board: '',
      posts: []
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Reddit Search</h1>
        </header>
        <section>
          <SearchForm />
          <SearchResultList />
        </section>
        <footer>
          <h6>Lab27</h6>
        </footer>
      </div>
    )
  };

}

ReactDom.render(<App/>, document.getElementById('main'));
