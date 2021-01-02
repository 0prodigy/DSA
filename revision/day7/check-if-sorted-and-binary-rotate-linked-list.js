function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);

  let slow = 0;
  let fast = 0;
  do {} while (slow != fast);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`6
  3 4 7 9 1 2`);
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
