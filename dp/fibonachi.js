function runProgram(input) {
  let set = new Array(Number(input)).fill(false);
  console.log(fibonachi(Number(input)));
  function fibonachi(num) {
    if (num == 0) {
      set[num] = 0;
      return 0;
    }
    if (num == 1) {
      set[num] = 1;
      return 1;
    }
    if (!set[num]) {
      set[num] = fibonachi(num - 1) + fibonachi(num - 2);
      return set[num];
    }
    return set[num];
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram("6");
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
