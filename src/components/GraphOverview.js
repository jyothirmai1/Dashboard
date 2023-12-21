import React, { Component } from 'react'
import UserGraphCard from './UserGraphCard'
import PieChartCard from './PieChartCard'

export class GraphOverview extends Component {
  render() {
    return (
      <div className='graph-section__parent'>
        <UserGraphCard text="Users"/>
        <PieChartCard text="Users by Device"/>
      </div>
    )
  }
}

export default GraphOverview