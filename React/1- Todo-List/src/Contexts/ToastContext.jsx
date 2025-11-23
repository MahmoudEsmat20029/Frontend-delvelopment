// Hooks
import { createContext, useState, useContext } from "react";

// Components
import SnackbarsToast from "../ToastMsg";

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  // {States} Hook usage
  const [openToast, setOpenToast] = useState(false);
  const [message, setMessage] = useState("true");

  // Local function
  function handleToastOpen(msg) {
    setOpenToast(true);
    setTimeout(() => setOpenToast(false), 2000);
    setMessage(msg);
  }

  return (
    <ToastContext.Provider value={{ handleToastOpen }}>
      <SnackbarsToast open={openToast} message={message} />
      {children}
    </ToastContext.Provider>
  );
};

// Make Custom Hook
export const useToast = () => useContext(ToastContext);
