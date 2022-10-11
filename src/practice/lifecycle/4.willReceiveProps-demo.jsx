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
    };
  }
  componentDidMount() {
    // axios({
    //   url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=8706576',
    //   headers: {
    //     'X-Client-Info': {
    //       a: '3000',
    //       ch: '1002',
    //       v: '5.2.0',
    //       e: '16451538485694868936458241',
    //     },
    //     'X-Host': 'mall.film-ticket.film.list',
    //   },
    // }).then((res) => {
    //   console.log(res.data);
    // });
  
  }
  componentWillReceiveProps(nextProps) {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/${nextProps?.type}`)
      .then((res) => {
        // console.log(res.data);
        this.setState({ films: res.data.message });
        return Promise.resolve('1')
      }).then(res2=>{
        console.log(res2);
      });
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
