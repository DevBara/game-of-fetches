import React from 'react'

function Houses(props){
    function checkNull(){
        if(props.info === null){
            return "no date"
        }

        return props.info;
    }
    return(
      <div>
        <h1>What region is House Targaryen in?{checkNull().houses}</h1>

      </div>
    )
  }
  
export default Houses