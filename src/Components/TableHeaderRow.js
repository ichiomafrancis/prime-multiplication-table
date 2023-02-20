import React from "react";

const TableHeaderRow = ({ primeNos }) => {
  const headerRow = primeNos.map((num, i) => {
    return <th key={i}>{num}</th>;
  });

  return (
    <tr>
      <th>{""}</th>
      {headerRow}
    </tr>
  );
};

export default TableHeaderRow;
