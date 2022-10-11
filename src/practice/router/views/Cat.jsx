import React, { Component } from 'react'
import axios from 'axios'
export default class Cat extends Component {
  componentDidMount() {
    axios.get('/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=0BB1CCE0947C11EC960D61BFDBBA8DEA75244D6EFF924CEAA3369ED37933537B&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <div>Cat
        <p>ppp
          <span>span</span>
        </p>
      </div>
    )
  }
}

