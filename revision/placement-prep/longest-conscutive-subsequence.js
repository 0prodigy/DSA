let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let arr = lines[l++]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let max = 0;
  let count = 1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      max = Math.max(count, max);
      count = 0;
    }
    count++;
  }
  max = Math.max(max, count);

  console.log(max);
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
  5
  1 1 2 4 5
  6
  14 13 11 6 12 5`);
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
