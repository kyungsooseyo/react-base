import React, { Component } from 'react'

export default class getState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'abc'
    }
  }
  // = 初始化会调用这个钩子，每次更新也会调用这个钩子
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps', nextProps, nextState)
    return {
      name: nextState.name + '123'
    }
  }
  render() {
    return (
      <div>{this.state.name}
        <button onClick={() => this.setState({ name: 'qq' })}>change</button>
      </div>
    )
  }
}
