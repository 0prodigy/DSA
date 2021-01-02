Array.prototype.peek = function () {
  return this[this.length - 1];
};

function runProgram(input) {
  let str = input.trim();

  let res = "";
  for (let i = 1; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] != str[i - 1]) {
      res += str[i - 1];
    }
    
  }
  console.log(res);
}

if (process.env.USERNAME === "Bot") {
  runProgram("aaabccddd");
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
