import { useState } from 'react'

import "./App.css";
import Todo from "./componets/todo";
import TodoForm from './componets/TodoForm';

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

  const addTodo = (text, category) => {

    const newTodo = [...todos, {
      id: todos.pop().id + 1,
      text,
      category,
      isCompleted: false,
    },
  ];

  setTodos(newTodo)

  }

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  )
}

export default App
