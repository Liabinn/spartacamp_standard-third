import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function Input(setTodos) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      title,
      contents,
      isDone: false,
    }
  }
    setTodos((prev) => [...prev, newTodo])
    setTitle('');
    setContents('');

    const onChangeTitle = (e) => {
      setTitle(e.target.value)
    }
    const onChangeContents = (e) => {
      setTitle(e.target.value)
    }

    // const todoList= todos.filter((prev)=>{
    //   prev.map((t) => )
    //   })
    
  return (
    <div>
      <form onSubmit={onSubmit}>
        제목<input type='text' value={title} onChange={onChangeTitle} />
        내용<input type='text' value={contents} onChange={onChangeContents} />
        <button>추가하기</button>
      </form>
    </div>
  )
}

export default Input
