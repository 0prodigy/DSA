let lines, l;

function solve() {
  let [n, k] = lines[l++].trim().split(" ").map(Number);
  let arr = lines[l++]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let needed = 0;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (arr[i] + arr[j] <= k) {
      i++;
    }
    j--;
    needed++;
  }
  console.log(needed);
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
  runProgram(`1
  5 5
  1 2 2 2 1`);
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
