import React, { Component } from 'react'
import './App.css'

import axios from 'axios'

class Worm extends Component {

  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('xxx')
    axios.get(
      `https://api.github.com/users/${this.props.nome}`
    )
      .then(response => {
        console.log(response)        
        this.setState({username: response.data.name})
      }
    )
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>{this.props.label}</button>
        <p>{this.state.username}</p>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Worm label='Click me' nome='maecapozzi' />
        <Worm label='Click me' nome='FrankleyRocha' />
      </div>
    )
  }
}
export default App