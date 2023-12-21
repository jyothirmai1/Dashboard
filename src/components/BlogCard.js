import React, { Component } from 'react'

export class BlogCard extends Component {
  render() {
    const{heading, number,percentage} = this.props;
    return (
      <div className='blog__card-parent'>
      <div style={{fontSize:'10px',color:'grey'}}>{heading}</div>
      <div style={{fontSize:'24px',fontWeight:600}}>{number}</div>
      <div style={{fontSize:'9px'}}>{percentage}</div>
      </div>
    )
  }
}

export default BlogCard