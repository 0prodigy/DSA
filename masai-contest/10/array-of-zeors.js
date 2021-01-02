let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let arr = lines[l++]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    arr[i + 1] -= arr[i];
    arr[i] = 0;
  }
  if (arr[n - 1]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`9
  1 2 3 4 5 6 7 8 9`);
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
