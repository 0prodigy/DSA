function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0].trim());
  let arr = input[1].trim().split(" ").map(Number);

  let dp = [];

  dp[0] = 0;
  dp[1] = Math.abs(arr[0] - arr[1]);
  for (let i = 2; i < arr.length; i++) {
    let temp1 = Math.abs(arr[i] - arr[i - 1]) + dp[i - 1];
    let temp2 = Math.abs(arr[i] - arr[i - 2]) + dp[i - 2];
    dp[i] = Math.min(temp1, temp2);
  }
  console.log(dp[n - 1]);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  10 30 40 20`);
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
