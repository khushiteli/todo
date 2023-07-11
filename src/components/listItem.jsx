import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({todo , toggleTimer , EditHandler , DeleteHandler}) => {

  return (
    <li key={todo.id}>
              <div
                className={`task-complete ${
                  todo.status === 2 ? "active" : ""
                } flex gap-5 w-[100%] items-center`}
              >
                <div className="flex gap-8 pl-4 items-center w-[100%]">
                  <div className="toggle-button">
                    <input
                      id={`on-${todo.id}`}
                      name={`state-${todo.id}`}
                      type="radio"
                      checked={todo.running}
                      onChange={() => toggleTimer(todo.id)}
                    />
                    <label
                      className={`toggle-option toggle-option-pendding ${
                        todo.status === 0 ? "active" : ""
                      }`}
                      onClick={() => toggleTimer(todo.id)}
                    >
                      {" "}
                    </label>
                    <input
                      id={`na-${todo.id}`}
                      name={`state-${todo.id}`}
                      type="radio"
                      checked={!todo.running}
                    />
                    <label
                      className={`toggle-option toggle-option-ongoing ${
                        todo.status === 1 ? "active" : ""
                      }`}
                      onClick={() => toggleTimer(todo.id)}
                    >
                      {" "}
                    </label>
                    <input
                      id={`off-${todo.id}`}
                      name={`state-${todo.id}`}
                      type="radio"
                      checked={!todo.running}
                      onChange={() => toggleTimer(todo.id)}
                    />
                    <label
                      className={`toggle-option toggle-option-complete ${
                        todo.status === 2 ? "active" : ""
                      }`}
                      onClick={() => toggleTimer(todo.id)}
                    >
                      {" "}
                    </label>
                  </div>

                  <div className="flex gap-4 items-center justify-between w-[100%]">
                    <div>
                      <div
                        className={`todo-text text-3xl text-gray font-semibold task-complete-text ${
                          todo.status === 2 ? "active" : ""
                        }`}
                      >
                        {todo.text}
                      </div>
                      <div className="timer font-medium">
                        <span>
                          {String(
                            Math.floor((todo.time / (1000 * 60 * 60)) % 24)
                          ).padStart(2, "0")}
                        </span>
                        :
                        <span>
                          {String(
                            Math.floor((todo.time / (1000 * 60)) % 60)
                          ).padStart(2, "0")}
                        </span>
                        :
                        <span>
                          {String(Math.floor((todo.time / 1000) % 60)).padStart(
                            2,
                            "0"
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2 pr-2">
                      <div className="flex gap-2">
                        <Link to="/todo">
                          <button
                            className="bg-green text-white w-[35px] h-[35px] flex justify-center items-center rounded-lg "
                            onClick={() => EditHandler(todo.id)}
                            title="Edit"
                          >
                            <i class="fa fa-edit"></i>
                          </button>
                        </Link>
                        <button
                          className="bg-red text-white w-[35px] h-[35px] flex justify-center items-center rounded-lg "
                          onClick={() => DeleteHandler(todo.id)}
                          title="Delete"
                        >
                          <i class="fa fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
  )
}

export default ListItem
