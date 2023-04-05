import React, { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

function SideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, handleClose, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SideBarProvider;
