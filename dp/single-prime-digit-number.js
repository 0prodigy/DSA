function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    console.log(findNum(Number(input[i])));
  }
  function findNum(n) {
    let dp = new Array(n + 1).fill(Infinity);

    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
      if (i - 2 >= 0) {
        dp[i] = Math.min(dp[i], dp[i - 2] + 1);
      }
      if (i - 3 >= 0) {
        dp[i] = Math.min(dp[i], dp[i - 3] + 1);
      }
      if (i - 5 >= 0) {
        dp[i] = Math.min(dp[i], dp[i - 5] + 1);
      }
      if (i - 7 >= 0) {
        dp[i] = Math.min(dp[i], dp[i - 7] + 1);
      }
    }

    if (dp[n] == Infinity) {
      return -1;
    }

    return dp[n];
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  7
  1
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
