import { useState,useEffect} from 'react';
import Modal from './components/Modal.jsx';
import TodoList from './components/TodoList.jsx';
import "./index.css"




function App() {
  const [isOpen,setIsOpen]= useState(false); // This state defines if the modal is open or closed.
  const [todos,setTodos] =useState([]); //This state is used for setting the todos.
  const [searchTerm, setSearchTerm] = useState(""); //This state is used for the search bar.
  const [todoFilter, setFilter] = useState("ALL") //This state is used for the select-filtering button.
  const [lightMode, setLightMode]=useState(true); // This state is used for the lightmode.

  const filteredTodos =  //this function is used to filter and update the todolist.
     todos
     .filter(todo => { 
      // with this filter the user inputs a search term wich is run through the todo list and shows the updated results
    return todo.title.toLowerCase().includes(searchTerm.toLowerCase())
   })

   .filter(todo => { 
    // this filter goes through the todo list and renders the result of comleteness depending on the selected filter.
    if (todoFilter === "completed") {
      return todo.completed;
    } else if (todoFilter === "incomplete") {
      return !todo.completed;
    }
    return true; 
  }); 
  
  function addTodo(title){  //Declaring an addTodo function in order to keep the state up
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    fetch('http://localhost:3000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id: newId.toString(), title, completed: false})/* The current version of 
      json-server1 does not support non-string IDs for entities.
      Install the stable version, npm install json-server@0, or (As you noted works) switch your IDs to strings. */
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
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
      })
    .then(() => {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !==id)
      });
    });
  }

  function onClose(){ //closes the modal and enables scrolling to the body.
    setIsOpen(false)
    document.body.style.overflow = 'unset';
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

    return (
      
      <div className='container' >
        <div className={lightMode ? "todolist" : "todolist_nightMode" }>
        <TodoList 
        setLightMode ={setLightMode}
         lightMode={lightMode}
        filteredTodos={filteredTodos}
        todos={todos} 
        toggleTodo={toggleCompleted} 
        deleteTodo={deleteTodo} 
        setIsOpen={setIsOpen}
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        todoFilter={todoFilter} 
        setFilter={setFilter}
        />
        </div>
        
        <Modal 
        setLightMode ={setLightMode}
        lightMode={lightMode}
        isOpen={isOpen} 
        onClose={onClose}  
        onSubmit={addTodo}
        />
      </div>
    );
  };
  

export default App
