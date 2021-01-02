let lines, l;

function solve() {
  let [n, m] = lines[l++].trim().split(" ").map(Number);
  if (n > m) {
    console.log("NO");
    return;
  }
  let boys = lines[l++]
    .trim()
    .split(" ")
    .sort((a, b) => Number(a) - b);
  let girls = lines[l++]
    .trim()
    .split(" ")
    .sort((a, b) => Number(a) - b);

  let i = 0;
  while (i < n) {
    if (boys[i] <= girls[i]) {
      console.log("NO");
      return;
    }
    i++;
  }
  console.log("YES");
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  let t = Number(input[l++]);
  while (t--) {
    solve();
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
  4 5
  2 5 6 8
  3 7 5 1`);
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
