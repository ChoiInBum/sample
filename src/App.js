import React, {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo('');
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className=''>
        <input type='text' value={todo}></input>&nbsp;
        <button onClick={addTodo}>Add</button>
      </div>
      <br/>
      <div className='todo-list'>
        
          {
            todos.map((item, index) => (
              <div>  
                <span>{item}</span>
                <button>삭제</button>
              </div>
            )
            )
          }
        
        <button>삭제</button>
      </div>
    </div>
  );
}

export default App;