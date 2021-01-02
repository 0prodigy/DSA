function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i += 2) {
    let [n, k, p] = input[i].trim().split(" ").map(Number);
    let arr = input[i + 1]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    console.log(check(n, k, p, arr));
  }
}

function check(n, k, p, arr) {
  for (let i = 0; i <= n - k; i++) {
    if (arr[i + (k - 1)] - arr[i] <= 2 * p) {
      return "NO";
    }
  }
  return "YES";
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
  5 2 1
  2 9 6 8 4`);
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
