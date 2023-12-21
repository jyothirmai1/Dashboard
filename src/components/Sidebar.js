import React, { Component } from 'react'
import './Dashboard.css'

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar__parent'>
       <div className='sidebar__panel-item'>Shards Dashboard</div>
       <div  className='sidebar__panel-item' style={{color:'#425eeb'}}>Blogs Dashboard</div>
       <div  className='sidebar__panel-item'>Blog Posts</div>
       <div  className='sidebar__panel-item'>Add New Post</div>
       <div  className='sidebar__panel-item'>Forms & Components</div>
       <div  className='sidebar__panel-item'>Tables</div>
       <div  className='sidebar__panel-item'>User Profiles</div>
       <div  className='sidebar__panel-item'>Errors</div>
      </div>
    )
  }
}

export default Sidebar