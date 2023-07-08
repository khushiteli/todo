import React , {useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Todo from './todo';

const List = () => {

    const [todos , setTodos] = useState([])

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

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
      };

    const test = () => {
        console.log("Test function worrking perfectly :) ");
    }

  return (
    <div className='w-[100vw] h-[100vh]'>
        <div className='hidden'>
            <Todo addTodo={addTodo} test={test}/>
        </div>
      <ul className='flex flex-column gap-3'>
                {todos.map((todo)=>{
                    return (
                        <li key={todo.id}>
                            <div className='todo-text'>{todo.text}</div>
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
                                <input id={`na-${todo.id}`} name={`state-${todo.id}`} type="radio" checked={!todo.running} />
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
                        </li>
                    )
                })}
            </ul>
            <Link to="/todo" >
                <button className='h-[30px] w-[30px] border border-blue bg-blue text-white rounded-2xl d-flex justify-content-center align-align-items-center add-btn'><i class="fa fa-plus"></i></button>
          </Link>
      
    </div>
  )
}




export default List;