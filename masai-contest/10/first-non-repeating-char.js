let lines, l;

function solve() {
  let str = lines[l++].trim();
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] == 1 && key != " ") {
      console.log(key);
      return;
    }
  }
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`rac ecars`);
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
