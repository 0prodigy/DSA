let lines, l;

function solve() {
  let e = Number(lines[l++]);
  let obj = {};
  while (e--) {
    let [a, b] = lines[l++].trim().split(" ").map(Number);
    if (!obj[a]) {
      obj[a] = [];
    }
    if (!obj[b]) {
      obj[b] = [];
    }
    obj[a].push(b);
    obj[b].push(a);
  }
  console.log(Object.keys(obj).length);
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
  3
  1 2
  2 3
  1 3
  `);
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
