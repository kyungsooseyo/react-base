// import React, { Component } from 'react'

// export default class My extends Component {
//   constructor(props){
//     super(props)
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <div>My</div>
//     )
//   }
// }

import React from 'react'
import { useLocation } from 'react-router-dom'
export default function My(props) {
  //· console.log(props);  props中能够location能够拿到state传递的参数，但是如果第一次进入页面，没有传递参数，那么location.state为undefined
  let location = useLocation()
  console.log(location); // 这个是能够拿到state的，同样第一次拿不到
  return (
    <div>My
      <p>ppp
        <span>span</span>
      </p>
    </div>
  )
}
