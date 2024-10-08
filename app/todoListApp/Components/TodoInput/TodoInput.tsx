/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from "./TodoInput.module.css"

const TodoInput = ({handleSearch}) => {

  const [searchText, setSearchText] = useState('');

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
    handleSearch(e.target.value); // Call the search function passed as a prop
  };


  return (
    <div className={styles.inputContainer}>
        <h1>TODO LIST</h1>
      <div>
        <input onChange={onSearchChange} placeholder='Search Note...' type='text'/>
        <img src='/images/vector.png' alt='/'/>
      </div>
    </div>
  )
}

export default TodoInput
