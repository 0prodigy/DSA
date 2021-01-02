function runProgram(input) {
  input = input.trim().split("\n");
  let t = input[0];
  for (let i = 1; i < input.length - 1; i++) {
    let [row, col] = input[i].trim().split(" ").map(Number);
    let matrix = [];
    for (j = i + 1; j <= i + row; j++) {
      matrix.push(input[j].trim().split(" ").map(Number));
    }
    console.log(maxSum(matrix, row, col));
    i += row;
  }
}

function maxSum(matrix, r, c) {
  let max = 0;
  let temp = [];
  for (let i = 0; i <= r; i++) {
    temp.push(new Array(c).fill(false));
  }
  for (let i = 0; i < c; i++) {
    max = Math.max(max, find(0, i, matrix[0][i]));
  }

  // console.log(temp);
  return max;

  function find(i, j) {
    // console.log(i, j, sum);
    if (i > r || j < 0 || j >= c) {
      return -Infinity;
    }

    if (i == r) {
      return 0;
    }

    if (temp[i][j]) {
      return temp[i][j];
    }

    let max =
      matrix[i][j] +
      Math.max(find(i + 1, j), find(i + 1, j + 1), find(i + 1, j - 1));
    temp[i][j] = max;
    return max;
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
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
