import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

import { useGetTodosQuery, usePostTodoMutation} from '../api/apiSlice'
import TodoExcerpt from './TodoExcerpt'

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')

    const {
        data:todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();

    const [postTodo] = usePostTodoMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        postTodo({userId:1,title:newTodo,completed:false});
        setNewTodo('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo:"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>


    let content;
    if(isLoading){
        content = <p>Loading...</p>
    } else if(isSuccess){
        content = todos.map(todo =><TodoExcerpt key={todo.id} todo={todo}/>);
    } else if(isError){
        content = <p>{error}</p>
    }

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    )
}
export default TodoList