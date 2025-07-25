import React, {useState} from 'react'

const TodoEdit = ({editTodo, task}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        // console.log(value)
        editTodo(value, task.id);

        setValue("");
    }

  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update task' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Update task</button>
      </form>
    </div>
  )
}

export default TodoEdit
