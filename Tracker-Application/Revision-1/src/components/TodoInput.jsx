import React,{useState} from 'react'

const TodoInput = ({handleAdd}) => {
    const [title, setTitle] = useState("")
    

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} value={title} type='text' placeholder='Add todo here...'/>
        <button onClick={() =>handleAdd(title)}>ADD</button>
       
    </div>
  )
}

export default TodoInput;