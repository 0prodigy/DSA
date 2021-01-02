function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0].trim());
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let total = arr.reduce((a, b) => a + b, 0);
  console.log(Math.max(total, 2 * arr[n - 1]));

  let i = 0;
  let j = n - 1;
  let sum = 0;
  let jsum = 0;
  while (i < j) {
    jsum += arr[j];
    while (arr[j] > sum + arr[i]) {
      sum += arr[i];
      i++;
    }
    if (i == j) {
      sum += arr[j] - sum;
    } else {
      sum += arr[j];
      j--;
    }
  }

  console.log(sum + jsum);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`5
  2 8 3 8 9`);
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
