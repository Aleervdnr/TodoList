import React,{useState,useEffect} from 'react'
import { Circle, TaskWrapper } from './TaskListCSS'
import { BsCheck2 } from 'react-icons/bs';

export default function TaskItem({data}) {

  const [completado, setCompletado] = useState(false)

  useEffect(() => {
    let localTareas = JSON.parse(window.localStorage.getItem('myTasks'))
    localTareas.map((tarea)=>{
      if(tarea.id == data.id){
        setCompletado(tarea.completado)
      }
    })
  }, [])
  

  const handleOnClick = () =>{
    setCompletado(!completado)
    let localTareas = JSON.parse(window.localStorage.getItem('myTasks'))
    localTareas.map((tarea)=>{
      if(tarea.id == data.id){
        tarea.completado = !tarea.completado
      }
    })
    window.localStorage.setItem('myTasks',JSON.stringify(localTareas))
  }

  return (
    <TaskWrapper onClick={handleOnClick}>
      {completado?
        <Circle completado>
          <BsCheck2/>
        </Circle>
      :
        <Circle/>
      }
      <span style={completado?{opacity:"0.5"}: null} >
        {data.input}
      </span>
    </TaskWrapper>
  )
}
