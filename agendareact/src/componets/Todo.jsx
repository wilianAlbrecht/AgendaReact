import React from 'react'

const todo = ({todo}) => {
  return (
    <div className="todo">
    <div className="content">
        <p>{todo.text}</p>
        <p className="category">{todo.category}</p>
    </div>
    <button className='complete'>Completar</button>
    <button className='remove'>X</button>
  </div>
  )
}

export default todo