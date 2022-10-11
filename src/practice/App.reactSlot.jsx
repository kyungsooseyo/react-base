import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
          <h2>111</h2>
          <h2>222</h2>
        </Child>
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        Child.reactSlot
        {/* 在这提前留个位置，也就相当于插槽了;要是写多个，那么就会渲染多个children */}
        {/* {this.props.children} */}
        {/* {this.props.children} */}
        {/* {this.props.children} */}
        
        {/* 下面写了俩相当于就写了一个 this.props.children */}
        {this.props.children[0]}
        {this.props.children[1]}
      </div>
      
    );
  }
}
