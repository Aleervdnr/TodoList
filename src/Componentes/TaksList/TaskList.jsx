import React from 'react'
import TaskItem from './TaskItem'
import {DeleteAllButton, TaskListNone, TaskListWrapper } from './TaskListCSS'

export default function TaskList({tareas, setTareas, setLastId, removeAll, removeTask, habito}) {

  return (
    <TaskListWrapper>
      {tareas.length ?
        tareas.map(tarea => <TaskItem id={tarea.id} key={tarea.id} data={tarea} removeTask={removeTask} />)
        :
        <TaskListNone>No hay tareas</TaskListNone>
      }

      {
        habito?
          null
        :
        tareas.length ?
        <DeleteAllButton onClick={removeAll}>Borrar Tareas</DeleteAllButton>
        :
        null
      }
    </TaskListWrapper>
  )
}
