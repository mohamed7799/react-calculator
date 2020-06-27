import React from "react";
import Header from "./comp/header/header";
import "./App.scss";
import Calculator from "./comp/calculator/calculator";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Calculator></Calculator>
    </div>
  );
}

export default App;
