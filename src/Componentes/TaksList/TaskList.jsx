import React from 'react'
import TaskItem from './TaskItem'
import {DeleteAllButton, TaskListNone, TaskListWrapper } from './TaskListCSS'

export default function TaskList({tareas, setTareas, setLastId, remove, habito}) {

  return (
    <TaskListWrapper>
      {tareas.length ?
        tareas.map(tarea => <TaskItem key={tarea.id} data={tarea}/>)
        :
        <TaskListNone>No hay tareas</TaskListNone>
      }

      {
        habito?
          null
        :
        tareas.length ?
        <DeleteAllButton onClick={remove}>Borrar Tareas</DeleteAllButton>
        :
        null
      }
    </TaskListWrapper>
  )
}
