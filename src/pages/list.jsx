import React , { useEffect} from 'react';
import { Link } from 'react-router-dom';

const List = ({todos , setTodos}) => {

    const toggleTimer = (id) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            if (!todo.running && todo.time === 0) {
              // from pending to running
              return { ...todo, running: true , status : 1};
            } else if (todo.running) {
              // from running to completed
              return { ...todo, running: false , status : 2};
            }
          }
          return todo;
        });
        setTodos(updatedTodos);
      };
      

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
    <div className='w-[80vw] px-9 py-5'>
        <div className='text-light-pink text-[52px] font-bold mb-4 relative'>Daily Task </div>
        <ul className='flex flex-col gap-5 list-container'>
                {todos.map((todo)=>{
                    let statusText = "";
                    if(todo.status === 0){
                        statusText = "Pendding";
                    }
                    else if(todo.status === 1){
                        statusText = "Ongoing";
                    }
                    else {
                        statusText = "Complete";
                    }
                    return (
                        <li key={todo.id}>
                            <div className={`task-complete ${todo.status === 2 ? 'active' : ''} flex gap-5 w-[100%] items-center`}>
                                <div className='flex gap-8 pl-4 items-center'>
                                    {/* <div  className='text-3xl'><i class="fa fa-caret-right"></i></div> */}
                                    <div className="toggle-button">
                                        <input
                                            id={`on-${todo.id}`}
                                            name={`state-${todo.id}`}
                                            type="radio"
                                            checked={todo.running}
                                            onChange={() => toggleTimer(todo.id)}
                                            />
                                        <label  
                                            className={`toggle-option toggle-option-pendding ${todo.status === 0 ? 'active' : ''}`}
                                            onClick={() => toggleTimer(todo.id)}>
                                            {' '}
                                            </label>
                                        <input id={`na-${todo.id}`} name={`state-${todo.id}`} type="radio" checked={!todo.running} />
                                            <label  
                                            className={`toggle-option toggle-option-ongoing ${todo.status === 1 ? 'active' : ''}`}
                                            onClick={() => toggleTimer(todo.id)}>
                                            {' '}
                                            </label>
                                        <input
                                            id={`off-${todo.id}`}
                                            name={`state-${todo.id}`}
                                            type="radio"
                                            checked={!todo.running}
                                            onChange={() => toggleTimer(todo.id)}
                                            />
                                        <label  
                                            className={`toggle-option toggle-option-complete ${todo.status === 2 ? 'active' : ''}`}
                                            onClick={() => toggleTimer(todo.id)}>
                                            {' '}
                                            </label>

                                    </div>

                                    {/* <div className='flex flex-col'> */}
                                        <div className='todo-text text-text-color text-3xl'>{todo.text}</div>
                                        <div className='flex align-items-center mt-1 justify-between w-[50vw]'>
                                            <div 
                                            className={`
                                            ${todo.status === 0 ? 'pendding-text' : ''}
                                            ${todo.status === 1 ? 'ongoing-text' : ''}
                                            ${todo.status === 2 ? 'complete-text' : ''}
                                            `}>
                                                {''}
                                            </div>
                                            <div className='timer'>
                                                <span>{String(Math.floor((todo.time / (1000 * 60 * 60)) % 24)).padStart(2, '0')}</span>:
                                                <span>{String(Math.floor((todo.time / (1000 * 60)) % 60)).padStart(2, '0')}</span>:
                                                <span>{String(Math.floor((todo.time / 1000) % 60)).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                    </div>

                                {/* </div> */}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <Link to="/todo" >
                <button className='h-[40px] w-[40px] bg-light-pink text-white rounded-full text-lg d-flex justify-center items-center add-btn'><i className="fa fa-plus"></i></button>
          </Link>
      
    </div>
  )
}


export default List;