import React, { Component } from 'react';
import { getNewTimestamp } from './helpers/dateTimeHelpers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      clickArray: []
    }
  }

  handleClick = () => {
    const now = getNewTimestamp();

    this.setState({ clickArray: [...this.state.clickArray, now] })
  }

  componentDidUpdate() {
    document.title = this.state.clickArray.length;
  }

  render() {
    return (
      <div className="container">
        <h1>React e <em>Class Components</em></h1>
        <button onClick={this.handleClick}>Clique aqui</button>
        <ul>{this.state.clickArray.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
    );
  }
}
