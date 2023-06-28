import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar/sidebar";
import { List } from "./components/List/list";
import { router } from "./pages/routers";
import { Snackbar } from "./components/Snackbar/snackbar";
import { useSnackbar } from "./components/Snackbar/useSnackbar";
import { ActionsContext } from "./contexts/actionsContext";
import { Button } from "./components";
import { RouterProvider } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme/theme";

function App() {
  const {
    showSnackbar,
    isActive,
    message,
    snackbarType,
    autoHide,
    hideSnackbar,
  } = useSnackbar();

  return (
    <ThemeProvider theme={theme}>
      <ActionsContext.Provider value={{ showSnackbar }}>
        <div className="App">
          <Navbar infoWidget />
          <Snackbar
            message={message as string}
            active={isActive}
            type={snackbarType}
            autoHide={autoHide}
            snackbarCallback={hideSnackbar}
          />
          <Sidebar>
            <List />
          </Sidebar>
          <div className="middle">
            <RouterProvider router={router} />
          </div>
        </div>
      </ActionsContext.Provider>
    </ThemeProvider>
  );
}

export default App;
