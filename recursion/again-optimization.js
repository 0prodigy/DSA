function runProgram(input) {
  input = input.trim().split("\n");
  let t = Number(input[0]);
  for (let i = 1; i < input.length - 1; i++) {
    let [s, n] = input[i].trim().split(" ").map(Number);
    let arr = [];
    for (j = i + 1; j < i + n + 1; j++) {
      arr.push(input[j].trim().split(" ").map(Number));
    }
    console.log(steel(arr, n, s));
    i += n;
  }
}

function steel(arr, n, s) {
  if (n <= 0 || s <= 0) {
    return 0;
  }
  if (s < arr[n - 1][0]) {
    return steel(arr, n - 1, s);
  }
  return Math.max(
    arr[n - 1][1] + steel(arr, n - 1, s - arr[n - 1][0]),
    steel(arr, n - 1, s)
  );
}

if (process.env.USERNAME === "Bot") {
  runProgram(`1
  4 5
  1 8
  2 4
  3 0
  2 5
  2 3`);
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
