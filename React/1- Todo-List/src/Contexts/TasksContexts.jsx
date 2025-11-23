// Hooks
import { createContext, useReducer, useContext } from "react";

// Components
import TasksReducer from "../Reducers/TasksReducer";

const TasksContext = createContext([]);

export function TasksProvider({ children }) {
  // Reducers Hook usage
  const [tasks, dispatch] = useReducer(TasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
}

// Make Custom Hook
export const useTasks = () => useContext(TasksContext);
