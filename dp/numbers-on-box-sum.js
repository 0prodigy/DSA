function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);
  let dp = [0];
  let max = -Infinity;
  // console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    dp[i + 1] = Math.max(arr[i], dp[i] + arr[i]);
  }

  console.log(Math.max(...dp));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`8
-2 -3 4 -1 -2 1 5 -3 `);
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
