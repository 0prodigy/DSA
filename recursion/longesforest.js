function runProgram(input) {
  input = input.trim().split("\n");

  let matrix = input.splice(1, input.length).map((row) => row.trim().split(""));
  let res = 0;
  for (a in matrix) {
    for (b in matrix) {
      if (matrix[a][b] === "T") {
        res = Math.max(res, findForest(Number(a), Number(b)));
      }
    }
  }
  console.log(res);

  function findForest(r, c) {
    if (r < 0 || r >= matrix.length || c < 0 || c >= matrix.length) {
      return 0;
    }
    if (matrix[r][c] === "W" || matrix[r][c] == -1) {
      return 0;
    }
    matrix[r][c] = -1;
    return (
      1 +
      findForest(r + 1, c) +
      findForest(r, c + 1) +
      findForest(r - 1, c) +
      findForest(r, c - 1)
    );
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`5
  TTTWW
  TWWTT
  TWWTT
  TWTTT
  WWTTT`);
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
