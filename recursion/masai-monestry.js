function runProgram(input) {
  input = input.trim().split("\n").map(Number);
  for (let i = 0; i < input.length; i++) {
    let sum = coinSum(input[i]);
    if (sum > input[i]) {
      console.log(sum);
    } else {
      console.log(input[i]);
    }
  }
}

let res = 0;
function coinSum(n) {
  if (n <= 0) {
    return 0;
  }
  let sum =
    coinSum(Math.floor(n / 2)) +
    coinSum(Math.floor(n / 3)) +
    coinSum(Math.floor(n / 4));

  return sum > n ? sum : n;
}

if (process.env.USERNAME === "Bot") {
  runProgram(`12
  2`);
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
