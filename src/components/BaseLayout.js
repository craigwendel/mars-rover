import React, { Component } from 'react'

export default class BaseLayout extends Component {

  render () {
    return (
      <div>
        <nav>

        </nav>
        {this.props.children}
        <footer>

        </footer>
      </div>
    )
  }
}
