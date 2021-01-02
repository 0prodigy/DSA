function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let k = Number(input[2]);
  console.log(findSum(arr.length - 1, k) ? "yes" : "no");
  function findSum(n, k) {
    if (n == 0 && k != 0) {
      return false;
    }
    if (k == 0) {
      return true;
    }
    if (arr[n] > k) {
      return findSum(n - 1, k);
    }
    return findSum(n - 1, k) || findSum(n - 1, k - arr[n]);
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`9
    1 6 7 8 9
    5`);
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
