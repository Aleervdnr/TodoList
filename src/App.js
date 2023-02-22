import {useState, useEffect} from 'react'
import './App.css';
import { ContainerWrapper } from './Componentes/Container/ContainerCSS';
import FormTodo from './Componentes/FormTodo/FormTodo';
import TaskList from './Componentes/TaksList/TaskList';
import { GlobalStyle } from './Componentes/UtilityClasses';

function App() {

  const [lastId, setLastId] = useState(JSON.parse(window.localStorage.getItem('myTasks')) ? JSON.parse(window.localStorage.getItem('myTasks')).length : 0)
  const [tareas, setTareas] = useState([])

  const [habitos, setHabitos] = useState([])

  const handleAddItem = (tareaNueva) =>{
    const nuevasTareas = [...tareas, tareaNueva]
    setTareas(nuevasTareas)
    window.localStorage.setItem('myTasks',JSON.stringify(nuevasTareas))
  }

  const handleRemoveTask = () =>{
    setTareas([])
    window.localStorage.setItem('myTasks',JSON.stringify([]))
    setLastId(0)
  }

  useEffect(()=>{
    let myLocalTasks = JSON.parse(window.localStorage.getItem('myTasks'))
    if(myLocalTasks != null){
      setTareas(myLocalTasks);
    }
    },[])

    //Habitos
    const handleAddHabit = (habitoNuevo) =>{
      const nuevosHabitos = [...habitos, habitoNuevo]
      setHabitos(nuevosHabitos)
      console.log(habitos)
    }




  return (
    <div className="App">
      <GlobalStyle/>
      <ContainerWrapper>
        <h2>Tareas</h2>
        <FormTodo 
          handleAddItem={handleAddItem} 
          lastId={lastId} 
          setLastId={setLastId} />
        <TaskList 
          tareas={tareas} 
          setTareas={setTareas} 
          setLastId={setLastId}
          remove={handleRemoveTask}
          />
      </ContainerWrapper>
    </div>
  );
}

export default App;
