let lines, l;

function solve() {
  let n = lines[l++];
  let arr = lines[l++].trim().split(" ").map(Number);

  let dp = {};
  function fn(i) {
    if (i == arr.length) {
      return 0;
    }
    if (dp[i] != undefined) {
      return dp[i];
    }
    return (dp[i] = Math.max(fn(i + 1) + arr[i], arr[i]));
  }

  fn(0);
  let max = 0;
  for (let key in dp) {
    if (dp[key] > max) {
      max = dp[key];
    }
  }
  console.log(max);
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;

  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`8
  -2 -3 4 -1 -2 1 5 -3`);
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
