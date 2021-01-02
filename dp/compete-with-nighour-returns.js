function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);
  let winner = Math.max(
    func(0, arr[0], 1, n - 1, false),
    func(0, arr[n - 1], 0, n - 2, false)
  );

  let total = arr.reduce((a, b) => a + b, 0);
  console.log(winner, total - winner);
  function func(o, y, i, j, turn) {
    if (i > j) {
      return y;
    }
    if (arr[i] >= arr[j]) {
      if (turn) {
        return func(o, y + arr[i], i + 1, j, !turn);
      } else {
        return func(o + arr[i], y, i + 1, j, !turn);
      }
    } else {
      if (turn) {
        return func(o, y + arr[j], i, j - 1, !turn);
      } else {
        return func(o + arr[j], y, i, j - 1, !turn);
      }
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  8 15 3 7
  `);
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
