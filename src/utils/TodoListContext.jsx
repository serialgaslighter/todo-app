import { createContext, useState } from "react";

export const TodoListContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  return (
    <TodoListContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoListContext.Provider>
  );
}