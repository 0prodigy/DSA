function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  console.log(cutter(arr, k));
}

function cutter(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (k == 0) {
      return arr[i];
    }
    k -= (arr[i] - arr[i + 1]) * (i + 1);
  }
  return -1;
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

runProgram("4 7" + "\n" + "20 15 10 17");
