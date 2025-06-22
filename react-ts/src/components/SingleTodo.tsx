import React from 'react'
import type { Todo } from '../model'
import { MdModeEdit, MdDelete, MdDone } from 'react-icons/md'

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {


  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <form className='todos__single'>
      {todo.isDone ? (
        <s className="todos__single--text">{todo.todo} </s>

      ) : (
        <span className="todos__single--text">{todo.todo} </span>
      )}



      <span className="icon">
        <MdModeEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(todo.id)}>
        <MdDelete />
      </span>
      <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </form>
  )
}

export default SingleTodo