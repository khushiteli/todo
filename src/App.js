import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./pages/list";
import Todo from "./pages/todo";
import { useState } from "react";
import SignUp from "./pages/signUp";

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

  const [currentUser, setCurrentUser] = useState("");

  return (
    <BrowserRouter>
      <div className="wrapper font-sans text-white h-screen items-center flex justify-center overflow-hidden">
        {currentUser && (
          <Routes>
            <Route
              path="/"
              exact
              element={
                <List
                  todos={todos}
                  setTodos={setTodos}
                  setEditTodo={setEditTodo}
                />
              }
            />
            <Route
              path="/todo"
              element={
                <Todo
                  todos={todos}
                  setTodos={setTodos}
                  addTodo={addTodo}
                  setEditTodo={setEditTodo}
                  editTodo={editTodo}
                />
              }
            />
          </Routes>
        )}
        {!currentUser && (
          <Routes>
            <Route
              exact
              path="/"
              element={<SignUp setCurrentUser={setCurrentUser} />}
            />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
