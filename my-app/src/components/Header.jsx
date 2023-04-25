import React from "react"
const Header = ({ title, countTasks, create }) => {
  const addNewTask = (e) => {
    e.preventDefault()
    const newTask = { id: Date.now(), isCompleted: false, title: "", time: "00:00" }
    create(newTask)
  }

  return (
    <div className="header">
      <h1>{title}</h1>
      <p>{countTasks}</p>
      <button className="header__button_add" onClick={addNewTask}>
        Add New
      </button>
    </div>
  )
}
export default Header
