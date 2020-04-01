import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      data: []
    }
  }

  componentDidMount() {
    
    fetch("http://anapioficeandfire.com/api/characters")
      .then(response => response.json()) // first response => resolved
      .then(
        result => {
          console.log(result.results)

          this.setState({
            isLoaded: true,
            items:result.results
          })


  render() {
    return (
      <div>
        <h1> Game of Thrones API </h1>
        
      </div>
    )
  }
}
