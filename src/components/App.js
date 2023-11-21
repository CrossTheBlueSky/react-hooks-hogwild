import React from "react";
import Nav from "./Nav";
import TileList from "./TileList"
import NewHogForm from "./NewHogForm"

import hogs from "../porkers_data";

function App() {

	const [allHogs, setAllHogs] = React.useState(hogs)

	function emulsifier(){
		setAllHogs(hogs)
	}

	function demulsifier(){
		setAllHogs(allHogs.filter((hog)=> hog.greased))
	}
	
	function addHandler(newHog){
		setAllHogs([...allHogs, newHog])
	}

	return (
		<div className="App">
			<Nav />
			<TileList hogs={allHogs} onDemulsify={demulsifier} onEmulsify={emulsifier}/>
			<NewHogForm onAdd={addHandler}/>
		</div>
	);
}

export default App;
