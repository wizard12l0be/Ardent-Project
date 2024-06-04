import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const Contect = createContext({ isAuthenticated: false });
const AppWrapper = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Contect.Provider
      value={{ isAuthenticated, setAuthenticated, user, setUser }}
    >
      <App />
    </Contect.Provider>
  );
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
