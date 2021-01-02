let lines, l;

function solve() {
  let n = parseInt(lines[l++]);
  let arr = lines[l++]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
    
  let result = new Set();

  function generateSubset(j, res) {
    for (let i = j; i < arr.length; i++) {
      result.add([...res, arr[i]]);
      generateSubset(++j, [...res, arr[i]]);
    }
  }
  generateSubset(0, "");
  let output = [];
  for (let key of result) {
    output.push(key.join(" "));
  }
  console.log(output.join("\n"));
}

function runProgram(input) {
  lines = input.trim().split("\n");
  l = 0;
  solve();
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  10 3`);
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

/* 
2
2 3
2 3 3
2 3 3 3
2 3 3 3 4
2 3 3 3 4 7
2 3 3 3 4 7 9
2 3 3 3 4 9
2 3 3 3 7
2 3 3 3 7 9
2 3 3 3 9
2 3 3 4
2 3 3 4 7
2 3 3 4 7 9
2 3 3 4 9
2 3 3 7
2 3 3 7 9
2 3 3 9
2 3 4
2 3 4 7
2 3 4 7 9
2 3 4 9
2 3 7
2 3 7 9
2 3 9
2 4
2 4 7
2 4 7 9
2 4 9
2 7
2 7 9
2 9
3
3 3
3 3 3
3 3 3 4
3 3 3 4 7
3 3 3 4 7 9
3 3 3 4 9
3 3 3 7
3 3 3 7 9
3 3 3 9
3 3 4
3 3 4 7
3 3 4 7 9
3 3 4 9
3 3 7
3 3 7 9
3 3 9
3 4
3 4 7
3 4 7 9
3 4 9
3 7
3 7 9
3 9
4
4 7
4 7 9
4 9
7
7 9
9


*/
