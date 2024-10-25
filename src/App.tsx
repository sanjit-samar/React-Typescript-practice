import React from "react";
import "./App.css";
import { Users } from "./components/users/users";
import { Billboard } from "./components/BillBoard/Billboard";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  const handleClick2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked2", e);
  };

  const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change",e);
  };

  return (
    <div className="App">
      <Users />
      <Billboard
        handleClick={handleClick}
        handleClick2={handleClick2}
        value=""
        handleChange3={handleChange3}
      />
    </div>
  );
}

export default App;
