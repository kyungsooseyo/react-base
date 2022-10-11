
import React, { Component } from 'react';
import Hello from './components/Hello';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a: { bv: 'c' },
    };
  }
  render() {
    let obj = { name: 'tom', age: 12, gender: 1 };
    return (
      <div className='app'>
        <Hello {...obj} age={19}></Hello>
      </div>
    );
  }
}
