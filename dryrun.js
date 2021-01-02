function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(lowerBound(arr, n, k));
}

function lowerBound(arr, n, k) {
  let low = 0;
  let high = n;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  if (arr[ans] == k) {
    return ans;
  }
  return -1;
}

runProgram("5 3\n 1 2 2 1 3");
