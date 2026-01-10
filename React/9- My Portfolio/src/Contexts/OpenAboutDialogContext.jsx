import { createContext, useContext, useState } from "react";

const OpenAboutDialogContext = createContext();

export function OpenAboutDialogProvider({ children }) {
  const [openAboutDialog, setOpenAboutDialog] = useState(false);

  return (
    <OpenAboutDialogContext.Provider
      value={{ openAboutDialog, setOpenAboutDialog }}
    >
      {children}
    </OpenAboutDialogContext.Provider>
  );
}

export const useOpenAboutDialog = () => useContext(OpenAboutDialogContext);
