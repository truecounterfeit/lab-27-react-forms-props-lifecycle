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

    handleValue(e){
      this.setState({
        subReddit: even.target.value
      });
    }

    handleThread(e){
      this.setState({
        redditThread: event.target.value
      });
    }

    handleSubmit(e){

    }



  }

  render() {
    return (
      <div>
        <form>
          <label>Reddit Search Engine</label>
          <SearchResultList />
          <input type: 'submit' value: 'submit'>
        </form>
      </div>
    )
  }


}

class SearchResultList extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div>
        <ul>
          <li>
        </ul>
      </div>
    )
  }
}


















ReactDom.render(<App/>, document.getElementById('main'));
