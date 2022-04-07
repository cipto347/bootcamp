import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const authContext = createContext();

function useAuth() {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}

export function AuthProvider({ children }) {
  const auth = useAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

AuthProvider.propTypes = {
  children: propTypes.element.isRequired,
};

export default function AuthConsumer() {
  return useContext(authContext);
}
