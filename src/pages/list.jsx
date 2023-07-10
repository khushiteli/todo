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
                                <div className="toggle-button">
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
                                    <input id={`na-${todo.id}`} name={`state-${todo.id}`} type="radio" checked={!todo.running} />
                                    <label  onClick={() => toggleTimer(todo.id)}>
                                    pause
                                    </label>
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

                                <div className='timer'>
                                    <span>{String(Math.floor((todo.time / (1000 * 60 * 60)) % 24)).padStart(2, '0')}</span>:
                                    <span>{String(Math.floor((todo.time / (1000 * 60)) % 60)).padStart(2, '0')}</span>:
                                    <span>{String(Math.floor((todo.time / 1000) % 60)).padStart(2, '0')}</span>
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