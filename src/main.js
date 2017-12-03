'use strict';

import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redditList = [],
    }
  }

  render() {
    return (
      <div id = "searchform"></div>
    )
  }





}


















ReactDom.render(<App/>, document.getElementById('main'));
