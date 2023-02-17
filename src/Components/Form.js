import React from "react";

const Form = ({ input, setInput, primeNos, setPrimeNos }) => {
  // Function to check if a number is a prime number
  const isPrime = (n) => {
    if (n === 0 || n === 1) return false;

    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Check through each no within the range and get the prime numbers
  const getPrimeNos = (number) => {
    for (let i = 1; i <= number; i++) {
      if (isPrime(i)) {
        setPrimeNos(...primeNos, i);
      }
    }
  };

  // Function to handle the input change task
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Function to handle the submit task
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (input.length !== 0 && input >= 2) {
      getPrimeNos(input);
    }
  };

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
