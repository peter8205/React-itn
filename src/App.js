import React from "react";
import CalculatorForm from "./calculator/CalculatorForm";
import './App.css';

 const App = () => {
  const title = "React kalkulačka";

  return (
    <div className="App">
      <h1>{title}</h1>
      <CalculatorForm />
    </div>
  );
}
export default App;