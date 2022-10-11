import React, { Component } from 'react';
const GlobalContext = React.createContext();
export default class App extends Component {
  render() {
    return (
      <GlobalContext.Provider
        value={{
          name: '张三',
          age: 18,
        }}
      >
        <div>
          <h1>hello world</h1>
          <GlobalContext.Consumer>
            {(value) => {
              // ~ qq 是下面的this.props.children
              return <Child value={value}>qq</Child>;
            }}
          </GlobalContext.Consumer>
        </div>
      </GlobalContext.Provider>
    );
  }
}

class Child extends Component {
  render() {
    console.log(this.props.children);
    return (
      <div>
        child {this.props.value.name}
        <GrandChild></GrandChild>
      </div>
    );
  }
}

class GrandChild extends Component {
  render() {
    return (
      <GlobalContext.Consumer>
        {(value) => {
          return <div>grand {value.age}</div>;
        }}
      </GlobalContext.Consumer>
    );
  }
}
