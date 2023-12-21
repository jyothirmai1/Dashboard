import React, { Component } from 'react'

 class Header extends Component {
  render() {
    return (
        <div className='header__parent'>
      <div>
        <input type="text" className='header__input' placeholder='Search for something'/>
      </div>
      <div className='header__notif-icon'>
        icon
      </div>
      <div className='header__profile-icon'>
        icon
      </div>

      </div>
    )
  }
}

export default Header