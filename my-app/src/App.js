import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import TaskList from "./components/TaskList"
import "./styles/App.css"
function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem("tasks")) || []
    setTasks(storageTasks)
  }, [])

  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]))
  }

  const removeTask = (taskForFilter) => {
    // console.log(taskForFilter)
    // console.log(id)
    setTasks(tasks.filter((task) => task.id !== taskForFilter.id))
    // console.log(tasks)
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <div className="App">
      <Header
        create={createTask}
        title={"ToDo"}
        countTasks={tasks.length > 0 ? tasks.length + " tasks" : "Tasks not found"}
      />
      <TaskList remove={removeTask} setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App
