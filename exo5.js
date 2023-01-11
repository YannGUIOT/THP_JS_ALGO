function hasTwoNumbersWithSumK(list, k) {
  let seenNumbers = new Set();
  for (let i = 0; i < list.length; i++) {
      if (seenNumbers.has(k - list[i])) {
          return true;
      }
      seenNumbers.add(list[i]);
  }
  return false;
}

let result1 = hasTwoNumbersWithSumK([10, 5, 3, 7],17);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result1);

let result2 = hasTwoNumbersWithSumK([10, 5, 3, 7],14);
console.log("List : [10, 5, 3, 7] - k = 17 => " + result2);