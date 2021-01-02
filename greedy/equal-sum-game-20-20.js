function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .map((num, i) => [num, i]);
  arr.sort((a, b) => a[0] - b[0]);

  res.sort((a, b) => a[0] - b[0]);
  console.log(res);
}

if (process.env.USERNAME === "Bot") {
  runProgram("6 \n1 5 7 4 4 3");
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
