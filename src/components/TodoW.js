import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import TodoEdit from './TodoEdit'

const TodoW = () => {
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
    console.log(todos)
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
}

const editTask = (task, id) => { setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))

} 

  return (
    <div className='TodoWrapper'>
      <h1>Things to do!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => ( todo.isEditing ? ( <TodoEdit editTodo={editTask} task= {todo} /> ) : ( <Todo
          task={todo}
          key={todo.id}
          toggleComplete={toggleComplete} deleteTodo = {deleteTodo}
          editTodo={editTodo}
        /> )
        
      ))}
    </div>
  )
}

export default TodoW
