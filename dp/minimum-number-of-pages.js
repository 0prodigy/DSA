function runProgram(input) {
  input = input.split("\n");

  let dp = [];
  for (let i = 1; i < input.length; i++) {
    dp = new Array(Number(input[i]));
    let res = findMinmumPage(input[i]);
    console.log(res == Infinity ? -1 : res);
  }

  function findMinmumPage(num) {
    if (num < 0) {
      return Infinity;
    }
    if (dp[num]) {
      return dp[num];
    }
    if (num == 0) {
      return 0;
    }
    return (dp[num] = Math.min(
      findMinmumPage(num - 10) + 1,
      findMinmumPage(num - 12) + 1
    ));
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  23
  32`);
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
