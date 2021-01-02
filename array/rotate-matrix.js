/* exptected output 
    1 1 2 3
    1 2 2 4
    1 3 3 4
    2 3 4 4
*/

function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input.splice(0, 1));
  let matrix = input.map((row) => row.trim().split(" ").map(Number));

  for (let i = 0; i < n; i++) {
    temp = -1;
    for (let j = i + 1; j < n - i; j++) {
      temp = matrix[i][j - 1];
      matrix[i][j] = temp;
    }
  }
  console.log(matrix.join("\n"));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4
  1 2 3 4
  1 2 3 4
  1 2 3 4
  1 2 3 4`);
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
