
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
      postsError: null,
      searchFormLimit: '',
    };

    this.redditValue = this.redditValue.bind(this);
    this.redditResult = this.redditResult.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch(e){
    e.preventDefault();
    this.setState({
      posts: req
    })
  }

  handleSubmit(e){
    e.preventDefault();
    superagent.get(`https://www.reddit.com/r/${this.searchText}.json?limit=${this.searchFormLimit}`)
    // console.log('searching...');

    .then((res) => {
      this.setState({
      posts: res.body.data.children,
      postsError: null
      });
      console.log('found!');
    })

    .catch(
      this.setState({
      posts: null,
      postsError: name
      })

    );

    if(!this.state.posts[this.searchText]) {
      this.setState({
        posts: null,
        postsError: name
      });
      console.error();
    };

    }

  renderList() {
    if(this.state.posts)
      return this.state.posts.map(found => {
        return <SearchResultList listItem = {found} />;
      })
  }

  render() {
    return (
      <div className = 'form'>
        <form onSubmit = {this.handleSubmit}>

          <input type = 'text' name = 'search' placeholder = 'Enter search' value = {this.state.redditSubmit} onChange = {this.state.redditValue} className = 'error'/>

          <input type = 'number' name = 'results' min = '0' max = '100' placeholder = '# of results' value = {this.state.redditThread} onChange = {this.state.redditResult} />

          <button type = 'submit' value = 'submit' onClick={this.handleSubmit}>Search</button>

        </form>
        <ul className = 'list' >{this.renderList()}</ul>
      </div>
    )
  }

}

export default SearchForm;
