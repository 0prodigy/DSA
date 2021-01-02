function runProgram(input) {
  input = input.trim().split("\n");
  let arr = [];
  for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]));
  }

  for (let i = 0; i < 1; i++) {
    let res = [];
    generate(arr[i] * 2, 0, []);

    function generate(n, i, temp) {
      //   console.log(n, i, temp);
      if (i == n) {
        return res.push(temp);
      }

      for (let j = i; j < n; j++) {
        if (j % 2 != 0) {
          temp.push(")");
        } else {
          temp.push("(");
        }
        generate(n, j + 1, temp);
      }
    }

    console.log(res);
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`3
  3
  2
  1
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
