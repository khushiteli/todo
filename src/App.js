import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import List from './pages/list';
import Todo from './pages/todo'
import { useState } from 'react';
  
function App() {

  const [todos , setTodos] = useState([
    {
      id : 1,
      text : "test1",
      running : false,
      status: 0,
      time: 0
    },
    {
      id : 2,
      text : "test2",
      running : false,
      status : 0,
      time: 0
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos , newTodo]);
  }

  return (
    <BrowserRouter>
      <div className='wrapper font-sans bg-dark-black text-white flex justify-center w-[100vw] h-[100vh] overflow-hidden'>
          <Routes>
            <Route path='/' exact element={<List todos={todos} setTodos={setTodos}/>} />
            <Route path="/todo" element={<Todo addTodo={addTodo}/>} />
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
