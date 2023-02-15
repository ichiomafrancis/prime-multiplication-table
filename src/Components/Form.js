import React from "react";

const Form = (primeNos, setPrimeNos) => {
  // Function to handle the submit task
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // setPrimeNos([]);
  };
  // Function to handle the input change task
  const handleInputChange = (event) => {
    if (event.target.value !== 0) {
      let range = Number(event.target.value);
      console.log(range);
      receiveRange(range);
    }
    // console.log(event.target.value);
  };

  // Receive and check the inputed value
  const receiveRange = (range) => {
    if (isNaN(range) && range < 2) {
      alert(
        "The input must be a number and it must be greater than or equal to 2"
      );
    } else {
      // getPrimeNos(range);
    }
  };

  // Check if a number is a prime number
  const isPrime = (n) => {
    if (n === 0 || n === 1) return false;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Check through each no within the range and get the prime numbers
  // const getPrimeNos = (number) => {
  //   for (let i = 1; i <= number; i++) {
  //     if (isPrime(i)) {
  //       primeNos.push(i);
  //     }
  //   }
  //   // console.log(primeNos);
  // };

  return (
    <form onSubmit={handleFormSubmit}>
      <span>From 2 - </span>
      <input
        type="number"
        // value={input}
        onChange={handleInputChange}
        placeholder="Enter end point....."
        className="form--input"
      />
      <button type="submit" className="btn">
        Generate
      </button>
    </form>
  );
};

export default Form;
