import React, { Component } from 'react'
import axios from 'axios'



export default class RobertAlias extends Component {
    constructor(props){
        super(props);

        this.state ={
            Robert:[],
        
        }
    }

    getAlias(){
        axios.get('https://www.anapioficeandfire.com/api/characters/901')
        .then(response => {
          this.setState({Robert: response.data.aliases[1]})
        })
        .catch(error => {
          console.log(error);
        })
    }

    componentDidMount(){
        this.getAlias();
    }
    
    
    render() {
        const {Robert} = this.state;

        return (
            <div>
                <h1>What is Robert Baratheon's second alias?</h1>
                <p>{Robert}</p>
                
            </div>
        )
    }
}


    

    