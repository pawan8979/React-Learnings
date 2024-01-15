import React, { useState, useEffect } from "react"
import TodoItem from "./TodoItem"
import "./TodoList.css"

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  const [input, setInput] = useState("")
  const [tasksRemaining, setTasksRemaining] = useState(0)
  const [toggleBtn, setToggleBtn] = useState(true)
  const [isEditItem, setIsEditItem] = useState(null)

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    setTasksRemaining(tasks.filter((task) => !task.completed).length)
  }, [tasks])

  const addTasks = (input) => {
    if (!input) return
    else if (input && !toggleBtn) {
      setTasks(
        tasks.map((task) => {
          if (task.id === isEditItem) {
            return { ...task, input: input }
          }
          return task
        })
      )
      setToggleBtn(true)
      setInput("")
      setIsEditItem(null)
    } else {
      const newTask = {
        id: new Date().getTime().toString(),
        input,
        completed: false,
      }
      setTasks([...tasks, newTask])
      setInput("")
    }
  }

  const editTasks = (id) => {
    let editItem = tasks.find((task) => {
      return task.id === id
    })
    setToggleBtn(false)
    setInput(editItem.input)
    setIsEditItem(id)
  }

  const deleteTasks = (id) => {
    const deletedTask = tasks.filter((task) => id !== task.id)
    setTasks(deletedTask)
  }

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }
        } else {
          return task
        }
      })
    )
  }

  const handleClear = () => {
    setTasks([])
    setToggleBtn(true)
    setInput("")
  }

  return (
    <div className='todo-list'>
      <div className='header'>Pending tasks ({tasksRemaining})</div>
      <div className='heading-wrapper'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add a new task'
        />
        <button className='head-btn' onClick={() => addTasks(input)}>
          {toggleBtn ? "Add" : "Edit"}
        </button>
        <button className='head-btn' onClick={handleClear}>
          Clear All
        </button>
      </div>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTasks={deleteTasks}
          editTasks={editTasks}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  )
}

export default TodoList
