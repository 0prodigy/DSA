function runProgram(input) {
  //Enter your code here
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let q = Number(input[2]);
  let i = 3;
  while (q > 0) {
    let k = Number(input[i]);
    console.log(binarySearch(arr, k));
    q--;
    i++;
  }
}
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < k) {
      low = mid + 1;
    } else if (arr[mid] >= k) {
      high = mid - 1;
    }
  }
  return low;
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
  "5" +
    "\n" +
    "1 4 10 5 6" +
    "\n" +
    "4" +
    "\n" +
    "2" +
    "\n" +
    "3" +
    "\n" +
    "5" +
    "\n" +
    "11"
);
