import { BrowserRouter , Route , Routes } from 'react-router-dom';
import './App.css';
import List from './pages/list';
import Todo from './pages/todo'
import { useState } from 'react';
import ToggleButton from './toggleBtn';
  
function App() {

  const [todos , setTodos] = useState([
    {
      id : 1,
      text : " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, alias! ",
      running : false,
      time: 0
    },
    {
      id : 2,
      text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vel amet, ipsam eaque itaque ducimus adipisci quam aut atque error distinctio praesentium cum. Sed, iusto! Qui dicta minima voluptatibus amet?",
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
        <ToggleButton />
          <Routes>
            <Route path='/' exact element={<List todos={todos} setTodos={setTodos}/>} />
            <Route path="/todo" element={<Todo addTodo={addTodo}/>} />
          </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
