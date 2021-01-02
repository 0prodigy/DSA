let lines, l;

function solve() {
  let n = lines[l++];

  let dp = {};

  function change(n) {
    if (n == 0) {
      return 0;
    }
    if (n == 1) {
      return 1;
    }
    if (dp[n] != undefined) {
      return dp[n];
    }
    return (dp[n] = Math.max(
      n,
      change(Math.floor(n / 2)) +
        change(Math.floor(n / 4)) +
        change(Math.floor(n / 3))
    ));
  }
  console.log(change(n));
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  let t = lines.length;
  while (t--) {
    solve();
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`12
  2`);
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
