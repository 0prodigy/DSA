function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  for (let t = 1; t < input.length; t++) {
    let [n, k] = input[t].trim().split(" ").map(Number);
    let arr = [];
    for (let i = t + 1; i <= t + n; i++) {
      if (input[i] != "") {
        arr.push(Number(input[i].trim()));
      }
    }
    arr = arr.sort((a, b) => a - b);
    console.log(findDistance(arr, n, k));
    t = t + n;
  }
}

function findDistance(arr, n, k) {
  let low = 0;
  let high = arr[arr.length - 1] - arr[0];
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (predective(arr, n, mid, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

function predective(arr, n, mid, k) {
  let c = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[c] >= mid) {
      c = i;
      count++;
      if (k == count) return true;
    }
  }

  return false;
}

runProgram("1\n5 2\n1\n2\n8\n4\n9");
