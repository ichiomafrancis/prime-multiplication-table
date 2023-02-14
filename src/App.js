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
      <Header />
      <Form />
      <Table input={input} setInput={setInput} />
    </div>
  );
};

export default App;
