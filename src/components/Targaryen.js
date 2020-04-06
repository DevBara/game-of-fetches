import React, { Component } from 'react'
import axios from 'axios'

export default class Targaryen extends Component {
    constructor(props){
        super(props);

        this.state ={
            Targaryen:"",
        
        }
    }

    getTargaryen(){
        axios.get('https://www.anapioficeandfire.com/api/houses/378')
        .then(response => {
          this.setState({Targaryen: response.data.region})
        })
        .catch(error => {
          console.log(error);
        })
    }

    componentDidMount(){
        this.getTargaryen();
    }
    
    
    render() {
        const {Targaryen} = this.state;
       

        return (
            <div>
                <h1>What region is House Targaryen in?</h1>
                
                <p>{Targaryen}</p>
            </div>
        )
    }
}


    

    