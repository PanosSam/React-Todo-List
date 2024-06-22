
import TodoItem from "./TodoItem.jsx"
import TodoHeader from "./TodoHeader";
import TodoActions from "./TodoActions";
import "./TodoList.css"




export default function TodoList({ todos, toggleTodo, deleteTodo, 
    filteredTodos,setIsOpen,  searchTerm, 
    setSearchTerm,
    filter,
    setFilter}){

    return (
        <div className="todolist_container">

          <div className="todolist_head">
            
          <h1 className="todolist_h1">TODO LIST</h1>

           <TodoHeader 
           searchTerm={searchTerm} 
           setSearchTerm={setSearchTerm} 
           filter={filter} 
           setFilter={setFilter}
           />
         </div>

         <ul className="list">
            {todos.length === 0 && "No Todos"}
            {filteredTodos.map(todo => {
             return (
            <TodoItem {...todo} key={todo.id} 
            toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
         )
        
          })}
         </ul>

         <TodoActions setIsOpen={setIsOpen}/>
        </div>
    )
   
}