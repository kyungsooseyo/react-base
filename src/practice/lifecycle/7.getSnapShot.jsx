import React, { Component } from 'react'

export default class getSnapShot extends Component {
  //~ 触发时机是在render之后，但是在componentDidMount之前，返回值是componentDidUpdate的第三个参数
  state = {
    text: '11'
  }
  // componentWillUpdate(nextProps, nextState) { 
  //   console.log('7.getSnapShot componentWillUpdate')
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevState, snapshot);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('7.getSnapShot getSnapshotBeforeUpdate')
    return 'xx'
  }

  render() {
    console.log('render')
    return (
      <div>7.getSnapShot
        <button onClick={() => this.setState({
          text: '22'
        })}>click</button>
        {this.state.text}
      </div>
    )
  }
}