import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import TableBody from "./TableBody";

const Table = ({ primeNos }) => {
  return (
    <div>
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

export default Table;
