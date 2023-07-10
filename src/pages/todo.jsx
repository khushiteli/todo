import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Todo = ({addTodo}) => {
  console.log(addTodo);

  console.log("function run done");

  const [value , setValue] = useState('');
  
  const inputHandler = (e) => {
      setValue(e.target.value);
  }

  const submitHandler = () => {
    if(value !== ""){
        const newTodo = {
            id : Date.now(),
            text : value,
            running : false,
            status : 0,
            time: 0
        };
        addTodo(newTodo);
        setValue('');
    }
}

  return (
    <div className='px-9 py-5 w-[80vw]'>
      <div className='text-blue text-[46px] font-bold'>Create New Task</div>
      <div  className=" h-[75vh] w-[95vw] text-2xl">
          <textarea type="text" className='h-[100%] w-[100%] py-4 px-2 border-none bg-dark-black text-text-color' value={value} onChange={inputHandler} placeholder="Write your task to achive goals ..."/>
      </div>
      
      <Link to="/" >
        <button
        className='h-[40px] w-[40px] bg-green text-white rounded-full text-2xl d-flex justify-content-center align-align-items-center right-btn'
        onClick={() => submitHandler()}><i className="fa fa-check"></i></button>
        <button className='h-[40px] w-[40px] bg-red text-white rounded-full text-2xl flex justify-center items-center close-btn'><i className="fa fa-close"></i></button>
      </Link>
    </div>
  )
}

export default Todo ;