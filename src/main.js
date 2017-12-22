'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Reddit Search</h1>
      <SeachForm />
      </div>
    )
  };

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redditList = [],
    }
  }


}

class SearchResultList extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}


















ReactDom.render(<App/>, document.getElementById('main'));
