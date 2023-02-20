import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  const [input, setInput] = useState("");
  const [primeNos, setPrimeNos] = useState([]);

  return (
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="form">
        <Form input={input} setInput={setInput} setPrimeNos={setPrimeNos} />
      </div>
      <div>
        <Table primeNos={primeNos} />
      </div>
    </div>
  );
};

export default App;
