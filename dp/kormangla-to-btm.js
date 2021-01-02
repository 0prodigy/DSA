function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);

  function findWay(arr, s, e) {
    let set = new Array(e);
    set[0] = 0;
    for (let i = 1; i < e; i++) {
      set[i] = 10 ** 7;
      for (let j = 0; j < i; j++) {
        if (i <= j + arr[j] && set[j] != 10 ** 7) {
          set[i] = Math.min(set[i], set[j] + 1);
          break;
        }
      }
    }
    return set[e - 1];
  }
  console.log(findWay(arr, 0, arr.length));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`11
1 3 5 8 9 2 6 7 6 8 9`);
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
