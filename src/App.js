import React from "react";
// import React, { useState } from "react";
import "./App.css";
import TableHeaderRow from "./Components/TableHeaderRow";
// import Form from "./Components/Form";
import TableBody from "./Components/TableBody";

const App = () => {
  // const [input, setInput] = useState(2);
  // const [primeNos, setPrimeNos] = useState([]);

  return (
    <div className="app">
      <table>
        <thead>
          <TableHeaderRow />
        </thead>
        <tbody>
          <TableBody />
        </tbody>
      </table>
    </div>
  );
};

export default App;
