import React, { Component } from 'react';

export default class should extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [1, 2, 3, 4, 5],
      current: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(JSON.stringify(nextState), 'next');
    console.log(JSON.stringify(this.state), 'this');
    if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
      return false;
    }
    return true;
  }
  render() {
    console.log('render');
    return (
      <div>
        <input
          type='number'
          onChange={(evt) => {
            this.setState({ current: evt.target.value });
          }}
        />
        <div style={{ overflow: 'hidden' }}>
          {this.state.list.map((item, index) => {
            return (
              <Box key={index} current={this.state.current} index={index}></Box>
            );
          })}
        </div>
      </div>
    );
  }
}

class Box extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.current == this.props.index || nextProps.current == nextProps.index) {
      return true;
    }
    return false
  }
    render() {
    console.log('box render');
    return (
      <div
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid green',
          margin: '10px',
          float: 'left',
          backgroundColor:
            this.props.current == this.props.index ? 'pink' : 'skyblue',
        }}
      >
        Box
      </div>
    );
  }
}
