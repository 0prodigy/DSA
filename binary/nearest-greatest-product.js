function runProgram(input) {
  input = input.trim().split("\n");
  let arr = input[1].trim().split(" ").map(Number);
  let i = 1;
  let j = 10 ** 10;

  let ans = -1;
  while (i <= j) {
    let mid = i + Math.floor((j - i) / 2);
    if (predict(mid)) {
      ans = mid;
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }

  function predict(mid) {
    let product = arr.reduce((a, b) => a * (b / mid), 1);
    console.log(product, mid);
    if (product >= 1) return false;
    return true;
  }

  console.log(ans);
}

if (process.env.USERNAME === "Bot") {
  runProgram(`5
  4 2 1 10 6
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
