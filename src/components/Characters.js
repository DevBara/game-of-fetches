import React from 'react'

function Character(props){
    function checkNull(){
        if(props.info === null){
            return "no date"
        }

        return props.info;
    }
    return(
      <div>
        <h1> Name of Character {checkNull().name}</h1> 
        <h1>When was Jon Snow born? {checkNull().born}</h1>
        <h1>Where was Margaret Tyrell born?{checkNull().born}</h1>

      </div>
    )
  }
  
export default Character