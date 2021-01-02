let lines, l;

function solve() {
  let [n, k] = lines[l++].trim().split(" ").map(Number);

  let weight = lines[l++]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let res = 0;
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    if (weight[i] + weight[j] <= k) {
      i++;
      j--;
    } else {
      j--;
    }
    res++;
  }

  console.log(res);
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
  4 5
  3 5 3 4
  4 3
  1 2 2 3`);
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
