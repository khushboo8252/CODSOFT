import React from 'react'

const TodoItem = ({id, title, status,handleUpdate, handleDelete}) => {


  return (
    <div>
        <h3>{title}</h3>
        <button onClick={() => handleUpdate(id, status)}>{status ? "Completed" : "Pending"}</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  )
}

export default TodoItem;