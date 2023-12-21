import React, { Component } from 'react'

export class PieChartCard extends Component {
  render() {
    const{text} = this.props;
    return (
        <div className='user-pie-card-section'>
        <div style={{textAlign:'left'}}>{text}</div>
       </div>
    )
  }
}

export default PieChartCard