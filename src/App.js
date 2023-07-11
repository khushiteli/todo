import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./pages/list";
import Todo from "./pages/todo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "test1",
      running: false,
      status: 0,
      time: 0,
    },
    {
      id: 2,
      text: "test2",
      running: false,
      status: 0,
      time: 0,
    },
  ]);

  const [editTodo , setEditTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <BrowserRouter>
      <div className="wrapper font-sans text-white flex justify-center overflow-hidden">
        <Routes>
          <Route
            path="/"
            exact
            element={<List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>}
          />
          <Route path="/todo" element={<Todo todos={todos} setTodos={setTodos} addTodo={addTodo} setEditTodo={setEditTodo} editTodo={editTodo}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
