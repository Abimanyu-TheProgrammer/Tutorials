import React from 'react'

function Todos (props) {

    const todoList = props.todos.length ? (
            props.todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.name}</p>
                        <button onClick={() => props.DelTask(todo.id)}>Mark as Finished</button>
                    </div>
                )
            })
    ) : (
        <p>Your Tasks Are Complete</p>
    )

    return(
      todoList
    )
}

export default Todos