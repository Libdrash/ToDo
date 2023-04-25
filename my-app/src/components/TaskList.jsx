import React from "react"
import TasktItem from "./TaskItem"

const TaskList = ({ tasks, remove }) => {
  //   console.log(tasks)
  const editTaskTitle = (id, newTaskTitle) => {
    const foundTask = tasks.find((task) => task.id === id)
    foundTask.title = newTaskTitle
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  const editTaskTime = (id, newTaskTime) => {
    const foundTask = tasks.find((task) => task.id === id)
    foundTask.time = newTaskTime
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  return (
    <div className="task__container">
      {tasks.map((task) => (
        <TasktItem
          tasks={tasks}
          remove={remove}
          editTaskTitle={editTaskTitle}
          editTaskTime={editTaskTime}
          isCompleted={false}
          title={task.title}
          time={task.time}
          taskForFilter={task}
          key={task.id}
          id={task.id}
        />
      ))}
    </div>
  )
}
export default TaskList
