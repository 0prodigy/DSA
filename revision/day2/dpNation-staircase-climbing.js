let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let arr = lines[l++].trim().split(" ").map(Number);

  let dp = [];
  dp[0] = arr[0];
  dp[1] = arr[1];
  for (let i = 2; i < n; i++) {
    // if (i != n) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + arr[i];
    // } else {
    // dp[i] = Math.min(dp[i - 1], dp[i - 2]) + 0;
    // }
  }
  console.log(Math.min(dp[n - 1], dp[n - 2]));
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  let t = Number(lines[l++]);
  while (t--) {
    solve();
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  4
  0 0 0 0
  10
  1 100 1 1 1 100 1 1 100 1`);
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
