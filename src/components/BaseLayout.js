import React, { Component } from 'react'
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {

  render () {
    return (
      <div>
        <nav className='main-nav'>
          <a href='/'>Mars Rover Images</a>
        </nav>
        <header className='header'>
          <h1>Welcome to Mars Rover Images</h1>
          <p>Select from the form below to get the most up to date images of Mars</p>
        </header>

        {this.props.children}

        <footer className='footer'>
          <h4>Copyright Craig A. Wendel Productions | 2017</h4>
        </footer>
      </div>
    )
  }
}
