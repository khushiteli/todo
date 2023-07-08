import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Todo = (props) => {
  console.log(props)
  const {addTodo , test} = props

  const [value , setValue] = useState('');
  
  const inputHandler = (e) => {
      setValue(e.target.value);
  }

  const submitHandler = () => {
    console.log(test, ' <=== ')
    test();
    if(value !== ""){
        const newTodo = {
            id : Date.now(),
            text : value,
            running : false,
            time: 0
        };
        addTodo(newTodo);
        setValue('');
    }
}

  return (
    <div className='pl-9 pt-5'>
      <div className='text-blue text-[46px] font-bold'>Create New Task</div>
      <div  className=" h-[75vh] w-[95vw] text-2xl">
          <textarea type="text" className='h-[100%] w-[100%] py-4 px-2 border-none ' value={value} onChange={inputHandler} placeholder="Write your task to achive goals ..."/>
      </div>
      <button
      className='h-[30px] w-[30px] border border-green bg-green text-white rounded-2xl d-flex justify-content-center align-align-items-center right-btn'
      onClick={() => submitHandler()}><i className="fa fa-check"></i></button>
      <Link to="/" >
        <button className='h-[30px] w-[30px] border border-red bg-red text-white rounded-2xl d-flex justify-content-center align-align-items-center add-btn'><i className="fa fa-close"></i></button>
      </Link>
    </div>
  )
}

export default Todo ;