function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1]
    .trim()
    .split(" ")
    .sort((a, b) => Number(a) - Number(b));

  let i = 0;
  let j = arr.length - 1;
  let res = 0;
  while (i < j) {
    // console.log(arr[i], arr[j], i, j);
    res += Math.abs(arr[i] - arr[j]);
    res += Math.abs(arr[j] - arr[i + 1]);
    i++;
    j--;
  }
  res += Math.abs(arr[j + 1] - arr[0]);
  console.log(res);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  1 2 4 8 10 12 14`);
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
