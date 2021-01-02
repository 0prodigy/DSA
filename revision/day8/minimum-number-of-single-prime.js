function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    console.log(findMin(Number(input[i])));
  }

  function findMin(n) {
    let dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
      if (i - 2 >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - 2]);

      if (i - 3 >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - 3]);

      if (i - 5 >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - 5]);

      if (i - 7 >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - 7]);
    }

    if (dp[n] == Infinity) return -1;
    return dp[n];
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`6
    7
    0
    1
    10
    14
    11`);
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
