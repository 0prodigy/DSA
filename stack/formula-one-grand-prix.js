function runProgram(input) {
  input = input.trim().split("\n");
  for (let i = 1; i < input.length - 1; i += 2) {
    let n = Number(input[i]);
    let arr = input[i + 1].trim().split(" ").map(Number);
    console.log(findDriver(arr));
  }

  function findDriver(arr) {
    Array.prototype.peek = function () {
      return this[this.length - 1];
    };
    let n = arr.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let stack = [0];
    for (let i = 1; i < n; i++) {
      while (stack.length && arr[i] > arr[stack.peek()]) {
        stack.pop();
      }
      if (stack.length == 0) {
        left[i] = i;
      } else {
        left[i] = i - stack.peek();
      }
      stack.push(i);
    }
    stack = [n - 1];
    for (let i = n - 2; i >= 0; i--) {
      while (stack.length && arr[i] > arr[stack.peek()]) {
        stack.pop();
      }
      if (stack.length == 0) {
        right[i] = n - 1 - i;
      } else {
        right[i] = stack.peek() - i;
      }
      stack.push(i);
    }

    let max = 0;
    let res = 0;
    for (let i = 0; i < n; i++) {
      let num = (left[i] + right[i]) * (i + 1);
      num = num % 1000000007;
      if (num > max) {
        max = num;
        res = i;
      }
    }

    return res + 1;
  }
}

if (process.env.USERNAME === "Bot") {
  runProgram(`2
    5
    4 1 2 1 4
    5
    5 1 2 4 1`);
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
