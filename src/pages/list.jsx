import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import ListItem from "../components/listItem";
import SignOutBtn from "../components/signOutBtn";

const List = ({ todos, setTodos, setEditTodo, setLoggedIn }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.running) {
            return { ...todo, time: todo.time + 1000 };
          }
          return todo;
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  });

  const EditHandler = (id) => {
    const TodoEdit = todos.find((todo) => todo.id === id);
    setEditTodo(TodoEdit);
  };

  const DeleteHandler = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      setTodos([...todos]);
    }
  };

  const toggleTimer = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        if (!todo.running && todo.time === 0) {
          // from pending to running
          return { ...todo, running: true, status: 1 };
        } else if (todo.running) {
          // from running to completed
          return { ...todo, running: false, status: 2 };
        }
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="w-[80vw] px-9 py-5 relative">
      <SignOutBtn setLoggedIn={setLoggedIn} />
      <div className="text-title-color text-[52px] font-bold mb-4 relative">
        Daily Task
      </div>
      {console.log(todos.filter((todo) => todo.status === 2))}
      <ul className="flex flex-col gap-5 list-container w-[100%]">
        {todos
          .filter((todo) => todo.status === 1)
          .map((todo) => (
            <ListItem
              todo={todo}
              toggleTimer={toggleTimer}
              EditHandler={EditHandler}
              DeleteHandler={DeleteHandler}
            />
          ))}
        {todos
          .filter((todo) => todo.status === 0)
          .map((todo) => (
            <ListItem
              todo={todo}
              toggleTimer={toggleTimer}
              EditHandler={EditHandler}
              DeleteHandler={DeleteHandler}
            />
          ))}
        {todos
          .filter((todo) => todo.status === 2)
          .map((todo) => (
            <ListItem
              todo={todo}
              toggleTimer={toggleTimer}
              EditHandler={EditHandler}
              DeleteHandler={DeleteHandler}
            />
          ))}
      </ul>
      <Link to="/create">
        <button
          title="Create to do"
          className="h-[40px] w-[40px] rounded-full text-white text-lg d-flex justify-center items-center add-btn bg-title-color"
        >
          <i className="fa fa-plus"></i>
        </button>
      </Link>
    </div>
  );
};

export default List;
