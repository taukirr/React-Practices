import React, {useState} from 'react'
import { useTodo } from '../Context/TodoContext';

function TodoItem({todoName}) {

    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todoName.todoName)
    const {updateTodo, deleteTodo, checkMark} = useTodo()

    const editTodo = () => {
        updateTodo(todoName.id, {...todoName, todoName: todoMsg})
        setIsTodoEditable(false)
    }

    const checkMarked = () => {
        checkMark(todoName.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todoName.checkStatus ? "bg-[#6ce700] text-white" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer w-6 h-6 mt-1"
                checked={todoName.checkStatus}
                onChange={checkMarked}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todoName.checkStatus ? "text-white" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todoName.checkStatus) return;
  
                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todoName.checkStatus}
            >
                {isTodoEditable ? "✔️" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todoName.id)}
            >
                ❌
            </button>
        </div>
    );
  }
  
  export default TodoItem;