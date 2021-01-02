function runProgram(input) {
  input = input.trim().split("\n");
  let [k, n] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  let dp = {};
  function find(n, i) {
    if (n === 0) {
      return 1;
    }
    if (dp[[i, n]] !== undefined) {
      return dp[[i, n]];
    }
    if (i < 0 || n < 0) {
      return 0;
    }

    return (dp[[i, n]] = find(n - arr[i], i) + find(n, i - 1));
  }

  console.log(find(k, n - 1));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4 3
  1 2 3`);
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
