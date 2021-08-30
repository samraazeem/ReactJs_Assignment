import React, { Component } from 'react'
import './App.css'

import BlogList from './Blog/BlogList';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BlogList />
      </div>
    )
  }
}

export default App