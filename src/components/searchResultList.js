
import React from 'react';
import ReactDom from 'react-dom';

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
          </a>
          </li>
        </ul>
      </div>
    )
  }
}


export default SearchResultList;
