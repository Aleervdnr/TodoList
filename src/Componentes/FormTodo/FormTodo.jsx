import React,{useState} from 'react'
import { FormTodoButton, FormTodoInput, FormTodoWrapper } from './FormTodoCSS'

export default function FormTodo({handleAddItem,lastId, setLastId}) {

  const [input, setInput] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    handleAddItem({
      completado: false,
      id: lastId + 1,
      input
    })
    setLastId(lastId + 1)
    setInput("")

  } 

  return (
    <FormTodoWrapper onSubmit={handleSubmit}>
      <FormTodoInput 
        type="text" 
        placeholder='Agregar Tarea'
        value={input}
        onChange={(e)=> setInput(e.target.value)} />
      <FormTodoButton 
        disabled={input ? false : true} >
        Agregar
      </FormTodoButton>
    </FormTodoWrapper>
  )
}
