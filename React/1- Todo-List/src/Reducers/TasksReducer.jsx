// For variant id
import { v4 as uuidv4 } from "uuid";

// Main function
export default function reducer(currentTasks, action) {
  // To Store data
  function storeData(data) {
    localStorage.setItem("tasks", JSON.stringify(data));
    return data;
  }

  switch (action.type) {
    // ==================== First case ====================
    case "create": {
      if (action.payload.title.trim().length > 0) {
        const newTask = {
          id: uuidv4(),
          title: action.payload.title,
          isCompleted: false,
        };

        const updatedTasks = [...currentTasks, newTask];
        return storeData(updatedTasks);
      }
      break;
    }
    // ==================== Second case ====================
    case "get": {
      return JSON.parse(localStorage.getItem("tasks")) || [];
    }
    // ==================== Third case ====================
    case "edit": {
      if (action.payload.title.trim().length > 0) {
        const checkDoneTask = currentTasks.map((t) =>
          t.id === action.payload.id ? { ...t, title: action.payload.title } : t
        );
        return storeData(checkDoneTask);
      }
      break;
    }
    // ==================== Fourth case ====================
    case "delete": {
      const checkDeletedTask = currentTasks.filter(
        (t) => t.id !== action.payload.id
      );
      return storeData(checkDeletedTask);
    }
    // ==================== Fifth case ====================
    case "complete": {
      const checkDoneTask = currentTasks.map((t) =>
        t.id === action.payload.id ? { ...t, isComplete: !t.isComplete } : t
      );
      return storeData(checkDoneTask);
    }

    default:
      throw Error("Unkown action type " + action.type);
  }
}
