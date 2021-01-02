let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let e = Number(lines[l++]);
  let j = e;
  let arr = [];
  while (j--) {
    arr.push(lines[l++].trim().split(" ").map(Number));
  }
  console.log(arr, n, e);
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  let t = Number(lines[l++]);
  while (t--) {
    solve();
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  4
  3
  0 1
  1 2
  1 3
  3
  0
  4
  2
  0 1
  1 2`);
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
