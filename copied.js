// const inputEl = document.getElementById("input-el");
// const buttonEl = document.getElementById("button-el");
// const tableEl = document.getElementById("table-el");
// let primeNos = [];

// buttonEl.addEventListener("click", () => {
//   if (inputEl.value.length !== 0) {
//     receiveRange();
//     inputEl.value = "";
//     primeNos = [];
//   }
// });

// // Receive and check the inputed value
// const receiveRange = () => {
//   let range = parseInt(inputEl.value);
//   if (!isNaN(range) && range !== 0) {
//     getPrimeNos(range);
//   } else {
//     alert("The input must be a number");
//   }
// };

// // Check if a number is a prime number
// const isPrime = (n) => {
//   if (n === 0 || n === 1) return false;

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// // Check through each no within the range and get the prime numbers
// const getPrimeNos = (range) => {
//   for (let i = 1; i <= range; i++) {
//     if (isPrime(i)) {
//       primeNos.push(i);
//     }
//   }
//   console.log(primeNos);
// };

// const createTableRows = () => {};

// let table = [];

// for (let i = 0; i < 10; i++) {
//   let row = [];

//   for (let j = 0; j < 10; j++) {
//     row.push((i + 1) * (j + 1));
//   }
//   table.push(row);
// }
// console.log(table);
// for (let i = 0; i < table.length; i++) {
//   let row = table[i];
//   console.log(row);

//   for (let j = 0; j < row.length; j++) {
//     let value = row[j];
//     // console.log(value);
//   }
// }

let table = [];

for (let i = 0; i < 10; i++) {
  let row = [];

  for (let j = 0; j < 10; j++) {
    row.push("<td>" + j + "</td>");
  }
  table.push(row);
}
// console.log(table);

let data = "";
let eachRow;
for (let i = 0; i < table.length; i++) {
  let row = table[i];
  for (let j = 0; j < row.length; j++) {
    data += row[j];
  }
  eachRow = `<tr>${data}<tr/> `;
}
console.log(data);
console.log(eachRow);
// let eachRow = table.map((item) => {
//   return "<tr>" + item + "</tr>";
// });

// console.log(eachRow);

// for (let i = 0; i < table.length; i++) {
//   let row = table[i];
//   for (let j = 0; j < row.length; j++) {
//     let value = row[j];
//     console.log(value);
//   }
// }

// const generateTable = (primes) => {
//   for (let i = 0; i < primes.length + 1; i++) {
//     for (let j = 0; j < primes.length; j++) {
//       primes.map((no) => {
//         <th>no</th>;
//       });
//     }
//   }
// };

// let row = `<th> $[no] <th/>`;
// let data = `<td> $[{no *[i] }] <td/>`;
