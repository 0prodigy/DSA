let lines, l;

function solve() {
  let n = Number(lines[l++]);
  let arr = lines[l++].trim().split(" ");
  let q = Number(lines[l++]);

  let temp = [0];

  for (let i = 0; i < n; i++) {
    let reg = /^[aeiou].*[aeiou]$/;
    if (reg.test(arr[i])) {
      temp.push(temp[i] + 1);
    } else {
      temp.push(temp[i]);
    }
  }

  while (q--) {
    let [i, j] = lines[l++].trim().split(" ").map(Number);
    console.log(temp[j] - temp[i - 1]);
  }
  console.log(temp);
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`5
  aba suna oua tes aba
  5
  1 5
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
