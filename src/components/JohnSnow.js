import React from 'react'

function JohnSnow(props){
    function checkNull(){
        if(props.info === null){
            return "no date"
        }

        return props.info;
    }
    return(
      <div>
        <h1>When was Jon Snow born? {checkNull().born}</h1>
      </div>
    )
  }
  
export default JohnSnow