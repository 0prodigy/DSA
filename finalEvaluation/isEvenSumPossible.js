let lines, l;

function solve() {
  let n = parseInt(lines[l++]);
  let arr = lines[l++].trim().split(" ").map(Number);
  let res = "N";
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < arr.length; j++) {
      temp += arr[j];
      if (temp % 2 == 0) {
        res = "Yes";
        break;
      }
    }
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
  1
  5
  4
  1 2 3 4`);
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
