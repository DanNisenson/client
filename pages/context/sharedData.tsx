import React from "react";
import { createContext, useContext, useState } from "react";
import { Hero } from "../../types/heroes";

export const SharedData = createContext();

type Props = {
  children: React.ReactNode;
};

const AppWrapper = ({ children }: Props) => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null);

  return <SharedData.Provider heroes={heroes}>{children}</SharedData.Provider>;
}

export function useAppContext() {
  return useContext(SharedData);
  }