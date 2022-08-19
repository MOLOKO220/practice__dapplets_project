import React from "react";
import "./App.scss";
import SideManu from "../SideManu/SideManu";
import Header from "../Header/Header";
import Main from "..//Main/Main";

export default function App() {
  return (
    <div className="App">
      <SideManu />
      <div className="main-wrapp">
        <Header />
        <Main />
      </div>
    </div>
  );
}
