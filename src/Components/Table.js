import React from "react";
import Row from "./Row";
import TableHeaderRow from "./TableHeaderRow";

const Table = (primeNos) => {
  let table;
  for (let data in tableData) {
    table = primeNos.map(() => {
      return <Row primeNos={primeNos} />;
      // return `<tr>
      //     <th><Row /></th>${row}
      //   </tr>`;
    });
  }
  console.log(table);

  return (
    <div>
      <table>
        <TableHeaderRow primeNos={primeNos} />
        {table}
      </table>
    </div>
  );
};

export default Table;
