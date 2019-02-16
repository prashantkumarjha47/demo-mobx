import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'


@observer
class App extends Component {
  @observable text = "hello"

  constructor(props) {
    super(props)
    this.props = props
  }

  componentDidMount() {
    this.text = "prksh Bhaiya"
    console.log(this.props);

  }
  render() {
    return (
      <div className="App">
        {this.text}
      </div>
    );
  }
}

export default inject('Store')(App);
