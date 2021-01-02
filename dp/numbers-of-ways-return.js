function runProgram(input) {
  let res = new Array(Number(input)).fill(false);
  console.log(findWay(Number(input)));
  function findWay(num) {
    if (num < 0) {
      return 0;
    }
    if (num == 0) {
      return 1;
    }

    if (!res[num]) {
      let temp = findWay(num - 1) + findWay(num - 2) + findWay(num - 3);
      res[num] = temp;
      return temp;
    } else {
      return res[num];
    }
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4`);
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
