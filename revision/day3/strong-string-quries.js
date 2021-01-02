let lines, l;

function solve() {
  let arr = lines[l++].trim().split(" ");
  let n = Number(lines[l++]);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let regex = /^[aeiou].*[aeiou]$/;
    if (regex.test(arr[i])) {
      res[i] = true;
    } else {
      res[i] = false;
    }
  }
  console.log(res);

  while (n--) {
    let [i, j] = lines[l++].trim().split(" ").map(Number);
    // console.log(i, j);
    let count = 0;
    for (let k = i - 1; k < j; k++) {
      if (res[k]) {
        count++;
      }
    }
    console.log(count);
  }
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 1;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  aba suna oua tes abadao
  4
  1 9
  2 4
  1 3
  3 5
  5 5`);
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
