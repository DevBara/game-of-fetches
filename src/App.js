import React from 'react'
import './App.css';
import axios from 'axios'
import Character from './components/Characters.js'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      characterData: null,
    };
  }

  async getHouses(){
    try {
      const make = await axios.get('https://www.anapioficeandfire.com/api/houses');
      this.setState({})
    } catch (e){
      console.error(e)
    }
  }
  async componentDidMount(){
    const res= await axios.get ('https://anapioficeandfire.com/api/characters/583');
    this.setState({characterData: res.data})
  }

  async getTyrell(){
    try{
      const tyrell = await axios.get('http://anapioficeandfire.com/api/characters/16');
      this.setState({})
    } catch (e){
      console.error(e)
    }
  }

render(){
  return(
    <div className="app">
      <header className="App-header">
        <Character info={this.state.characterData} />
      </header>
    </div>
  )
}
}


export default App