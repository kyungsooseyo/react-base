import React, { Component } from 'react';

export default class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { isHot: true };
  }
  componentWillMount(){
    console.log('will mount');
  }
  shouldComponentUpdate(){
    console.log('should');
    return true
  }
  componentWillUpdate(){
    console.log('will update');
  }
  
  toggle = (params) => {
    // console.log(this);
    this.setState({ isHot: !this.state.isHot });
    // console.log(this);
    // console.log(params);
    // console.log(this.qq);
    // console.log(this.title.current);
  };
  // static defaultProps = {
  //   qq: 'qq',
  // };/
  handleBlur = () => {
    alert(this.input2.value);50
  };
  title = React.createRef();
  render() {
    return (
      <div>
        <h2
          ref={(node) => {
            this.qq = node;
          }}
        >
          {this.state.isHot ? 'warm' : 'cold'}
        </h2>
        <button onClick={() => this.toggle('a')}>hello</button>
        <h3 ref={this.title}>嘻嘻嘻</h3>
        <input
          type='text'
          onBlur={this.handleBlur}
          ref={(node) => (this.input2 = node)}
        />
      </div>
    );
  }
}
// export default function Hello(params) {
//   return (
//     <div>
//       <strong>hello</strong>
//     </div>
//   );
// }
