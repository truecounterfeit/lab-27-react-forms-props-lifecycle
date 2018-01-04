import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: '',
      posts: []
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
    superagent.get(`https://www.reddit.com/r/${board}.json?limit=${searchFormLimit}`)
    .then((results) => {
      this.setState({finding: results.body.data.children});
      this.setState({board:board})
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
      <div className = 'form'>
        <form onSubmit = {this.handleSubmit}>

          <input type = 'text' name = 'search' placeholder = 'Enter search' value = {this.state.redditSubmit} onChange = {this.state.redditValue} />

          <input type = 'number' name = 'results' min = '0' max = '10' placeholder = '# of results' value = {this.state.redditThread} onChange = {this.state.redditResult} />

          <button type = 'submit' value = 'submit' onClick={this.handleSubmit}>Search</button>
        </form>
        <ul>{this.renderThreadList()}</ul>
      </div>
    )
  }

}

export default SearchForm;
