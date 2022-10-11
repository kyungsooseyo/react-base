import React, { Component } from 'react';

export default class Field extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(evt) => {
            this.props.onChangeEvent(evt.target.value);
          }}
          value={this.props.value}
        />
      </div>
    );
  }
}
