import React from "react"

function Tile({hog, name, image, onClick}){

    const [hidden, setHidden] = React.useState(false)

    function clickHandler(e){
        e.preventDefault()
        onClick(hog)

    }

    function hider(){
        setHidden(true)
    }

    return (
        <div hidden={hidden}>
            <h3>{name}</h3>
            <button onClick={hider}>Hide this boi</button>
            <br />
            <img src={image}  onClick={clickHandler}></img>
        </div>


    )
}

export default Tile