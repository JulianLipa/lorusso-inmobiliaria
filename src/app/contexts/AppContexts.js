"use client";
import { createContext, useState, useContext } from "react";

const AppContext = createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [deptos, setDeptos] = useState([]);
  const [data, setData] = useState([]);
  const [isDeptosPage, setIsDeptosPage] = useState();
  const deptosLenght = deptos.length;

  return (
    <AppContext.Provider
      value={{
        deptos,
        deptosLenght,
        setDeptos,
        isDeptosPage,
        setIsDeptosPage,
        data,
        setData
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(`useAppContext tiene que ser usado dentro del provider`);
  }
  return context;
};

export default AppContext;