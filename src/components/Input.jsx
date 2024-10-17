import { useContext, useState } from "react";
import { handleInput } from "../Apps/handleInput.js";
import { TodoListContext } from "../utils/TodoListContext.jsx";

export const Input = () => {
  const [todo, setTodo] = useState("");
  const { todoList, setTodoList } = useContext(TodoListContext)
  const addTodo = () => {
    if (todo.trim()) {
      setTodoList([...todoList, todo])
      setTodo("");
    }
  }

  return (
    <>
      <div>
        <input type="text" placeholder="Add todo" name="todoinput" onChange={e => handleInput(e, setTodo)}/>
        <button onClick={addTodo}>Add</button>
      </div>
    </>
  )
}