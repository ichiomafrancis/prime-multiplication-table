import React from "react";
// import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
// import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  // const [input, setInput] = useState(2);
  // const [primeNos, setPrimeNos] = useState([]);
  const primeNos = [2, 3, 5, 7, 11, 13, 17];

  return (
    <div className="app">
      <Header />
      {/* <Form
        // input={input}
        // setInput={setInput}
        primeNos={primeNos}
        setPrimeNos={setPrimeNos}
      /> */}
      <Table primeNos={primeNos} />
    </div>
  );
};

export default App;
