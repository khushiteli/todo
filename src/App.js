import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import List from './pages/list';
import Todo from './pages/todo'
import { useState } from 'react';
  
function App() {

  const [todos , setTodos] = useState([
    {
      id : 1,
      text : "test",
      running : false,
      time: 0
    },
    {
      id : 2,
      text : "test2",
      running : false,
      time: 0
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos , newTodo]);
  }

  return (
    <BrowserRouter>
      <div className='wrapper font-sans'>
          <Routes>
            <Route path='/' exact element={<List todos={todos} setTodos={setTodos}/>} />
            <Route path="/todo" element={<Todo addTodo={addTodo}/>} />
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
