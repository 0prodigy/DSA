let lines, l;

function solve() {
  let str1 = lines[l++];
  let str2 = lines[l++];

  let dp = new Array(str1.length + 1)
    .fill(1)
    .map((row) => new Array(str2.length + 1).fill(0));

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      } else if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp[str1.length][str2.length]);
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`AEDFHR
  ABCDGH`);
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
