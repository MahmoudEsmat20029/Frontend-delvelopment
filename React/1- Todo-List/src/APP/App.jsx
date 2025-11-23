/*
  Author: Mahmoud Esmat
  Date  : 22-11-2025
*/

/* ============================= Imports ============================= */
import "./App.css";

// Components
import Container from "../Container/Container";
import { TasksProvider } from "../Contexts/TasksContexts";
import { FilterProvider } from "../Contexts/FilterContext";
import { ToastProvider } from "../Contexts/ToastContext";

/* ============================= Main function ============================= */

function App() {
  /* =============== Local variables =============== */
  return (
    <TasksProvider>
      <FilterProvider>
        <ToastProvider>
          <div className="fake-body">
            <Container />
          </div>
        </ToastProvider>
      </FilterProvider>
    </TasksProvider>
  );
}

export default App;
