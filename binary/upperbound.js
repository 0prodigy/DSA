function runProgram(input) {
  input = input.split("\n");
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  console.log(binarySearch(arr, k));
}
let ans = -1;
function binarySearch(arr, k) {
  let low = 0;
  let high = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
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

runProgram("5 3" + "\n" + "1 1 2 2 5");
