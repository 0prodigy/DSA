let lines, l;

function solve() {
  let arr = lines[l++];
  let str = lines[l++].trim();
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = false;
  }

  let output = "";

  for (let i = 0; i < str.length; i++) {
    let tempObj = { ...obj };
    let subLen = 0;
    let sub = "";
    for (let j = i; j < str.length; j++) {
      if (subLen == arr.length) {
        break;
      }
      if (!tempObj[str[i]]) {
        tempObj[str[i]] = true;
      }
      sub += str[j];
    }
    if (subLen >= arr.length) {
      output = sub;
    }
  }
  console.log(output, obj, str, arr);
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`xyz
  xyyzyzyx`);
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
