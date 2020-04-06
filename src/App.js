import React, { Component } from 'react'
// import axios from 'axios'
import Tyrell from './components/Tyrell'
import Targaryen from './components/Targaryen'
import Lannister from './components/Lannister'
import Baratheon from './components/Baratheon'
import RobertAlias from './components/RobertAlias'

export default class App extends Component {

  render() {
    return (
      <div>
        <Tyrell />
        <Targaryen />
        <Lannister />
        <Baratheon />
        <RobertAlias />
        
      </div>
    )
  }
}
