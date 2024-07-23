import React ,{useEffect, useState}from 'react';
import axios from 'axios';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';



const Todo = () => {
    const [todo, setTodo] = useState([]);

    const getData = async() =>{
        try {
          const {data} = await  axios({
                method:"GET",
                baseURL:import.meta.env.VITE_BASE_URL,
                url:"/todos",
            })
            setTodo(data)
           
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
       getData()

    },[]);

    const handleAdd = (title) =>{
        const newTodo ={
            title,
            status: false,
        };

        axios({
            method:"POST",
            baseURL:import.meta.env.VITE_BASE_URL,
            url:"/todos",
            data:newTodo,
            headers:{
                "Content-Type":"application/json"
            },
        }).then(()=> getData())
          .catch((err) =>console.log(err));
         
    };

    const handleUpdate = (id,status) =>{
        axios({
            method:"PATCH",
            baseURL:import.meta.env.VITE_BASE_URL,
            url:`/todos/${id}`,
            data:{status: !status},
        }).then(() => getData())
        .catch ((err) => console.log(err));
    };

     const handleDelete = (id) =>{
           axios({
            method:"DELETE",
            baseURL:import.meta.env.VITE_BASE_URL,
            url:`/todos/${id}`
           }).then(() => getData())
           .catch((err) => console.log(err));
     }

    
  return (
    <div>
        <h1>Add Todo List</h1>
        <TodoInput handleAdd={handleAdd} />
        <div>
        {todo.map((el) =>(
             <TodoItem {...el} key={el.id} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        ))}
        </div>
    </div>
  )
}

export default Todo;