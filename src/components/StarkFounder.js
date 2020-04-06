import React, { Component } from 'react'
import axios from 'axios'

//need to chain this url https://www.anapioficeandfire.com/api/characters/209"

export default class StarkFounder extends Component {
    constructor(props){
        super(props);

        this.state ={
            Founder:[],
        
        }

    }
   
    getFounder(){
        axios.get('https://www.anapioficeandfire.com/api/houses/362')
        .then(response => {
          this.setState({Founder: response.data.founder})
        }) 

        .catch(error => {
          console.log(error);
        })
    }

    componentDidMount(){
        this.getFounder();
    }
    
    
    render() {
        const {Founder} = this.state;

        return (
            <div>
                <h1>What's the name of the founder of House Stark?</h1>
                <p>{Founder}</p>
                
            </div>
        )
    }
}


    

    