function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i]);
    var step = 0;
    while (n != 1) {
      if (n % 2 == 0) {
        n /= 2;
        step++;
      } else if (n % 3 == 0) {
        n = (2 * n) / 3;
        step++;
      } else if (n % 5 == 0) {
        n = (4 * n) / 5;
        step++;
      } else {
        step = -1;
        break;
      }
    }
    console.log(step);
  }
}

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

runProgram(
  "6" +
    "\n" +
    "1" +
    "\n" +
    "10" +
    "\n" +
    "25" +
    "\n" +
    "30" +
    "\n" +
    "14" +
    "\n" +
    "27"
);
