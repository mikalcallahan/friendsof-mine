import React, { Component } from 'react'
import logo from 'logo.svg'
import Header from 'components/Header'
import Home from 'pages/Home'
import 'app.scss'

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  )
}

export default App
