import React from 'react'
import './App.css';
import axios from 'axios'
import JohnSnow from './components/JohnSnow.js'
import Houses from './components/Houses.js'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      characterData: null,
      houseData:null,
    };
  }

  async getHouses() {
    try {
      const abuelo = await axios.get('https://www.anapioficeandfire.com/api/houses');
      this.setState({ houses: whatever.data });
    } catch(e) {
      console.error(e);
    }
  }

  async componentDidMount(){
    const res= await axios.get ('https://anapioficeandfire.com/api/characters/583');
    this.setState({characterData: res.data})
  }

 

render(){
  return(
    <div className="app">
      <header className="App-header">
        <JohnSnow info={this.state.characterData} />
      </header>
    </div>
  )
}
}


export default App