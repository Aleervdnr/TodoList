import {useState, useEffect} from 'react'
import './App.css';
import { ContainerWrapper, SemiCircle } from './Componentes/Container/ContainerCSS';
import FormTodo from './Componentes/FormTodo/FormTodo';
import Header from './Componentes/Header/Header';
import InboxTask from "./Componentes/InboxTask/InboxTask"
import ActionTask from "./Componentes/ActionTask/ActionTask"
import CompletedTask from "./Componentes/CompletedTask/CompletedTask"
import { GlobalStyle, TasksGrid } from './Componentes/UtilityClasses';

function App() {

  const [lastId, setLastId] = useState(JSON.parse(window.localStorage.getItem('myTasks')) ? JSON.parse(window.localStorage.getItem('myTasks')).length : 0)
  const [tareas, setTareas] = useState([])
  const [inbox, setInbox] = useState([])

  const handleAddItem = (tareaNueva) =>{
    const nuevasTareas = [...tareas, tareaNueva]
    setTareas(nuevasTareas)
    window.localStorage.setItem('myTasks',JSON.stringify(nuevasTareas))
  }

  const handleRemoveTasks = () =>{
    setTareas([])
    window.localStorage.setItem('myTasks',JSON.stringify([]))
    setLastId(0)
  }

  const handleRemoveTask = (id) =>{
    const filtro = tareas.filter(el => el.id != id)
    setTareas(filtro)
    window.localStorage.setItem('myTasks',JSON.stringify(filtro))
  }

  useEffect(()=>{
    let myLocalTasks = JSON.parse(window.localStorage.getItem('myTasks'))
    if(myLocalTasks != null){
      setTareas(myLocalTasks);
    }
   },[])



  // useEffect(() => {
  //     window.localStorage.setItem('myTasks',JSON.stringify(tareas))
  // },[tareas])

  return (
    <div className="App">
      <GlobalStyle/>
      <ContainerWrapper>
        <SemiCircle/>
        <Header/>
        <h2>GTD</h2>
        <FormTodo 
          handleAddItem={handleAddItem} 
          lastId={lastId} 
          setLastId={setLastId} />

          <TasksGrid>            
            <InboxTask tareas={tareas} removeTask={handleRemoveTask} setTareas={setTareas} />
            <ActionTask tareas={tareas} removeTask={handleRemoveTask} />
            <CompletedTask tareas={tareas} removeTask={handleRemoveTask} setTareas={setTareas} />
          </TasksGrid>
        {/* <TaskList 
          tareas={tareas} 
          setTareas={setTareas} 
          setLastId={setLastId}
          removeAll={handleRemoveTasks}
          removeTask = {handleRemoveTask}
          /> */}
      </ContainerWrapper>
    </div>
  );
}

export default App;
