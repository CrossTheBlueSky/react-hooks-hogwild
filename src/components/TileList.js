import React from "react"
import Tile from "./Tile"
import Details from "./Details"


function TileList({hogs, onEmulsify, onDemulsify}){

    const [hogDetails, setHogDetails] = React.useState()
    const [visible, setVisible] = React.useState(false)
    const [demands, setDemands] = React.useState("GIVE ME THEM GREASY BOIS")

    function clickHandler(hog){

        setHogDetails({...hog})
        setVisible(true)
        
    }

    function visibilityHandler(bool){

        setVisible(bool)

    }

    function filterHandler(){

        if(demands === "GIVE ME THEM GREASY BOIS"){
            onDemulsify()
            setDemands("GIVE ME ALL THEM BOIS")
        } else if(demands === "GIVE ME ALL THEM BOIS"){
            setDemands("GIVE ME THEM GREASY BOIS")
            onEmulsify()
        }

    }


    const allHogs = hogs.map((hog)=>{
       return <Tile key={hog.name} hog={hog} name={hog.name} image={hog.image} onClick={clickHandler}/>
    })

    return (

        <div>
            <button onClick={filterHandler} style={{marginBottom: "50px"}}>{demands}</button>
            {visible && (<Details details={hogDetails} visible={visibilityHandler}/>)}
            {allHogs}
        </div>
    )

}

export default TileList