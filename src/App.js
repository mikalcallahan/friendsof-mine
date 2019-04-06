import React, { Component } from 'react'
import logo from 'logo.svg'
import 'app.scss'
import Header from 'components/Header'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
      </div>
    )
  }
}

export default App
