
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchResultList from './searchResultList';


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      posts: [],
      searchFormLimit: ''
    };

    this.redditValue = this.redditValue.bind(this);
    this.redditResult = this.redditResult.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  redditValue(e){
    e.preventDefault();
    this.setState({
      redditSubmit: event.target.searchText
    });
  }

  redditResult(e){
    e.preventDefault();
    this.setState({
      redditThread: event.target.searchFormLimit
    });
  }

  // handleSearch(e){
  //   e.preventDefault();
  //   setState:
  // }
  //
  // handleChange(e){
  //   e.preventDefault();
  //   setState: event.target.searchText
  //   // set target
  // }

  handleSubmit(e){
    e.preventDefault();
    superagent.get(`https://www.reddit.com/r/${this.searchText}.json?limit=${this.searchFormLimit}`)
    .then((results) => {
      this.setState({finding: results.body.data.children});
      // this.setState({board:board})
    }).catch(console.log('searching...'));
  }

  renderList() {
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
        <ul className = 'list' >{this.renderList()}</ul>
      </div>
    )
  }

}

export default SearchForm;
