import React, { Component } from 'react'
import axios from 'axios'
export default class getSnapDemo extends Component {
  state = {
    list: [1, 2, 3, 4, 5]
  }
  myRef = React.createRef()
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(this.myRef.current.scrollHeight, this.myRef.current.scrollTop)
    return this.myRef.current.scrollHeight
  }
  componentDidMount() {
    // window.fetch('https://dog.ceo/api/breeds/image/random/5').then(res => res.json()).then(res => {
    //   console.log('rrr', res);
    // })
    axios.get('https://dog.ceo/api/breeds/image/random/5').then(res => { console.log('rrr', res) })
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    this.myRef.current.scrollTop += this.myRef.current.scrollHeight - snapshot
    console.log(this.myRef.current.scrollHeight, this.myRef.current.scrollTop)

  }
  render() {
    return (
      <div>8.getSnap-demo
        <div style={{ height: '200px', overflow: 'auto' }} className="wrapper" ref={this.myRef}>
          <ul>
            {
              this.state.list.map((item, index) => {
                return <li key={index} style={{ height: '80px', backgroundColor: 'pink' }}>{item}</li>
              })
            }
          </ul>
        </div>
        <button onClick={() => this.setState({
          list: [...[7, 8, 9, 10, 11, 12, 13, 14], ...this.state.list]
        })}>add</button>
      </div>
    )
  }
}
