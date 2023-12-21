import React, { Component } from 'react'

export class UserGraphCard extends Component {
  render() {
    const{text} = this.props;
    return (
      <div className='user-graph-card-section'>
      <div style={{textAlign:'left'}}>{text}</div>
        </div>
    )
  }
}

export default UserGraphCard