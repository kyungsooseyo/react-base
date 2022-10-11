import React, { Component } from 'react';
import axios from 'axios';
export default class willReceivePropsDemo extends Component {
  state = {
    type: 1,
  };
  render() {
    return (
      <div>
        <ul>
          <li
            onClick={() =>
              this.setState({
                type: 1,
              })
            }
          >
            now
          </li>
          <li
            onClick={() =>
              this.setState({
                type: 2,
              })
            }
          >
            will
          </li>
        </ul>
        <FilmList type={this.state.type}></FilmList>
      </div>
    );
  }
}
class FilmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      type: 1,
    };
  }
  componentDidMount() {

  }
  //- 虽然这个钩子会调用多次，但是至于什么时候return，就像setState一样，多次setState后，只有最后一次生效;所以在这个钩子里面不能进行异步请求，并不会等待返回结果，就会直接return
  // ~ 这个函数是代替willMount 和willReceiveProps的解决方案
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps', nextProps, nextState);
    // if (nextProps.type !== prevState.type) {
    //   return {
    //     type: nextProps.type,
    //   };
    // }

    // return null;
    return {
      type: nextProps.type,
    }
  }
  componentDidUpdate(prevProps, prevState) {
    // ! 如果不这么判断就会一直发送请求，因为getDerivedStateFromProps会调用多次
    if (this.state.type == prevProps.type) {
      return;
    }
    axios.get(`https://dog.ceo/api/breeds/image/random/${this.state.type}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ films: res.data.message });
      })
    // console.log(this.state.type);
  }
  render() {
    return (
      <div>
        {this.state.films.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              style={{ width: '100px', height: '100px', margin: '0 20px' }}
            ></img>
          );
        })}
      </div>
    );
  }
}
