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
        <header>
          <h1>Reddit Search</h1>
        </header>
        <section>
          <SeachForm />
        </section>
        <footer>
          <h6>Lab27</h6>
        </footer>
      </div>
    )
  };

}

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // redditList = [],
    };
  }

  redditValue(e){
    this.setState({
      redditSubmit: even.target.value
    });
  }

  redditResult(e){
    this.setState({
      redditThread: event.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    superagent.get(`http://reddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`)
    .then((results) => {
      this.setState({finding: results.body.data.children });
    }).catch(console.log('searching...'));
  }

  renderThreadList() {
    if(this.state.finding)
      return this.state.finding.map(thread => {
        return <SearchResultList listItem = {thread} />;
      })
  }

  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          // <label>
          //   <h1>Reddit Search Engine</h1>
          // </label>
          // </br>
          <label>
            Name:
            <input type = 'text' value = {this.state.redditSubmit} onChange = {this.state.redditValue}>
          </label>
          </br>
          <label>
            Total Results:
            <input type = 'text' value = {this.state.redditThread} onChange = {this.state.redditResult}>
          </label>
          <input type = 'submit' value = 'submit' />
        </form>
        <ul>{this.renderThreadList()}</ul>
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
          <li> <a href = {this.props.listItem.data.url}>
          <h5> {this.props.listItem.data.title} </h5>
          <p> {this.props.listItem.data.ups} </p>
        </ul>
      </div>
    )
  }
}


















ReactDom.render(<App/>, document.getElementById('main'));
