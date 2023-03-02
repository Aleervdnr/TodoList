import React from 'react'
import TaskItem from '../TaksList/TaskItem'
import { TasksWrapperTitle } from '../UtilityClasses'
import { CompletedWrapper } from './CompletedTaskCSS'

export default function CompletedTask({tareas, removeTask, setTareas}) {
  return (
    <CompletedWrapper>
      <TasksWrapperTitle>Completed</TasksWrapperTitle>
      {
        tareas.map(tarea => tarea.completado? <TaskItem id={tarea.id} key={tarea.id} data={tarea} removeTask={removeTask} setTareas={setTareas} /> : null)
      }
    </CompletedWrapper>
  )
}
