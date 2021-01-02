function runProgram(input) {
  // Write code here
  let boxes = 0;
  let j = 1;
  while (input > 0) {
    input -= j;
    j++;
    boxes++;
  }
  console.log(boxes);
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

runProgram(6);
