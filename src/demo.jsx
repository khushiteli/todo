import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';

const List = ({todos , setTodos}) => {

    const toggleTimer = (id) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id){
                return {...todo , running: !todo.running}
            }
            return todo;
        })
        setTodos(updatedTodos);
    }

    useEffect(()=> {
        const interval = setInterval(()=>{
            setTodos((prevTodos)=>{
                return prevTodos.map((todo)=>{
                    if(todo.running) {
                        return {...todo,time : todo.time + 1000}
                    }
                    return todo;
                })
            })
        },1000);

        return () => clearInterval(interval);
    }, [])

  return (
    <div className='w-[100vw] h-[100vh] px-9 py-5'>
        <div className='text-blue text-[46px] font-bold mb-4'>Daily Task </div>
        <ul className='flex flex-col gap-5'>
            {todos.map((todo)=>{
                return (
                    <li key={todo.id} className='flex gap-5 w-[100%]'>
                            <div><i class="fa fa-caret-right"></i></div>
                            <div>
                                <div className='todo-text text-xl'>{todo.text}</div>
                                <div>
                                    <div className='timer'>
                                        <span>{String(Math.floor((todo.time / (1000 * 60 * 60)) % 24)).padStart(2, '0')}</span>:
                                        <span>{String(Math.floor((todo.time / (1000 * 60)) % 60)).padStart(2, '0')}</span>:
                                        <span>{String(Math.floor((todo.time / 1000) % 60)).padStart(2, '0')}</span>
                                    </div>
                                    <div className="switch-toggle switch-3 switch-candy btn">
                                        <input
                                            id={`on-${todo.id}`}
                                            name={`state-${todo.id}`}
                                            type="radio"
                                            checked={todo.running}
                                            onChange={() => toggleTimer(todo.id)}
                                        />
                                        <label  onClick={() => toggleTimer(todo.id)}>
                                        Start
                                        </label>
                                        <input 
                                            id={`na-${todo.id}`} 
                                            name={`state-${todo.id}`} 
                                            type="radio" 
                                            checked={!todo.running} 
                                        />
                                        <input
                                            id={`off-${todo.id}`}
                                            name={`state-${todo.id}`}
                                            type="radio"
                                            checked={!todo.running}
                                            onChange={() => toggleTimer(todo.id)}
                                        />
                                        <label  onClick={() => toggleTimer(todo.id)}>
                                        End
                                        </label>
                                    </div>
                                </div>
                            </div>   
                        </li>
                    )
                })}
            </ul>
            <Link to="/todo" >
                <button className='h-[30px] w-[30px] border border-blue bg-blue text-white rounded-2xl d-flex justify-content-center align-align-items-center add-btn'><i className="fa fa-plus"></i></button>
          </Link>
      
    </div>
  )
}




export default List;

<div className="switch-toggle switch-3 switch-candy btn">
                                        <input
                                            id={`on-${todo.id}`}
                                            name={`state-${todo.id}`}
                                            type="radio"
                                            checked={todo.running}
                                            onChange={() => toggleTimer(todo.id)}
                                        />
                                        <label  onClick={() => toggleTimer(todo.id)}>
                                        Start
                                        </label>
                                        <input 
                                            id={`na-${todo.id}`} 
                                            name={`state-${todo.id}`} 
                                            type="radio" 
                                            checked={!todo.running} 
                                        />
                                        <input
                                            id={`off-${todo.id}`}
                                            name={`state-${todo.id}`}
                                            type="radio"
                                            checked={!todo.running}
                                            onChange={() => toggleTimer(todo.id)}
                                        />
                                        <label  onClick={() => toggleTimer(todo.id)}>
                                        End
                                        </label>
                                    </div>














// toggle btn 

import React, { useState } from 'react';

const ToggleButton = () => {
  const [toggleState, setToggleState] = useState(0);

  const handleToggle = (value) => {
    if (toggleState === value) {
      setToggleState(0); // Toggle off
    } else {
      setToggleState(value); // Toggle to the selected state
    }
  };

  return (
    <div className="toggle-button">
      <label className={`toggle-option toggle-option-pendding ${toggleState === 1 ? 'active' : ''}`}>
        <input
          type="radio"
          name="toggle"
          value={1}
          className='radio-btn'
          checked={toggleState === 1}
          onChange={() => handleToggle(1)}
        />
        {' '}
      </label>

      <label className={`toggle-option toggle-option-ongoing ${toggleState === 2 ? 'active' : ''}`}>
        <input
          type="radio"
          name="toggle"
          value={2}
          className='radio-btn'
          checked={toggleState === 2}
          onChange={() => handleToggle(2)}
        />
        {' '}
      </label>

      <label className={`toggle-option toggle-option-complete ${toggleState === 3 ? 'active' : ''}`}>
        <input
          type="radio"
          name="toggle"
          value={3}
          className='radio-btn'
          checked={toggleState === 3}
          onChange={() => handleToggle(3)}
        />
        {' '}
      </label>
    </div>
  );
};

export default ToggleButton;



<div className='w-[100vw] h-[100vh] px-9 py-5'>
        <div className='text-blue text-[46px] font-bold mb-4'>Daily Task </div>
        <ul className='flex flex-col gap-5'>
            {todos.map((todo)=>{
                return (
                    <li key={todo.id} className='flex gap-5 w-[100%]'>
                        {console.log(todo)}
                            <div><i class="fa fa-caret-right"></i></div>
                            <div>
                                <div className='todo-text text-xl'>{todo.text}</div>
                                <div>
                                    <div className='timer'>
                                        <span>{String(Math.floor((todo.time / (1000 * 60 * 60)) % 24)).padStart(2, '0')}</span>:
                                        <span>{String(Math.floor((todo.time / (1000 * 60)) % 60)).padStart(2, '0')}</span>:
                                        <span>{String(Math.floor((todo.time / 1000) % 60)).padStart(2, '0')}</span>
                                    </div>