import './App.css';

import {useState, useEffect} from 'react'
import {BsTrash, BsbookmarkCheck, BsbookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000"

function App() {

  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [todos, SetTodos] = useState([])
  const [loading, setLoading] = useState(false)


  // carrega todos na pagina carregada
  useEffect(() => {

    const loadData = async()=>{
      setLoading(true)

      const res = await fetch(API + "/todos").then((res) => res.json()).then((data) => data).catch((err) => console.log(err))

      setLoading(false)

      SetTodos(res)
    }

    loadData()
  }, [])

  //envia formulario
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    }

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    })

    SetTodos((prevState) => [...prevState, todo])

    setTime("")
    setTitle("")
  }


  if(loading){
    return(
      <p >Carregando...</p>
    )
  }

  //pagina web
  return (
    <div className="App">
      <div className='todo-header'>
        <h1>Agenda</h1>
      </div>

      <div className='form-todo'>
        <h2>Insira a sua proxima tarefa</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor="title">Atividade</label><br></br>
            <input type='text' id='title' placeholder='Titulo da tarefa' onChange={(e) => setTitle(e.target.value)} value={title || ""} required></input>
      
            <label htmlFor="time">tempo</label><br></br>
            <input type='text' id='time' placeholder='Hora' onChange={(e) => setTime(e.target.value)} value={time || ""} required></input>
          </div>
            <input type='submit' value="Criar tarefa"></input>
        </form>
      </div>

      <div className='list-todo'>
        <h2>Lista de tarefas</h2>
        {todos.length === 0 && <p>Não há tarefas para ser exibido</p>}
        {todos.map((todo) => (
          <div className='todo' key={todo.id}>
            <p>{todo.title}</p>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
