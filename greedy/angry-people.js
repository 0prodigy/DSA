function runProgram(input) {
  // Write code here
  input = input.split("\n");
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      output.push(arr[i]);
    } else {
      output.unshift(arr[i]);
    }
  }

  let max = Math.abs(output[0] - output[output.length - 1]);
  for (let i = 0; i < output.length; i++) {
    if (Math.abs(output[i] - output[i + 1]) > max) {
      max = Math.abs(output[i] - output[i + 1]);
    }
  }
  console.log(max);
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

runProgram("4" + "\n" + "5 10 6 8");
runProgram("4" + "\n" + "2 4 6 8 10 12");
