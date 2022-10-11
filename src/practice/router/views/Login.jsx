import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
export default class Login extends Component {
  constructor(props) {
    super(props)
  }
  setToken = () => {
    localStorage.setItem('token1', '123')
    this.props.history.push('/center/11')

  }
  render() {
    console.log('login',this.props);
    return (
      <div>Login
        <button onClick={this.setToken}>set</button>
        {/* <Child {...this.props}></Child> */}
        <WithChild></WithChild>
      </div>
    )
  }
}

class Child extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    //! 他爹的props里面有router相关的东西，但是他就没有了,除非父亲再{...this.props}传递一遍;或者用withRouter包一下
    console.log('child',this.props);
    return (
      <div>Child</div>
    )
  }
}
const WithChild = withRouter(Child)