function runProgram(input) {
  input = input.trim().split("\n");
  let t = Number(input[0]);

  for (let i = 1; i < input.length - 1; i += 2) {
    let str = input[i].trim();
    let str2 = input[i + 1].trim();

    console.log(find(str, str2));
  }

  function find(target, given) {
    let dp = [];
    for (let i = 0; i <= target.length; i++) {
      dp.push(new Array(given.length + 1).fill(0));
    }

    for (let i = 0; i <= target.length; i++) {
      for (let j = 0; j <= given.length; j++) {
        if (i == 0) {
          dp[i][j] = j;
        } else if (j == 0) {
          dp[i][j] = i;
        } else {
          if (target[i - 1] == given[j - 1]) {
            dp[i][j] = dp[i - 1][j - 1];
          } else {
            dp[i][j] =
              1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
          }
        }
      }
    }

    return dp[target.length][given.length];
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  abcde
  abde
  abde
  abcde
  abcde
  abxde
  horse
  ros
  `);
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
