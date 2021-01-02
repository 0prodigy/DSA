function runProgram(input) {
  input = input.trim().split("\n");
  let n = input[0];
  for (let i = 1; i < input.length; i++) {
    let [a, b, c, k] = input[i].trim().split(" ").map(Number);
    console.log(predective(a, b, c, k));
  }
}

function predective(a, b, c, k) {
  let low = 0;
  let high = k;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let res = a * mid ** 2 + b * mid + c;
    if (res >= k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
  3 2 4 15
  3 2 4 15`);
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
