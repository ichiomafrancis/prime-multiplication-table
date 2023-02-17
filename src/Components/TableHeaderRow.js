import React from "react";

const TableHeaderRow = ({ primeNos }) => {
  // const primeNos = [2, 3, 5, 7, 11, 13, 17];
  const headerRow = primeNos.map((num, i) => {
    return <th key={i}>{num}</th>;
  });
  // console.log(tableData);

  return (
    <tr>
      <th>{""}</th>
      {headerRow}
    </tr>
  );
};

export default TableHeaderRow;
