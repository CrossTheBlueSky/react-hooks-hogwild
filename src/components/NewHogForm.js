import React from "react"

function NewHogForm({onAdd}){

    const [newHog, setNewHog] = React.useState({name: "", specialty:"", weight: "", greased: "", "highest medal achieved": ""})

    function submitHandler(e){
        e.preventDefault()
        onAdd(newHog)

    }

    function changeHandler(e){
        const newKey = e.target.name
        const newVal = e.target.value
        setNewHog(prevHog => ({
            ...prevHog,
            [newKey] : newVal
        }))

        console.log(newHog)

    }

    return (
        <div>
        <form onSubmit={submitHandler}>
            <input name="name" type="text" value={newHog.name} onChange={changeHandler} required></input>
            <input name="specialty" type="text" value={newHog.specialty} onChange={changeHandler} required></input>
            <input name="weight" type="text" value={newHog.weight} onChange={changeHandler} required></input>
            <select name="greased" type="text" value={newHog.greased} onChange={changeHandler} required>
                <option defaultValue disabled="disabled" value="">Greasy?</option>
                <option>true</option>
                <option>false</option>
            </select>
            <input name="highest medal achieved" input="text" required value={newHog["highest medal achieved"]} onChange={changeHandler}></input>
            <button>Submit New Hog</button>
        </form>
        </div>
    )

}

export default NewHogForm