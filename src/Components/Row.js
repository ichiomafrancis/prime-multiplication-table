import React from "react";

const Row = (primeNos) => {
  const tableData = primeNos.map((num) => {
    return `<td>${num}</td>`;
  });
  // console.log(tableData);

  return <div>{tableData}</div>;
};

export default Row;
