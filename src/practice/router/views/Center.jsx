// import React, { Component } from 'react'

// export default class Center extends Component {
//   constructor(props) {
//     super(props)

//   }
//   render() {
//     console.log(this.props.match.params);
//     return (
//       <div>Center</div>
//     )
//   }
// }
import React from 'react'
import { useParams, useRouteMatch, useLocation } from 'react-router-dom'
export default function Center(props) {
  console.log(props);
  let params = useParams()
  console.log(params)
  // let match = useRouteMatch()
  // console.log(match)
  // let location = useLocation()
  // console.log(location)
  return (
    <div>Center
      <button onClick={() => { props.history.push('/filmOrder') }}>order</button>
    </div>
  )
}
