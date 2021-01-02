let lines, l;

function solve() {
  let matrix = [];
  let n = Number(lines[l++]);
  while (n--) {
    matrix.push(lines[l++].trim().split(" ").map(Number));
  }
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
      let r,c  = i,i;
      while(s){
        console.log(matrix[r][c])
      }
      //   if (s % 2 == 0) {
      //     console.log(matrix[s - j][s + j]);
      //   } else {
      //     console.log(matrix[s + j][s - j]);
      //   }
  }
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
  1 2 3
  4 5 6
  7 8 9`);
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
