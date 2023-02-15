import React from "react";

const Row = (primeNos) => {
  const tableData = primeNos.map((item) => {
    return <td>item</td>;
  });

  return <div>{tableData}</div>;
};

export default Row;
