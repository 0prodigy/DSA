function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  let dp = new Array(n).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (j < n) {
        dp[j] = Math.min(dp[j], dp[i] + Math.abs(arr[j] - arr[i]));
      }
    }
  }

  console.log(dp[n - 1]);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`10 4
  40 10 20 70 80 10 20 70 80 60`);
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
