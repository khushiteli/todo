import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

import { List, CreateTodo , EditTodo , SignUp } from "./pages";
import "./assets/styles/App.css";
import PrivateRoutes from "./utlis/privateRoutes";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <BrowserRouter>
      <div className="wrapper font-sans text-white h-screen items-center flex justify-center overflow-hidden">
        <Toaster toastOptions={{ duration: 4000 }} />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoutes
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                element={
                  <List
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                    setLoggedIn={setLoggedIn}
                  />
                }
              />
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoutes
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                element={
                  <CreateTodo addTodo={addTodo} setLoggedIn={setLoggedIn} />
                }
              />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoutes
                isLoggedIn={isLoggedIn}
                setLoggedIn={setLoggedIn}
                element={
                  <EditTodo
                    todos={todos}
                    setTodos={setTodos}
                    setEditTodo={setEditTodo}
                    editTodo={editTodo}
                    setLoggedIn={setLoggedIn}
                  />
                }
              />
            }
          />
          <Route path="/login" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

/*

  / => list todo
  /create => crerate todo
  /edit/:id => edit todo
  /login => Login Page

  if user is not loged in and try to access protected page then redirect it to login page 

  make a folder for styles

  learn all about folder files
    setupTessts.js
    reportWebVitals.js
    app.test.js
    
  Why react strick mode ?
  ->helps find components that break these rules also it doesn't work in production code & it calls every function twice in development
   
  put all img in assests
  
  after successfull test remove useState initial value

*/

export default App;
