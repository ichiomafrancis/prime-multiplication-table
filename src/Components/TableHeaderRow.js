import React from "react";

const TableHeaderRow = (primeNos) => {
  // const primeNos = [2, 3, 5, 7, 11, 13, 17];
  const headerRow = primeNos.map((num) => {
    return `<th>${num}</th>`;
  });

  return (
    <div>
      <tr>
        <th>{""}</th>
        {headerRow}
      </tr>
    </div>
  );
};

export default TableHeaderRow;
