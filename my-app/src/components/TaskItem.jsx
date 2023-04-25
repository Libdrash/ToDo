import React from "react"

const TaskItem = ({ editTaskTitle, editTaskTime, title, time, id, remove, taskForFilter }) => {
  const handleTaskInputTitle = (e) => {
    const newTaskTitle = e.target.value
    editTaskTitle(id, newTaskTitle)
  }
  const handleTaskInputTime = (e) => {
    const newTaskTime = e.target.value
    editTaskTime(id, newTaskTime)
  }

  return (
    <div className="task">
      <button className="buttons_complete"></button>
      <div className="task__inputs">
        <input
          className="inputTitle"
          onBlur={handleTaskInputTitle}
          defaultValue={title}
          placeholder="...type any here"
          type="text"
        />
        <input className="inputTime" onBlur={handleTaskInputTime} defaultValue={time} type="time" />
      </div>
      <button onClick={() => remove(taskForFilter)} className="buttons_remove">
        X
      </button>
    </div>
  )
}
export default TaskItem
