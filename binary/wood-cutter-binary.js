function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  console.log(findLength(arr, k));
}

function findLength(arr, k) {
  let low = 0;
  let high = arr.reduce((a, b) => (a > b ? a : b), 0);
  let ans;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (predective(arr, mid, k)) {
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}

function predective(arr, num, k) {
  let wood = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      wood += arr[i] - num;
    }
  }
  return wood >= k;
}

if (process.env.USERNAME === "Bot") {
  runProgram("5 9" + "\n" + "20 15 10 17");
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
