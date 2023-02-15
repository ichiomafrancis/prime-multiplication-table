import React from "react";

const TableHeaderRow = (primeNos) => {
  const headerRow = primeNos.map((nos) => {
    return <th>nos</th>;
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
