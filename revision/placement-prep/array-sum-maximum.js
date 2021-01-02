let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let arr = lines[l++]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let max = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] < arr[i]) {
        sum += arr[i] * -1;
      } else {
        sum += arr[i];
      }
    }
    console.log(sum);
    if (sum >= max) {
      max = sum;
    }
  }
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
  3
  2 3 1
  5
  1 6 7 1 5`);
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
