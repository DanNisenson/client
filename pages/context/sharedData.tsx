import React from "react";
import { createContext, useContext, useState } from "react";
import { Hero } from "../../types/heroes";

type Props = {
  children: React.ReactNode;
};

export const SharedData = createContext({});

export const AppWrapper = ({ children }: Props) => {
  const [heroes, setHeroes] = useState([]);
  console.log(heroes);
  return (
    <SharedData.Provider value={{ heroes, setHeroes }}>
      {children}
    </SharedData.Provider>
  );
};

export function useAppContext() {
  return useContext(SharedData);
}
