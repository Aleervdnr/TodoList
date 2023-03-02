import React,{useState,useEffect} from 'react'
import { Circle, Remove, TaskWrapper } from './TaskListCSS'
import { BsCheck2,BsTrash } from 'react-icons/bs';

export default function TaskItem({data,removeTask,id,setTareas}) {

  const [completado, setCompletado] = useState(false)

  useEffect(() => {
    let localTareas = JSON.parse(window.localStorage.getItem('myTasks'))
    localTareas.map((tarea)=>{
      if(tarea.id == data.id){
        setCompletado(tarea.completado)
      }
    })
  }, [])

  const handleClick = (e) => {
    console.log(e.target)

    if(e.target.id == data.id){

        setCompletado(!completado)
        let localTareas = JSON.parse(window.localStorage.getItem('myTasks'))
        localTareas.map((tarea)=>{
          if(tarea.id == data.id){
            tarea.completado = !tarea.completado
          }
        })
        window.localStorage.setItem('myTasks',JSON.stringify(localTareas))
        setTareas(localTareas)
      }
  }

 useEffect(() => {
   document.addEventListener("click",handleClick)
  
   return () => {
     document.removeEventListener("click",handleClick)
   }
 }, [])
  



  return (
    <TaskWrapper id={id} >
      {completado?
        <Circle completado>
          <BsCheck2/>
        </Circle>
      :
        <Circle/>
      }
      <span style={completado?{opacity:"0.5",textDecoration:"line-through"}: null} >
        {data.input}
      </span>
      <Remove >
        <BsTrash onClick={removeTask} style={{cursor:"pointer"}} />
      </Remove>
    </TaskWrapper>
  )
}
