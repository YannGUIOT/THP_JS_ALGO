const fs = require("fs");

const data = process.argv[2];
fs.readFile(data, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  arr_numbers = data.split(" ").map((num) => parseInt(num));

  // Tri fusion (merge sort)

  const mergeSort = (arr_numbers) => {
    let counter = 0;
    let numbers = [...arr_numbers];
    let half;

    const merger = (left, right) => {
      let arr = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          arr.push(left.shift()); // remove from the left part and push into the sorted array
        } else {
          arr.push(right.shift()); // remove from the right part and push into the sorted array
        }
      }
      return [...arr, ...left, ...right];
    };

    const mergeSortSplit = (numbers, half = numbers.length / 2) => {
      counter++;
      if (numbers.length < 2) return numbers;
      let left = numbers.splice(0, half); //left part of numbers
      return merger(mergeSortSplit(left), mergeSortSplit(numbers));
    };

    numbers = mergeSortSplit(arr_numbers, half);
    return `Tri fusion/Merge Sort: ${counter} comparaisons [${numbers}]`;
  };

  console.log(mergeSort(arr_numbers));

});