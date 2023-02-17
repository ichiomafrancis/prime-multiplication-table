import React from "react";

const TableBody = () => {
  const primeNos = [2, 3, 5, 7, 11, 13, 17];

  let table = [];

  for (let i = 0; i < primeNos.length; i++) {
    let row = [];

    for (let j = 0; j < primeNos.length; j++) {
      row.push(<td>{primeNos[i] * primeNos[j]}</td>);
    }
    table.push(row);
  }

  const tbody = table.map((row, i) => {
    return (
      <tr key={i}>
        <th>{primeNos[i]}</th>
        {row}
      </tr>
    );
  });

  return <>{tbody}</>;
};

export default TableBody;
