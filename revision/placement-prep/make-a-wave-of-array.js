function runProgram(input) {
  let res = [];
  input = input.trim().split("\n");
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => Number(a) - b);

  for (let i = 0; i < arr.length; i += 2) {
    res.push(arr[i + 1], arr[i]);
  }
  console.log(res.join(" "));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`10
  9 8 4 10 3 6 5 7 1 2`);
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
