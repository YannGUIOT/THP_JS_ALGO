function compare(nums) {
  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    // On part du principe qu'il a la vision
    let canSee = true;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] >= nums[i]) {
        // Si il n'a pas la vision, casse la boucle
        canSee = false;
        break;
      }
    }
    if (canSee == true) {
      // Si il a la vision, compteur +1
      count++;
    }
  }
  return count;
}

const nums = [3, 7, 8, 3, 6, 1];
const nums2 = [1, 4, 5, 8];

console.log(nums + " => " + compare(nums));
console.log(nums2 + " => " + compare(nums2));