import axios from 'axios';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogList: [],
    };
  }
  async componentDidMount() {
    // axios.get('https://dog.ceo/api/breeds/image/random/5').then((res) => {
    //   this.setState({
    //     dogList: res.data.message,
    //   });
    // });
    const res = await axios.get('https://dog.ceo/api/breeds/image/random/5');
    this.setState({
      dogList: res.data.message,
    });
  }
  render() {
    return (
      <div>
        {this.state.dogList.length &&
          this.state.dogList.map((item, index) => {
            return <Dog key={index} src={item} id={index}></Dog>;
          })}
      </div>
    );
  }
}
class Dog extends Component {
  render() {
    return (
      <div>
        dog{this.props.id}
        <img src={this.props.src} style={{ width: '100px', height: '100px' }} />
      </div>
    );
  }
}
