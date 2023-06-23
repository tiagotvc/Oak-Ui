import React from "react";
import "./App.css";
import { Button } from "./components/Button/button";
import { Sidebar } from "./components/Sidebar/sidebar";
import { List } from "./components/List/list";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <List/>
      </Sidebar>
      <div className="middle">
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button type="dark">Dark</Button>
        <Button type="sucess">Sucess</Button>
        <Button type="danger">Danger</Button>
        <Button type="gradient">Gradient</Button>
      </div>
    </div>
  );
}

export default App;
