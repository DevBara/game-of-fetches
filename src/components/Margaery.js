import React, { Component } from 'react'
import axios from 'axios'

export default class Margaery extends Component {
    constructor(props){
        super(props);

        this.state={
            isLoaded:false,
            data: []
        }
    }

    //Now that state has been set. Lets work with the API
    //use axios get
    componentDidMount(){
        axios.get('http://anapioficeandfire.com/api/characters/16')

        //create promises
        .then(response => {
            const mTyrell = response.data;
            console.log("data",mTyrell)

            this.setState({data: mTyrell})
        })
        //catch is used if data is not returned from promise.
        //if nothing is returned, we will see error
        .catch(error => {
            console.log('Warning, error', error)
        })


    }
  

    render() {
        return (
            <div>
                <h1> When is Margaery Tyrell Birthday?</h1>
                <p>{this.state.data.born}</p>
            </div>
        )
    }
}
