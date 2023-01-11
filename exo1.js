function hasTwoNumbersWithSumK(list, k) {
  for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
          if (list[i] + list[j] === k) {
              return true;
          }
      }
  }
  return false;
}

let result = hasTwoNumbersWithSumK([10, 5, 3, 7],17);
console.log("List : [10, 5, 3, 7] - k = 17     =>    " + result);

result = hasTwoNumbersWithSumK([12, 5, 1, 8],14);
console.log("List : [12, 5, 1, 8] - k = 14     =>    " + result);

result = hasTwoNumbersWithSumK([11, 4, 8, 2],15);
console.log("List : [11, 4, 8, 2] - k = 15     =>    " + result);

