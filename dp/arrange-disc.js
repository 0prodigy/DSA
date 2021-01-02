function runProgram(input) {
  input = input.trim().split("\n");
  let t = input[0];
  let dp = {};
  for (let i = 1; i < input.length - 1; i++) {
    let n = Number(input[i]);
    let arr = [];
    for (let j = i + 1; j <= i + n; j++) {
      arr.push(input[j].trim().split(" ").map(Number));
    }
    dp = {};
    arrageDisc(arr);
    i += n;
  }

  function arrageDisc(arr) {
    arr = arr.sort((a, b) => a[0] - b[0]);
    console.log(arrange(arr.length, -1));
    function arrange(i, j) {
      if (i == 0) {
        return 0;
      }
      if (dp[[i, j]] !== undefined) {
        return dp[[i, j]];
      }
      if (
        j == -1 ||
        (arr[i - 1][0] < arr[j - 1][0] && arr[i - 1][1] < arr[j - 1][1])
      ) {
        return (dp[[i, j]] = Math.max(
          arr[i - 1][1] + arrange(i - 1, i),
          arrange(i - 1, j)
        ));
      }
      return (dp[[i, j]] = arrange(i - 1, j));
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
  3
  4 3
  1 4
  3 2
  5
  5 6
  4 3
  1 2
  7 5
  3 4`);
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
