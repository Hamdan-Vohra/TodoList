import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDeleteTodoMutation, useEditTodoMutation } from "../api/apiSlice"

const TodoExcerpt = ({todo}) => {
    
    const [editTodo] = useEditTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
  return (
    <article>
        <div className="todo">
            <input
                type="checkbox"
                checked={todo.completed}
                id={todo.id}
                onChange={()=> editTodo({...todo,completed:!todo.completed})}
            />
            <label htmlFor={todo.id}>{todo.title}</label>
            <button 
                className="trash"
                onClick={()=>deleteTodo({id:todo.id})}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
    </article>
  )
}

export default TodoExcerpt