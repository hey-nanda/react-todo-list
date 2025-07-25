import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const handleSubmit = e => {
        e.preventDefault();

        // console.log(value)
        addTodo(value);

        setValue("");
    }

  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Write the new task' onChange={(e) => setValue(e.target.value)} />
        <button type='submit' className='todo-btn'>Add task</button>
      </form>
    </div>
  )
}

export default TodoForm
