"use client"
import React, { useState } from 'react'
import styles from "./TodoList.module.css"
import TodoInput from './Components/TodoInput/TodoInput'
import TodoItem from './Components/TodoItem/TodoItem'
import Addnote from './Components/AddNote/Addnote'

const TodoList = () => {

  
  const [todos, setTodos] = useState([])
  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState("")
  const [searchText, setSearchText] = useState('');


  const addTodo = (text) => {
    if(text.trim() !== "") {
      setTodos([...todos, {id: Date.now(), text, checked: false}])
    }
  }

  const handleSearch = (text) => {
    setSearchText(text)
    console.log(text);
    
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const toggleChecked = (id) => {
    setTodos(todos.map(todo => todo.id === id ? 
      {...todo, checked: !todo.checked} : todo
    ))
  }

  const startEditing = (id, text) => {
    setEditId(id)
    setEditText(text)
  }

  const saveEdit = (id) => {
    setTodos(todos.map(todo => todo.id ===id ?
      {...todo, text: editText} : todo
    ))
    setEditId(null);
  setEditText("");
  }

  const cancelEdit = () => {
    setEditId(null)
    setEditText("")
  }

  const filtredTodos = todos.filter(todo => 
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  )
    


  return (
    <div className={styles.mainContainer}>
      <TodoInput handleSearch={handleSearch} />
      <TodoItem
        
       todos={filtredTodos}
       addTodo={addTodo}
       deleteTodo={deleteTodo}
       toggleChecked={toggleChecked}
       startEditing={startEditing}
       saveEdit={saveEdit}
       cancelEdit={cancelEdit}
       editId={editId}
       editText={editText}
       setEditText={setEditText}
      />
    </div>
  )
}

export default TodoList
