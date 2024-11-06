import { useContext } from "react";
import { TodoListContext } from "../utils/TodoListContext";
import { FaTrash } from "react-icons/fa6";
import { handleCheckbox } from "../Apps/handleCheckbox";
import { handleDelete } from "../Apps/handleDelete";

export const TodoList = () => {
  const { todoList } = useContext(TodoListContext);

  return (
    <>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>
            <p>{todoItem}</p>
            <span>
              <input type="checkbox" onClick={e => handleCheckbox(e)}></input>
              <FaTrash onClick={e => handleDelete(e)}/>
            </span>
          </li>
        ))}
      </ul>
    </>
  )
}