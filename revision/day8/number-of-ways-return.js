function runProgram(input) {
  let dp = new Array(parseInt(input)).fill(false);
  function solve(n) {
    if (n < 0) {
      return 0;
    }
    if (n == 0) {
      return 1;
    }
    if (dp[n]) {
      return dp[n];
    }
    return (dp[n] = solve(n - 1) + solve(n - 2) + solve(n - 3));
  }
  console.log(solve(parseInt(input)));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4`);
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
