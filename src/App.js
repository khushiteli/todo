import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./config/firebase";
import "./assets/styles/App.css";
import List from "./pages/list";
import CreateTodo from "./pages/createTodo";
import EditTodo from "./pages/editTodo";
import SignUp from "./pages/signUp"; //try to import all from one file
import PrivateRoutes from "./utlis/privateRoutes";

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

  const [editTodo, setEditTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const [isLoggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged in ", user);
        setLoggedIn(user);
      } else {
        console.log("Logged out");
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper font-sans text-white h-screen items-center flex justify-center overflow-hidden">
        <Toaster toastOptions={{ duration: 4000 }} />
        {/* {console.log("user----> ", isLoggedIn)} */}
        <Routes>
          <Route element={<PrivateRoutes isLoggedIn={isLoggedIn} />}>
            <Route
              path="/"
              exact
              element={
                <List
                  todos={todos}
                  setTodos={setTodos}
                  setEditTodo={setEditTodo}
                  setLoggedIn={setLoggedIn}
                />
              }
            />
            <Route
              path="/create"
              element={
                <CreateTodo addTodo={addTodo} setLoggedIn={setLoggedIn} />
              }
            />
            <Route
              path="/edit/:id"
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
          </Route>
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
   
  put all img in assests
  
  after successfull test remove useState initial value

*/

export default App;
