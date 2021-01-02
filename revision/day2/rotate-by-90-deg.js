function runProgram(input) {
  input = input.trim().split("\n");
  let matrix = input.splice(1).map((row) => row.trim().split(" ").map(Number));
  let res = [];
  for (let i = matrix.length - 1; i >= 0; i--) {
    let temp = [];
    for (let j = 0; j < matrix.length; j++) {
      temp.push(matrix[j][i]);
    }
    res.push(temp.join(" "));
  }

  console.log(res.join("\n"));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  1 2 3 4
  5 6 7 8
  1 2 3 4
  5 6 7 8`);
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
