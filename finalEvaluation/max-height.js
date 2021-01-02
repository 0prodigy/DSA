let lines, l;

function solve() {
  let n = parseInt(lines[l++]);
  let arr = [];
  while (n--) {
    let [h, w] = lines[l++].trim().split(" ");
    arr.push(parseInt(h) * parseInt(w));
  }
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j] && j < i) {
        res++;
      }
    }
  }
  console.log(arr);
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
  runProgram(`3
  2
  1 1
  2 2
  3
  2 1
  1 2
  3 3
  4
  4 4
  3 3
  2 2
  1 1`);
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
