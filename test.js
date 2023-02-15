const primeNos = [2, 3, 5, 7, 11, 13, 17];

const headerRow = primeNos.map((num) => {
  return `<th>${num}</th>`;
});
// console.log(headerRow);

const tableData = primeNos.map((num) => {
  return `<td>${num}</td>`;
});
// console.log(tableData);
let table;

for (let i = 0; i < primeNos.length; i++) {
  table = tableData.map((data) => {
    // return <Row primeNos={primeNos} />;
    return `<tr>
        <th>${i}</th>${tableData}
      </tr>`;
  });
}
console.log(table);
