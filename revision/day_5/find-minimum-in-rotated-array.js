function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  let arr = input[1].trim().split(" ").map(Number);

  let low = 0;
  let high = n - 1;
  let ans = Infinity;
  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] < ans) {
      ans = arr[mid];
    }
    if (arr[mid] < arr[high]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  console.log(ans);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
