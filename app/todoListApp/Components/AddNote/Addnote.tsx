import React, { useState } from 'react'
import styles from "./Addnote.module.css"

const Addnote = ({addTodo, toggleNote}) => {

  const [inputvalue, setInputvalue] = useState("")

  const handleAddTodo = () => {
    if(inputvalue.trim() !== "") {
      addTodo(inputvalue)
      setInputvalue("")
      toggleNote()
    }
  }

  return (
    <div className={styles.noteContainer}>
      <div className={styles.inputs}>
        <h2>New Note</h2>
        <input placeholder='Input your note...'
               type='text'
               value={inputvalue}
               onChange={(e) => setInputvalue(e.target.value)}
          />
      </div>
      <div className={styles.btns}>
        <button className={styles.btn1} onClick={toggleNote}>CANCEL</button>
        <button className={styles.btn2} onClick={handleAddTodo}>APPLY</button>
      </div>
    </div>
  )
}

export default Addnote
