import { useState } from "react"

export function TodoInput(props) {

    const { handleAddTodo } = props
    const [newTodo, setNewTodo] = useState('')

    return (
        <div className="input-container">
            <input value={newTodo} onChange={(e) => {setNewTodo(e.target.value)}} type="text" placeholder="Add task"/>
            <button onClick={() => {
                if (!newTodo) { return }
                handleAddTodo(newTodo)
                setNewTodo('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}