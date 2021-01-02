function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    solve(input[i].trim());
  }
}

function solve(str) {
  let dp = {};
  console.log(findMin(0, str.length - 1));
  function findMin(i, j) {
    if (i > j) {
      return Infinity;
    }
    if (i == j) {
      return 0;
    }
    if (i == j - 1) {
      if (str[i] == str[j]) {
        return 0;
      }
      return (dp[[i, j]] = 1);
    }
    if (dp[[i, j]] != undefined) {
      return dp[[i, j]];
    }
    if (str[i] == str[j]) {
      return (dp[[i, j]] = findMin(i + 1, j - 1));
    } else {
      return (dp[[i, j]] = Math.min(findMin(i, j - 1), findMin(i + 1, j)) + 1);
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
  fft`);
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
