const countPrimeNumbers = () => {
  let count = 0;

  for (let i = 2; i <= 100; i++) {
    if (isPrimerino(i)) {
      count++;
    }
  }
  return count;
};

const isPrimerino = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const time1 = performance.now();
countPrimeNumbers();
const time2 = performance.now();

console.log(
  `Execution time of printing countPrimeNumbers was ${
    time2 - time1
  } milliseconds.`
);
