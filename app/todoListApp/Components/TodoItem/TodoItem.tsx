"use client"
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import styles from "./TodoItem.module.css";
import Addnote from "../AddNote/Addnote";

const TodoItem = ({
  todos,
  addTodo,
  deleteTodo,
  toggleChecked,
  startEditing,
  saveEdit,
  cancelEdit,
  editId,
  editText,
  setEditText,
}) => {
  const [addNote, setAddNote] = useState(false);

  const toggleNote = () => {
    setAddNote((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.todoItemContainer}>
          {todos.length === 0 ? (
            <div className={styles.emptyIcon}>
              <img src="/images/Detective.png" alt="/" />
              <span>Empty...</span>
            </div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className={styles.todoItem}>
                {editId === todo.id ? (
                  <>
                   <div className={styles.editContainer}>
                   <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className={styles.editInput}
                    />
                    <div className={styles.saveCont}>
                       <button className={styles.save} onClick={() => saveEdit(todo.id)}>Save</button>
                       <button className={styles.cancel} onClick={cancelEdit}>Cancel</button>
                    </div>
                   </div>
                  </>
                ) : (
                  <>
                  <div className={styles.checkinput}>
                  <div className={styles.checkContainer}>
                     <input 
                       className={styles.checkk}
                       type="checkbox"
                       onClick={() => toggleChecked(todo.id)}
                     />
                  </div>
                  <div className={styles.textContainer}>
                     <span
                       className={todo.checked ? styles.checked : styles.check}>
                       {todo.text}
                     </span>
                  </div>
                  </div>
                  <div className={styles.edittrashContainer}>
                     <img 
                       className={styles.edit}
                       src="/images/edit.png" 
                       alt="/" 
                       onClick={() => startEditing(todo.id, todo.text)} 
                       />
                     <img
                      className={styles.trash}
                      src="/images/trash.png"
                      alt="/"
                      onClick={() => deleteTodo(todo.id)}
                      />
                   </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
        <button className={styles.plusbtn} onClick={toggleNote}>+</button>
      </div>
      {addNote && <Addnote addTodo={addTodo} toggleNote={toggleNote} />}
    </>
  );
};

export default TodoItem;


