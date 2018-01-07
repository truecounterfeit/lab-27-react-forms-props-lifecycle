
import React from 'react';
import ReactDom from 'react-dom';

import SearchForm from './searchForm';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props)

    this.listItem = this.listItem.bind(this);
  }

  listItem(){
    {this.props.posts.map((listItem, i) =>
        <li key = {i}>
        <a href = {this.props.listItem.data.url}>
        <h5> {this.props.listItem.data.title} </h5>
        <p> {this.props.listItem.data.ups} </p>
        </a>
        </li>
      )}
    }

  render() {
    return (
      <div className = 'list'>
        <ul>{this.listItem}</ul>
      </div>
    )
  }
}


export default SearchResultList;
