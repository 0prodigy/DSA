function runProgram(input) {
  input = input.trim().split("\n");
  let [n, w] = input[0].split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);

  function solve() {
    let res = 1;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (count + arr[i] <= w) {
        count += arr[i];
      } else {
        res++;
        count = arr[i];
      }
    }

    return res;
  }
  console.log(solve());
}

if (process.env.USERNAME === "Bot") {
  runProgram(`4 12
  7 2 3 9`);
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
