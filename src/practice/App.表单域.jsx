import React, { Component } from 'react';
import Field from './Field';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
    this.userName = React.createRef();
    this.password = React.createRef();
  }
  login = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <h1>login</h1>
        <Field
          label='user'
          type='text'
          onChangeEvent={(value) => this.setState({ userName: value })}
          ref={this.userName}
          value={this.state.userName}
        ></Field>
        <Field
          label='password'
          type='password'
          onChangeEvent={(value) => this.setState({ password: value })}
          value={this.state.password}
        ></Field>
        <button onClick={this.login}>登录</button>
        <button
          onClick={() =>
            this.setState({
              userName: '',
              password: '',
            })
          }
        >
          取消
        </button>
      </div>
    );
  }
}
