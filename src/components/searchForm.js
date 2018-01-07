
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

    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e){
    e.preventDefault();
    this.setState({
      searchText: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    let posts = this.state.posts;
    this.props.getResults(posts);
  }


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
