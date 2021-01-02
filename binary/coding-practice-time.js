function runProgram(input) {
  input = input.split("\n");

  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  console.log(findTime(arr, n, m));
}

function findTime(arr, n, m) {
  let low = arr.reduce((a, b) => Math.max(a, b), 0);
  let high = arr.reduce((a, b) => a + b, 0);

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (predictive(arr, mid, m)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

function predictive(arr, time, day) {
  let i = 0;
  let days = 0;
  while (i < arr.length) {
    let count = 0;
    while (i < arr.length && count + arr[i] <= time) {
      count += arr[i];
      i++;
    }
    days++;
  }

  return days <= day;
}
runProgram("5 6\n 1 2 2 1 3");
