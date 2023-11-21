import React from "react"

function Details({details, visible}){
    
    function clickHandler(){
        visible(false)
    }

    let isGreasy = "Nah, they ain't greasy"

    if(details.greased){
        isGreasy = "Yah, they greasy"
    }

 return (
    <dialog open>
        <h5>Name</h5>
        <p>{details.name}</p>
        <h5>Specialty</h5>
        <p>{details.specialty}</p>
        <h5>Weight</h5>
        <p>{details.weight}</p>
        <h5>Highest Medal Achieved</h5>
        <p>{details["highest medal achieved"]}</p>
        <h5>They Greasy?</h5>
        <p>{isGreasy}</p>
      <button onClick={clickHandler}>Close</button>
  </dialog>
 )
}

export default Details