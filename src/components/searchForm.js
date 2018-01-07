
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

import SearchResultList from './searchResultList';


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: '',
      posts: null,
      // postsError: null,
      searchFormLimit: '',
    };

    // this.redditValue = this.redditValue.bind(this);
    // this.redditResult = this.redditResult.bind(this);

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // redditValue(e){
  //   e.preventDefault();
  //   this.setState({
  //     redditSubmit: event.target.searchText
  //   });
  // }
  //
  // redditResult(e){
  //   e.preventDefault();
  //   this.setState({
  //     searchFormLimit: e.target.value
  //   });
  // }

  handleChange(e){
    e.preventDefault();
    this.setState({
      searchText: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    superagent.get(`https://www.reddit.com/r/${this.state.searchText}.json?limit=100`)
    // console.log('searching...');

    .then(res => {
      this.setState({
      posts: res.body.data.children,
      // postsError: null
      });
      console.log('found!');
    })
    //
    .catch(err => {
      // console.error(err);
      this.setState({
        searchErrorMessage: `Unable to find Reddit`
      })
    });
  }

    // if(!this.state.posts[this.searchText]) {
    //   this.setState({
    //     posts: null,
    //     // postsError: name
    //   });
    //   console.error();
    // };

    // <input type = 'text' name = 'search' placeholder = 'Enter search' value = {this.state.redditSubmit} onChange = {this.state.redditValue} className = 'error'/>
    //        <input type = 'text' name = 'search' placeholder = 'Enter search' value = {this.state.handleChange} className = 'error'/>

    // <input type = 'number' name = 'results' min = '0' max = '100' placeholder = '# of results' />
    // <input type = 'number' name = 'results' min = '0' max = '100' placeholder = '# of results' value = {this.state.redditThread} onChange = {this.state.redditResult} />


  render() {
    return (
      <div className = 'form'>
        <form onSubmit = {this.handleSubmit}>

        <input
        type= 'text'
        name= 'posts'
        onChange = {this.handleChange} />

        <button type = 'submit'> Submit </button>
        </form>

      </div>
    )
  }

}

export default SearchForm;
