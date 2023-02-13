import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Form from "./Components/Form";
import TableRow from "./Components/TableRow";

const App = () => {
  const [input, setInput] = useState("");
  const [primeNos, setPrimeNos] = useState([]);
  return (
    <div className="app">
      <Header />
      <Form />
      <TableRow input={input} setInput={setInput} />
    </div>
  );
};

export default App;
