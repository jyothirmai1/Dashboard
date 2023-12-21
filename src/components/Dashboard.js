import React, { Component } from 'react'
import Sidebar from './Sidebar'
import './Dashboard.css'
import Header from './Header'
import BlogOverview from './BlogOverview'
import GraphOverview from './GraphOverview'
 class Dashboard extends Component {
  render() {
    return (
      <div className='dashboard__parent'>
        <div className='dashboard__left'>
         <Sidebar/>
        </div>
        <div className='dashboard__right'>
          <Header/>
          <BlogOverview/>
          <GraphOverview/>
        </div>
      </div>
    )
  }
}

export default Dashboard