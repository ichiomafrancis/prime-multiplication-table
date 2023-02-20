import React from "react";
import { v4 as uuidv4 } from "uuid";

const TableBody = ({ primeNos }) => {
  let table = [];

  for (let i = 0; i < primeNos.length; i++) {
    let row = [];

    for (let j = 0; j < primeNos.length; j++) {
      row.push(<td key={uuidv4()}>{primeNos[i] * primeNos[j]}</td>);
    }
    table.push(row);
  }

  const tbody = table.map((row, i) => {
    return (
      <tr key={uuidv4()}>
        <th>{primeNos[i]}</th>
        {row}
      </tr>
    );
  });

  return <>{tbody}</>;
};

export default TableBody;
