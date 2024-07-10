
import TodoItem from "./TodoItem"
import TodoHeader from "./TodoHeader";
import TodoActions from "../Modal/TodoActions";
import Detective from "../../assets/Detective.png";
import DedectiveNightmode from "../../assets/DetectiveNightmode.svg"
import "./TodoList.css"




export default function TodoList({ todos, toggleTodo, deleteTodo, 
    filteredTodos,setIsOpen,  searchTerm, 
    setSearchTerm,todoFilter, setFilter, lightMode, setLightMode,editTodo
  }){

    return (
        <div className="todolist_container">
          <div className="todolist_head">
          <h1 className={lightMode ? "todolist_h1": "todolist_h1_nightMode"} >TODO LIST</h1>
           <TodoHeader 
           setLightMode ={setLightMode}
           lightMode={lightMode}
           searchTerm={searchTerm} 
           setSearchTerm={setSearchTerm} 
           setFilter={setFilter}
           todoFilter={todoFilter}
           />
         </div>
         <div className={lightMode ? "todolist_body" : "todolist_body_nightMode"}>
         <ul className="todo_list">

          {todos.length === 0 && <div className={lightMode ? "todolist_empty" : "todolist_empty_nightMode"}> 
            <img src={lightMode ? Detective : DedectiveNightmode} alt=""/> 
            <span >Empty...</span> </div> }

            {filteredTodos.map(todo => {
             return (
            <TodoItem 
            {...todo} 
            key={todo.id} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
            setLightMode ={setLightMode}
            lightMode={lightMode}
            editTodo={editTodo}
            />)
          })}
         </ul>
        </div>
        <TodoActions setIsOpen={setIsOpen} lightMode={lightMode}/>
      </div>)}