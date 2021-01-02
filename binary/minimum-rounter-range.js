function runProgram(input) {
  input = input.trim().split("\n");
  let [n, r] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(findStrength(arr, n, r));
}

function findStrength(arr, n, r) {
  let low = 0;
  let high = 10000000;

  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (predicate(arr, mid, r)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function predicate(arr, mid, r) {
  let current = arr[0] + mid;
  let router = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i + 1] - current) > mid) {
      current = arr[i + 1] + mid;
      router++;
    }
  }
  return router <= r;
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4 2
    1 5 20 25`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
