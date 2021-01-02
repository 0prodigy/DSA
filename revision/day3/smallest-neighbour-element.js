Array.prototype.peek = function () {
  return this[this.length - 1];
};

function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);

  let arr = input[1].trim().split(" ").map(Number);

  let stack = [];
  let res = [];
  for (let i = 0; i < n; i++) {
    while (stack.length != 0 && stack.peek() >= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      res.push(-1);
      stack.push(arr[i]);
    } else {
      res.push(stack.peek());
      stack.push(arr[i]);
    }
  }
  console.log(res.join(" "));
}

if (process.env.USERNAME === "Bot") {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
