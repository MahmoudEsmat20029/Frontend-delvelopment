import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <SidebarContext value={{ openSidebar, setOpenSidebar }}>
      {children}
    </SidebarContext>
  );
}

export const useSidebar = () => useContext(SidebarContext);
