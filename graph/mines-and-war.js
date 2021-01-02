let lines, l;

function solve() {
  let [n, e] = lines[l++].trim().split(" ").map(Number);
  let j = e;
  let obj = {};

  for (let i = 1; i <= n; i++) {
    obj[i] = [];
  }

  while (j--) {
    let [a, b] = lines[l++].trim().split(" ").map(Number);
    obj[a].push(b);
  }

  let set = new Set();

  let count = 1;
  function maxDamage(num) {
    set.add(num);
    for (let child in obj[num]) {
      if (!set.has(obj[num][child])) {
        count++;
        maxDamage(obj[num][child]);
      }
    }
    return;
  }

  let max = 0;
  for (let num in obj) {
    if (!set.has(Number(num))) {
      Math.max(maxDamage(Number(num)), maxDamage(Number(num + 1)));
    }
  }

  console.log(count);
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`5 3
  1 2
  2 4
  1 3`);
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
