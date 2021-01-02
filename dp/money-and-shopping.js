let dp = {};
function runProgram(input) {
  input = input.trim().split("\n");
  let t = Number(input[0]);
  for (let i = 1; i < input.length - 1; i++) {
    let n = Number(input[i]);
    let arr = [];
    for (let j = i + 1; j <= i + n; j++) {
      arr.push(input[j].trim().split(" ").map(Number));
    }
    dp = {};
    solve(arr, n);
    i += n;
  }
}

function solve(arr, n) {
  console.log(
    Math.min(findMin(n - 1, 0), findMin(n - 1, 1), findMin(n - 1, 2))
  );

  function findMin(i, j) {
    if (i < 0 || j < 0) {
      return 0;
    }
    if (dp[[i, j]] != undefined) {
      return dp[[i, j]];
    }
    if (j == 0) {
      return (dp[[i, j]] = Math.min(
        findMin(i - 1, 1) + arr[i][0],
        findMin(i - 1, 2) + arr[i][0]
      ));
    }
    if (j == 1) {
      return (dp[[i, j]] = Math.min(
        findMin(i - 1, 0) + arr[i][1],
        findMin(i - 1, 2) + arr[i][1]
      ));
    }
    if (j == 2) {
      return (dp[[i, j]] = Math.min(
        findMin(i - 1, 1) + arr[i][2],
        findMin(i - 1, 0) + arr[i][2]
      ));
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
    3
    1 50 50
    50 50 50
    1 50 50
    4
    1 50 50
    50 50 50
    1 50 50
    1 50 50`);
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
