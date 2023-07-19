import React , {useState} from 'react'
import { Link } from 'react-router-dom';

import CencleBtn from '../components/cencleBtn';
import SignOutBtn from "../components/signOutBtn";

const EditTodo = ({ editTodo, todos, setTodos, setEditTodo, setLoggedIn }) => {
  const [editedValue, setEditedValue] = useState(editTodo ? editTodo.text : "");

  const editHandler = (e) => {
    setEditedValue(e.target.value);
  };

  const saveHandler = () => {
    if (editedValue !== "") {
      const index = todos.findIndex((todo) => todo.id === editTodo.id);
      editTodo.text = editedValue;
      if (index !== -1) {
        console.log(todos);
        console.log(todos.splice(index, 1, editTodo));
        console.log(todos, "After editing");
        setTodos([...todos]);
      }
      setEditTodo(null);
    }
  };

  return (
    <div>
      <SignOutBtn setLoggedIn={setLoggedIn} />
      <div className="text-title-color text-[46px] font-bold">
        Edit your Task
      </div>
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
      <CencleBtn />
    </div>
  );
};

export default EditTodo
