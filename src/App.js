import React,{ useState } from 'react'
import TodoList from './TodoList'
import Todo from './Todo'

function App() {

  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])


  return (
    <>
      <div className="App"> Hello Art</div>
        
       <TodoList todos={todos} /> 
        <input type="text"></input>
        <button>Add Todo</button>
        <button>Clear</button>
        <div>0 left to do</div>
    </>
  );
}

export default App;
