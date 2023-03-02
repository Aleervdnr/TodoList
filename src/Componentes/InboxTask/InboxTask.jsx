import React from 'react'
import TaskItem from '../TaksList/TaskItem'
import { TasksWrapperTitle } from '../UtilityClasses'
import { InboxWrapper } from './InboxTaskCSS'

export default function InboxTask({tareas, removeTask, setTareas}) {


  
  return (
    <InboxWrapper>
      <TasksWrapperTitle>Inbox</TasksWrapperTitle>
      {
        tareas.map(tarea => tarea.completado? null : <TaskItem id={tarea.id} key={tarea.id} data={tarea} removeTask={removeTask} setTareas={setTareas} />)
      }
      
    </InboxWrapper>
  )
}
