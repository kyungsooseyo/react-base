import React, { Component } from 'react';
  //, 即使没有给子组件传递props，但是父组件更新了，也会触发子组件中的componentWillReceiveProps 
export default class willReceiveProps extends Component {
  state = {
    name: 'a',
  };
  render() {
    return (
      <div>
      
        <button onClick={() => this.setState({ name: 'b' })}>change</button>
        <Child name={this.state.name}></Child>
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    //~ console.log(this.props.name)  这个旧的props
    console.log('componentWillReceiveProps',nextProps);
  }

  render() {
    return <div>Child</div>;
  }
}
