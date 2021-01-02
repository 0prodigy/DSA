let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let arr = lines[l++].trim().split(" ").map(Number);

  let dp = [];
  dp[0] = arr[0];
  dp[1] = arr[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(dp[i - 1] + Number(arr[i]), dp[i - 2] + Number(arr[i]));
  }
  console.log(dp[n - 1], dp);
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
