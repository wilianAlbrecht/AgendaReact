import { useState } from 'react'

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category){
            return
        }else{
            //adicionar ao todo
            addTodo(value, category)
            //limpa campos
            setValue("")
            setCategory("")
        }
    }

  return (
    <div className="todo-form">
        <h2> Criar tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Titulo" onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Trabalho</option>
                <option value="Ensino">Ensino</option>
                <option value="Pessoal">Pessoal</option>
            </select>
            <button type="submit">Salvar</button>
        </form>
    </div>
  )
}

export default TodoForm