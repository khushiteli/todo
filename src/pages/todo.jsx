import React, { useState } from "react";
import { Link } from "react-router-dom";

const Todo = ({ addTodo, editTodo , todos ,setTodos , setEditTodo}) => {

  const [value, setValue] = useState("");
  const [editedValue, setEditedValue] = useState(editTodo ? editTodo.text : "");

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = () => {
    if (value !== "") {
      const newTodo = {
        id: Date.now(),
        text: value,
        running: false,
        status: 0,
        time: 0,
      };
      addTodo(newTodo);
      setValue("");
    }
  };

  const saveHandler = () => {
    if(editedValue !== ''){
      // console.log(editTodo);
      const index = todos.findIndex((todo) => todo.id === editTodo.id);
      editTodo.text = editedValue;
      // console.log("after editing");
      // console.log(editTodo);
      if (index !== -1) {
        console.log(todos);
        console.log(todos.splice( index, 1 , editTodo ))
        console.log(todos , "After editing");
        setTodos([...todos]);
      }
      setEditTodo(null);
    }
  }

  const editHandler = (e) => {
    setEditedValue(e.target.value);
  }

  return (
    <div className="px-9 py-5 w-[80vw]">
      {!editTodo && (
        <div>
          <div className="text-title-color text-[46px] font-bold">Create New Task</div>
          <div className=" h-[75vh] w-[95vw] text-2xl">
            <textarea
              type="text"
              className="h-[100%] w-[100%] py-4 px-2 border-none"
              value={value}
              onChange={inputHandler}
              placeholder="Write your task to achieve goals ..."
            />
          </div>
          <Link to="/">
            <button
              className="h-[40px] w-[40px] bg-green text-white rounded-full text-2xl d-flex justify-content-center align-align-items-center right-btn"
              onClick={() => submitHandler()}
              title="Add"
            >
              <i className="fa fa-check"></i>
            </button>
          </Link>
        </div>
      )}

      {editTodo && (
        <div>
          <div className="text-title-color text-[46px] font-bold">Edit your Task</div>
          <div className=" h-[75vh] w-[95vw] text-2xl">
            <textarea
              type="text"
              className="h-[100%] w-[100%] py-4 px-2 border-none"
              value={editedValue}
              onChange={editHandler}
              placeholder="Write your task to achieve goals ..."
            />
          </div>
          <Link to="/">
            <button
              className="h-[40px] w-[40px] bg-green text-white rounded-full text-2xl d-flex justify-content-center align-align-items-center right-btn"
              onClick={() => saveHandler()}
              title="Save"
            >
              <i className="fa fa-check"></i>
            </button>
          </Link>
        </div>
      )}

      <Link to="/">
        <button 
        title="cancel"
        className="h-[40px] w-[40px] bg-red text-white rounded-full text-2xl flex justify-center items-center close-btn">
          <i className="fa fa-close"></i>
        </button>
      </Link>
    </div>
  );
};

export default Todo;
