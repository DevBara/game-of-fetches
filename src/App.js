import React from 'react'	
import './App.css';
import axios from 'axios'
import JohnSnow from './components/JohnSnow'




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterData: null,
      houses: null,
    
    };
  }

  johnSnow() {
    axios.get('https://anapioficeandfire.com/api/characters/583')
      .then( res => this.setState({ characterData: res.data })).catch(e => console.error(e))

  }

  componentDidMount() {
    this.johnSnow();
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
    
          <JohnSnow info={ this.state.characterData } />
        </header>
      </div>
    );
  }
}

export default App;






// class App extends React.Component{
//   constructor(props){
//     super(props);

//     this.state={
//       characters:null,
//     };
//   }

//   componentDidMount(){
//     const url ='https://anapioficeandfire.com/api/characters/583'
//     axios.get(url). then(res => res.data)
//     .then((data)=>{
//       this.setState({characters: data})
//     })
//   }

//   render(){
//     return(
//       <div className="app">
//         <header className="App-header">
//         <JohnSnow />
    
//         </header>
//       </div>
//     );
//   } 
// }


// export default App