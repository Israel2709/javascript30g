let numbers = [1, 3, 6, 7];

const createOtherArray = () => {
  let result = numbers.map((item, index, arr) => {
    return `El resultado es ${item * 3}`;
  });

  return result;
};

console.log(createOtherArray());
