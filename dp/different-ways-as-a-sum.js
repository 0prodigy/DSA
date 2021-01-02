function runProgram(input) {
  let n = Number(input);

  let dp = new Array(n + 1).fill(-1);
  console.log(ways(n));

  function ways(n) {
    if (n < 0) {
      return 0;
    }
    if (n == 0) {
      return 1;
    }
    if (dp[n] > -1) {
      return dp[n];
    }
    return (dp[n] = ways(n - 1) + ways(n - 3) + ways(n - 4));
  }
  //   console.log(dp);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`5`);
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
