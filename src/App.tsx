import React from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar/sidebar";
import { List } from "./components/List/list";
import { router } from "./pages/routers";
import { Snackbar } from "./components/Snackbar/snackbar";
import { useSnackbar } from "./components/Snackbar/useSnackbar";
import { ActionsContext } from "./contexts/actionsContext";
import { Button } from "./components";
import { RouterProvider } from 'react-router-dom';
import { Navbar } from "./components/Navbar/navbar";

function App() {
  const { showSnackbar, isActive, message, snackbarType, autoHide, hideSnackbar } = useSnackbar();

  return (
    <ActionsContext.Provider value={{ showSnackbar }}>
      <div className="App">
        <Navbar infoWidget/>
        <Button
          type="primary"
          onClick={() => showSnackbar({ message: "Tivemos um erro no servidor, por favor tente novamente mais tarde !", type: "error", autohide: true })}
        >
          Show Snackbar error
        </Button>
        <Button
          type="secondary"
          onClick={() => showSnackbar({ message: "Solicitação concluida com sucesso !", type: "sucess", autohide: true })}
        >
          Show Snackbar sucess
        </Button>
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
  );
}

export default App;
