import React from "react"
import "./TodoItem.css"

const TodoItem = ({ task, deleteTasks, editTasks, toggleCompleted }) => {
  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleCompleted(task.id)}
      />
      <p
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.input}
      </p>
      <button
        onClick={() => deleteTasks(task.id)}
        style={{ background: "red" }}
      >
        X
      </button>
      <button onClick={() => editTasks(task.id)}>Edit</button>
    </div>
  )
}

export default TodoItem
