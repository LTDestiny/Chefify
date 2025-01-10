import { createContext } from "react";

export const AuthContext = createContext<{
  isLoggedIn: boolean;

  userId: string | null;

  login: (uid: string) => void;

  logout: () => void;
}>({
  isLoggedIn: false,

  userId: null,

  login: () => {},

  logout: () => {},
}); // create a context object with default values
