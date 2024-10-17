import { useContext } from "react";
import { TodoListContext } from "../utils/TodoListContext";

export const TodoList = () => {
  const { todoList } = useContext(TodoListContext);

  return (
    <>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>{todoItem}</li>
        ))}
      </ul>
    </>
  )
}