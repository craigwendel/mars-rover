import React, { Component } from 'react'
import '../styles/App.css'
import GetImageForm from './GetImageForm'
import BaseLayout from './BaseLayout'

class App extends Component {
  render () {
    return (
      <div>
        <BaseLayout>
          <GetImageForm />
        </BaseLayout>
      </div>
    )
  }
}

export default App
