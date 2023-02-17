import React, { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import TableHeaderRow from "./Components/TableHeaderRow";
import TableBody from "./Components/TableBody";

const App = () => {
  const [input, setInput] = useState("");
  const [primeNos, setPrimeNos] = useState([]);

  return (
    <div className="app">
      <div>
        <Form
          input={input}
          setInput={setInput}
          primeNos={primeNos}
          setPrimeNos={setPrimeNos}
        />
      </div>

      <table>
        <thead>
          <TableHeaderRow primeNos={primeNos} />
        </thead>

        <tbody>
          <TableBody primeNos={primeNos} />
        </tbody>
      </table>
    </div>
  );
};

export default App;
