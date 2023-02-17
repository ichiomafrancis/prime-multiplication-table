const isPrime = (n) => {
  if (n === 0 || n === 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// Check through each no within the range and get the prime numbers
const getPrimeNos = (number) => {
  let primes = [];
  for (let i = 1; i <= number; i++) {
    if (isPrime(i)) {
      // setPrimeNos(...primeNos, i);
      primes.push(i);
    }
  }
  return primes;
};

console.log(getPrimeNos(50));
