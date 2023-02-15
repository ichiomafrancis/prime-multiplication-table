import React from "react";
import Row from "./Row";
import TableHeaderRow from "./TableHeaderRow";

const Table = (primeNos) => {
  const table = Row.map((row) => {
    return (
      <tr>
        <th>primeNos</th>row
      </tr>
    );
  });

  return (
    <div>
      <table>
        <TableHeaderRow />
        {table}
      </table>
    </div>
  );
};

export default Table;
