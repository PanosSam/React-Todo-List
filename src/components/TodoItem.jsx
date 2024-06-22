export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }){


    return (


    
        <li >
        <label >
            <input 
            type="checkbox" 
            checked={completed} 
            onChange ={e =>toggleTodo(id, e.target.checked)}
            
            />
            {title}
        </label>
        <button >Edit</button>
        <button
        onClick={() => deleteTodo(id)}
        >
         Delete
         </button>

        </li>
    )
}