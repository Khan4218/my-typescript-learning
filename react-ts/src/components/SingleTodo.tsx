import React from 'react'
import type { Todo } from '../model'
import {MdModeEdit, MdDelete, MdDone} from 'react-icons/md'
type Props ={
    todo :Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todos__single'>
    <div >
     <span className="todos__single--text">
        {todo.todo}
     </span>
    </div>

    <span className="icon">
        <MdModeEdit />
    </span>
    <span className="icon">
        <MdDelete />
    </span>
    <span className="icon">
        <MdDone />
    </span>
    </form>
  )
}

export default SingleTodo