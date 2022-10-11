import axios from 'axios';
import React, { Component } from 'react';
// ~父子生命周期执行的顺序与vue类似,也是子先更新和渲染
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentWillMount() {
    console.log('parent will mount');
  }
  componentDidMount() {
    console.log('parent did mount');
    axios.get('https://dog.ceo/api/breeds/image/random/5').then((res) => {
      console.log(res.data);
    });
  }
  componentWillUpdate() {
    //· 在这个钩子里面拿到的state是旧的，但是在componentDidUpdate里面拿到的是新的
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('parent did update');
  }
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button
          onClick={() => {
            this.setState({ count: (this.state.count += 1) });
          }}
        >
          plus
        </button>
        <Child></Child>
      </div>
    );
  }
}

class Child extends Component {
  componentWillMount() {
    console.log('child will mount');
  }
  componentDidMount() {
    console.log('child did mount');
  }

  componentDidUpdate() {
    console.log('child did update');
  }
  componentWillReceiveProps() {}
  render() {
    return <div>Child</div>;
  }
}
