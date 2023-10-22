import { useState } from 'react'

import "./App.css";
import Todo from "./componets/todo";
import TodoForm from './componets/TodoForm';
import todo from './componets/todo';
import Search from './componets/Search';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text : "Criar back-end da agenda",
      category : "Trabalho",
      isCompleted : false,
    },
    {
      id: 2,
      text: "Ir a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text : "Ir a faculdade",
      category : "Ensino",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodo = [...todos, {
      id: todos.pop().id + 1,
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodo)

  };


  const removeTodo = (id) =>{
    const newTodo = [...todos]
    const filteredTodos = newTodo.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos)
  };


  const completeTodo = (id) =>{
    const newTodo = [...todos]
    newTodo.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)

    setTodos(newTodo)
  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
          {todos.filter((todo) => todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  )
}

export default App
