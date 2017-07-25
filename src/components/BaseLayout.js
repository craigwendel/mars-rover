import React, { Component } from 'react'
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {

  render () {
    return (
      <div>
        <nav className='main-nav'>
          <div>
            <a href='/'>Mars Rover Images</a>
          </div>
          <div>
            <img src='http://lh3.googleusercontent.com/-HT0lteCRAZ4/T1aO9YYzWyI/AAAAAAAABaE/S2YBP2pdysI/s466/Mars_transparent.png' alt='' />
          </div>
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
