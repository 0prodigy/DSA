function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let n = arr.length;
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(Array(n).fill(false));
  }

  console.log(find(0, -1));

  function find(i, j) {
    if (i == n) {
      return 0;
    }
    if (res[i][j]) {
      return res[i][j];
    }
    if (arr[i] > arr[j] || j == -1) {
      return (res[i][j] = Math.max(find(i + 1, i) + 1, find(i + 1, j)));
    }
    return (res[i][j] = find(i + 1, j));
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`9
  10 22 9 33 21 50 41 60 80`);
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
