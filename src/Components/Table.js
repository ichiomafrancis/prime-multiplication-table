import React from "react";
import TableHeaderRow from "./TableHeaderRow";
import TableBody from "./TableBody";

const Table = ({ primeNos }) => {
  if (primeNos.length) {
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
  } else {
    return <h1 className="empty">Type in a number....</h1>;
  }
};

export default Table;
