import { useState,useEffect} from 'react';
import Modal from './components/Modal.jsx';
import TodoList from './components/TodoList.jsx';
import "./index.css"




function App() {
  const [isOpen,setIsOpen]= useState(false);
  const [todos,setTodos] =useState([]);
  const [searchTerm, setSearchTerm] = useState(""); //This state is use for the search bar.
  const [filter, setFilter] = useState("All")
  
  
 
  const filteredTodos =  /* this function is used to filter and update the todolist while we type
  and render the wanted results at the same time, while it again filters depending the select-button's value  */
  
     todos
     .filter(todo => {
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase())
   })

   .filter(todo => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    }
    return true; 
  }); 
  
   


  function addTodo(title){    /* Declaring an addTodo function so we can 

    access the modal so we dont have to move the Todo state, we then use it as a prop

    on the onSubmit event */
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    fetch('http://localhost:3000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: newId.toString(), title, completed: false})/* The current version of 

      json-server1 does not support non-string IDs for entities. Per typicode/json-server#1473:

      it's intentional :) It's easier to manage and removes some internal complexity
      
      So either:
      
      Install the stable version, npm install json-server@0, or
      
      (As you noted works) switch your IDs to strings: */
    })

    .then(response => response.json())
    .then(newTodo =>{
      setTodos(todos =>[...todos, newTodo]);
      
    })
    
  }
  
function toggleCompleted(id, completed){ //getting the id and completed status from the TodoItem
  
  fetch(`http://localhost:3000/todos/${id}`  , {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({completed}),
  })
  .then(response => response.json())
  .then(updatedTodo => {
    setTodos(currentTodos => 
      currentTodos.map(todo =>
        todo.id === id ? updatedTodo : todo
      )
    );
  })
    
}

  function deleteTodo(id){
    fetch(`http://localhost:3000/todos/${id}`  , {
      method: 'DELETE'
      })
    
    .then(() => {
      
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !==id)
      });
    });
    
   
  }
  
  
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);



    return (
      

      <div className='container'>

        
        <div className="todolist">
        
        <TodoList 
        
        filteredTodos={filteredTodos}
        todos={todos} 
        toggleTodo={toggleCompleted} 
        deleteTodo={deleteTodo} 
        setIsOpen={setIsOpen}

        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        filter={filter} 
        setFilter={setFilter}
        />
        
        </div>
        

        <Modal 
        className="container_modal"
        open={isOpen} 
        onClose={()=>setIsOpen(false)}  
        onSubmit={addTodo}
        />
          
          
          

       
      </div>
    );
  };
  

export default App
